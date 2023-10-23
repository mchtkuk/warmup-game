import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

export const CarouselComponent = () => {
  return (
    <Carousel  className="presentation-mode" showThumbs={false} autoPlay={false} infiniteLoop={false} showStatus={false} emulateTouch={true}>
    <div className='flex flex-col justify-center items-center h-full'>
      <h1>Welcome to Warm up game</h1>
      <h3>Swipe and read the tutorial</h3>
    </div>
    <div className='flex-col flex justify-center items-center h-full'>
      <h1>If you're tired with waiting death matches</h1>
      <h2>This game is just for you</h2>
    </div>
    <div className='flex-col flex justify-center items-center h-full'>
      <div>
        <p>Click them and gain score</p>
        <p>Yes, it is just that easy</p>
      </div>
      <div className='flex-row flex w-1/2'>
      <img src="../../ct.png" style={{width: "50%"}} />
      <img src="../../t.png"  style={{width: "50%"}} />
      </div>
    </div>
</Carousel>
  )
}
