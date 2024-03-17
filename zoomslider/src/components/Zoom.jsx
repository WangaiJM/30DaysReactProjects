import "./zoom.css";

const Zoom = ({ number }) => {
  const zoomStyle = {
    width: `${!number ? 0 : number * 4}px`,
    height: `${!number ? 0 : number * 4}px`,
    borderRadius: `${!number ? 0 : number * 4}px`,
    border: "2px solid black",
    margin: "auto",
  };
  return (
    <div className="circle" style={zoomStyle}>
      {!number ? 0 : number}
    </div>
  );
};

export default Zoom;
