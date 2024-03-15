import { useState } from "react";
import "./App.css";
import Theme from "./component/Theme";
import { ThemeContext } from "./context/theme-context";

function App() {
  const appContext = {
    light: "Light",
    dark: "Dark",
  };

  const body = document.querySelector("body");
  const [theme, setTheme] = useState(appContext.light);

  if (theme === appContext.light) {
    body.classList.remove("dark");
    body.classList.add("light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
  }

  const changeTheme = () => {
    theme === appContext.light
      ? setTheme(appContext.dark)
      : setTheme(appContext.light);
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }} className="App">
      <Theme />
    </ThemeContext.Provider>
  );
}

export default App;
