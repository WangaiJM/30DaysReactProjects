import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

const Theme = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div className="container">
      <h1>{`My Blog with ${theme} Theme`}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tenetur
        dicta praesentium ea laborum sapiente labore atque nihil unde laudantium
        deserunt corporis, dolor veritatis assumenda ex itaque accusamus.
        Sapiente nemo quod quos distinctio pariatur assumenda quisquam.
        Inventore ea eligendi optio!
      </p>
      <button onClick={changeTheme}>
        {theme === "Light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default Theme;
