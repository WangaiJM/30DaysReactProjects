import React, { useEffect, useState } from "react";
import { CiUnlock } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

import home from "./../images/home.jpg";
import lock from "./../images/lock.jpg";

const Locker = () => {
  const [time, setTime] = useState(new Date());
  const [unlock, setUnlock] = useState(true);
  const input = document.querySelector("#slider");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleLock = (e) => {
    e.target.value === "100" ? setUnlock(false) : setUnlock(true);
  };

  const handleReset = () => {
    input.value = 0;
    setUnlock(true);
  };

  let sliderStyle = {
    width: "100%",
    height: "50px",
    border: "none",
    appearance: "none",
    backgroundColor: "rgb(44, 4, 4)",
    borderRadius: "25px",
  };

  let backImageStyle = {
    backgroundImage: unlock ? `url(${lock})` : `url(${home})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "2em",
    borderRadius: "1em",
  };

  return (
    <div style={backImageStyle}>
      <h1>{unlock ? `Slide to Unlock` : `Press to Lock`}</h1>
      <p className="date">{unlock ? time.toLocaleTimeString() : ""}</p>
      <input
        type="range"
        name="slider"
        id="slider"
        style={sliderStyle}
        onInput={handleLock}
        className={!unlock ? "hidden" : ""}
      />
      {unlock ? (
        <CiLock className={`lockStyle `} />
      ) : (
        <CiUnlock className="lockStyle" onClick={handleReset} />
      )}
    </div>
  );
};

export default Locker;
