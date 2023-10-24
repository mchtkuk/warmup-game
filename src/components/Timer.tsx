import React, { useState, useEffect } from "react";

const Timer = ({ initialTime, setGameOver }) => {
  const [time, setTime] = useState(initialTime);
  const handleTimer = () => {
    if (time > 0) {
      setTime(time - 1);
    } else {
      setGameOver(true)
    }
  };

  useEffect(() => {
    const timer = setInterval(handleTimer, 1000); 

    return () => clearInterval(timer);
  }, [time]);

  return <div>Time Left: {time}</div>;
};

export default Timer;
