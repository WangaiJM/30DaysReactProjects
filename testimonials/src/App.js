import "./App.css";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <Buttons text={"Posts"} btnClass={`btn-primary`} url={"posts"} />
      <Buttons text={"Comments"} btnClass={`btn-secondary`} url={"comments"} />
    </div>
  );
}

export default App;
