import React, { useState, useEffect } from "react";
import popSound from "../assets/pop.mp3";

export const GameComponent = () => {
  const [score, setScore] = useState(0);
  const [images, setImages] = useState([]);
  const [restart, setRestart] = useState(false);
  const [previousScore, setPreviousScore] = useState(0);
  const [time, setTime] = useState(60); // Initial time in seconds
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  const [gameOver, setGameOver] = useState(false);

  const handleTimeout = () => {
    setGameOver(true);
  };

  const handleRestart = () => {
    setPreviousScore(score);
    setScore(0);
    setImages([]);
    setGameOver(false);
    setTime(60);
  };

  const handleImageClick = () => {
    setScore(score + 1);
    if (isSoundEnabled) {
      const audio = new Audio(popSound);
      audio.play();
    }
  };
  const imageSources = ["../ct.png", "../t.png"];

console.log(time)

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    return imageSources[randomIndex];
  };

  const renderRandomImages = () => {
    return images.map((_, index) => (
      <img
        key={index}
        src={getRandomImage()}
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
    ));
  };

  const MAX_IMAGES = 1;

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        handleTimeout();
      }

      const newImage = getRandomImage();

      if (images.length >= MAX_IMAGES) {
        const updatedImages = images.slice(1);
        setImages(updatedImages);
      }

      setImages((prevImages) => [...prevImages, newImage]);
    }, 1000);

    return () => clearInterval(timer);
  }, [images, time]);

  return (
    <>
      {gameOver ? (
        <div className="mt-5 flex flex-col gap-5 items-center">
          <p className="text-center font-bold">Game Over</p>
          <p className="text-center font-bold">Score was: {score}</p>
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      ) : (
        <>
          <div className="mt-5 flex flex-col items-center">
            <p className="text-center font-bold">Score: {score}</p>
            <p className="text-center font-bold">Time: {time} seconds</p>
            <button
              className={`${
                isSoundEnabled
                  ? "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  : "bg-red-500 text-white font-semibold py-2 px-4 border border-red-500  rounded shadow"
              } p-2 rounded-lg`}
              onClick={() => setIsSoundEnabled(!isSoundEnabled)}
            >
              {isSoundEnabled ? "Disable Sound" : "Enable Sound"}
            </button>
          </div>
          <div className="flex relative w-screen h-screen overflow-hidden">
            <div className="absolute w-full h-full flex overflow-hidden">
              {renderRandomImages()}
            </div>
          </div>
        </>
      )}
    </>
  );
};
