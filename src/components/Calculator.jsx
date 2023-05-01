import React from "react";
import "./Calculator.css";

export default function Calculator() {
  const [view, setView] = React.useState(0);

  const reset = () => {
    setView(0);
  };

  return (
    <div className="calc">
      <div className="solution-container">
        <p>{view}</p>
      </div>

      <div className="keys-container">
        <button className="key num-key">7</button>
        <div className="key num-key">8</div>
        <div className="key num-key">9</div>
        <div className="key delete-key">DEL</div>
        <div className="key num-key">4</div>
        <div className="key num-key">5</div>
        <div className="key num-key">6</div>
        <div className="key num-key">+</div>
        <div className="key num-key">1</div>
        <div className="key num-key">2</div>
        <div className="key num-key">3</div>
        <div className="key num-key">-</div>
        <button className="key reset-key" onClick={reset}>
          RESET
        </button>
        <button className="key">=</button>
      </div>
    </div>
  );
}
