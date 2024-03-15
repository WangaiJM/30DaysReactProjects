import { IoMdClose } from "react-icons/io";

import "./alert.css";
import { useState } from "react";

const Alert = ({ message, cardClass }) => {
  const [active, setActive] = useState(true);

  const handleClose = () => {
    setActive(false);
  };
  return (
    <div className={`card ${cardClass} ${active ? "active" : ""}`}>
      <p>{message}</p>
      <IoMdClose onClick={handleClose} />
    </div>
  );
};

export default Alert;
