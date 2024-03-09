import { useState } from "react";
import "./title.css";

const Title = (text) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <div className="content">
      <h1 className="title">{!name ? "Title" : name}</h1>
      <h2 className="sub-title">{!date ? "12-12-1900" : date}</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia vitae, ea
        minus asperiores sed iure quidem perspiciatis? Eum totam vitae omnis
        quae recusandae! Veritatis, vitae quas quae sapiente nemo amet.
      </p>
      <footer>
        <input
          type="text"
          value={name}
          className="text"
          onChange={handleNameChange}
          placeholder="Your Name"
        />
        <input
          type="date"
          name="date-input"
          id="date"
          value={""}
          onChange={handleDateChange}
        />
      </footer>
    </div>
  );
};

export default Title;
