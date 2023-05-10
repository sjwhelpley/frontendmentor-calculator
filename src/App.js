import { useContext, useEffect } from "react";
import Calculator from "./components/Calculator";
import ThemeSwitch from "./components/ThemeSwitch";
import "./styles.css";
import { ThemeContext } from "./Theme";

export default function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {}, [theme]);

  return (
    <div className={`App ${theme}`}>
      <div className="app-container">
        <div className="header">
          <h1>calc</h1>
          <ThemeSwitch />
        </div>
        <Calculator />
      </div>
    </div>
  );
}
