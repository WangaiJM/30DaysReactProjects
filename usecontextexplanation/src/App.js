import "./App.css";
import { Card } from "./components/Card";

import AppContext from "./context/appContext";

function App() {
  const contextValue = {
    number: 2,
    name: "John",
  };
  return (
    <AppContext.Provider value={contextValue} className="App">
      <Card />
    </AppContext.Provider>
  );
}

export default App;
