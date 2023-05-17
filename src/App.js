import { useContext, useEffect } from "react";
import Calculator from "./components/Calculator";
import ThemeSwitch from "./components/ThemeSwitch";
import "./styles.css";
import { ThemeContext } from "./Theme";

export default function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {}, [theme]);

  return (
    <main className={`App ${theme}`}>
      <section className="app-container">
        <header className="header">
          <h1>calc</h1>
          <ThemeSwitch />
        </header>
        <Calculator />
      </section>
    </main>
  );
}
