import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const HiddenSearch = () => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search"
        className={`input ${active ? "active" : ""}`}
      />
      <CiSearch className="btn" onClick={handleActive} />
    </div>
  );
};

export default HiddenSearch;
