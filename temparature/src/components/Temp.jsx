import { useState } from "react";
import "./temp.css";

const Temp = () => {
  const [count, setCount] = useState(0);

  const minusTemp = () => {
    setCount(count - 1);
  };
  const addTemp = () => {
    setCount(count + 1);
  };
  return (
    <div className="container">
      <div className={`circle ${count > 0 ? `positive` : `negative`}`}>
        {count}°C
      </div>
      <div className="adjust">
        <button onClick={minusTemp}>-</button>
        <button onClick={addTemp}>+</button>
      </div>
    </div>
  );
};

export default Temp;
