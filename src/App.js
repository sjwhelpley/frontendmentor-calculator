import { useContext } from "react";
import ThemeSwitch from "./components/ThemeSwitch";
import "./styles.css";
import { ThemeContext } from "./Theme";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <div className="header">
        <h1>calc</h1>
        <ThemeSwitch />
      </div>
    </div>
  );
}
