import "./color.css";

const Colors = () => {
  const changeColor = (e) => {
    let body = document.querySelector("body");
    body.style.background = colorRandomizer();
    e.target.style.background = colorRandomizer();
  };

  const colorRandomizer = () => {
    let hexa = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += hexa[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="container">
      <h1>Color Changer</h1>
      <div className="changers">
        <div className="btn btn-success" onClick={changeColor}>
          Click Me
        </div>
        <div className="btn btn-danger" onClick={changeColor}>
          Click Me
        </div>
        <div className="btn btn-warning" onClick={changeColor}>
          Click Me
        </div>
        <div className="btn btn-primary" onClick={changeColor}>
          Click Me
        </div>
      </div>
    </div>
  );
};

export default Colors;
