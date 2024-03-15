import React, { useContext } from "react";
import { CardChild } from "./CardChild";
import AppContext from "../context/appContext";

export const Card = () => {
  const { number, name } = useContext(AppContext);
  return (
    <div>
      <h1>Card</h1>
      <p>{number}</p>
      <p>{name}</p>
      <hr />
      <CardChild />
    </div>
  );
};
