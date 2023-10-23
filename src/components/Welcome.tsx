import React from "react";
import { CarouselComponent } from "./Carousel";

export const Welcome = () => {
  return (
    <div className="flex-col flex justify-center items-center">
      <CarouselComponent />
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        <a href="/game/">Start the game</a>
      </button>
    </div>
  );
};
