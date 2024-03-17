import { useState } from "react";
import Zoom from "./Zoom";

import "./sliderInput.css";

const SliderInput = () => {
  const [number, setNumber] = useState(0);

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  return (
    <div className="container">
      <input type="range" name="slider" id="slider" onInput={handleNumber} />
      <Zoom number={number} />
    </div>
  );
};

export default SliderInput;
