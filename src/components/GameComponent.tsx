import React, { useState, useEffect } from "react";
import popSound from "../assets/pop.mp3";
import Timer from "./Timer.tsx";
const imageSources = ["../ct.png", "../t.png"];

export const GameComponent = () => {
  const [score, setScore] = useState(0);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [currentImage, setCurrentImage] = useState(getRandomImage());
  const [time, setTime] = useState(60); // Initial time in seconds

  const handleTimeout = () => {
      setGameOver(true);
  };

  const handleRestart = () => {
    setScore(0);
    setGameOver(false);
    setCurrentImage(getRandomImage());
    setTime(60);
  };

  const handleImageClick = () => {
    setScore(score + 1);
    if (isSoundEnabled) {
      const audio = new Audio(popSound);
      audio.play();
    }
    setCurrentImage(getRandomImage());
  };

  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    return imageSources[randomIndex];
  }

  console.log(currentImage);

  return (
    <>
      {gameOver ? (
        <div className="mt-5 flex flex-col gap-5 items-center">
          <p className="text-center font-bold">Game Over</p>
          <p className="text-center font-bold">Score was: {score}</p>
          <button
            className="bg-white hover-bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      ) : (
        <>
          <div className="mt-5 flex flex-col items-center">
            <p className="text-center font-bold">Score: {score}</p>
            <Timer initialTime={time} setGameOver={setGameOver} />
            <button
              className={`${
                isSoundEnabled
                  ? "bg-white hover-bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  : "bg-red-500 text-white font-semibold py-2 px-4 border border-red-500 rounded shadow"
              } p-2 rounded-lg`}
              onClick={() => setIsSoundEnabled(!isSoundEnabled)}
            >
              {isSoundEnabled ? "Disable Sound" : "Enable Sound"}
            </button>
          </div>
          <div className="flex relative w-screen h-screen overflow-hidden">
            <div className="absolute w-full h-full flex overflow-hidden">
              <img
                src={currentImage}
                alt="Random Image"
                className="random-image"
                onClick={handleImageClick}
                style={{
                  left: `${Math.random() * 80}vw`,
                  top: `${Math.random() * 60}vh`,
                  width: "250px",
                  height: "250px",
                  position: "relative",
                }}
                draggable="false"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
