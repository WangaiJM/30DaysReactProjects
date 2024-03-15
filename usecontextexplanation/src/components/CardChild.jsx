import React, { useContext } from "react";
import AppContext from "../context/appContext";

export const CardChild = () => {
  const { number } = useContext(AppContext);
  return <div>{number}</div>;
};
