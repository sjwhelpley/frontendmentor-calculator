import React from "react";
import "./Calculator.css";

const btnValues = [
  [7, 8, 9, "DEL"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [".", 0, "/", "x"],
  ["RESET", "="],
];

function Button({ style, value, onClick }) {
  return (
    <button className={style ? `key ${style}` : "key"} onClick={onClick}>
      {value}
    </button>
  );
}

export default function Calculator() {
  const [calc, setCalc] = React.useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const resetClickHandler = () => {
    setCalc({
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num:
        calc.num === 0 && value === "0"
          ? "0"
          : calc.num % 1 === 0
          ? Number(calc.num + value)
          : calc.num + value,
      res: !calc.sign ? 0 : calc.res,
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const delClickHandler = (e) => {
    e.preventDefault();

    setCalc({
      ...calc,
      num: Number(calc.num.toString().slice(0, -1)),
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "x"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : math(Number(calc.res), Number(calc.num), calc.sign),
        sign: "",
        num: 0,
      });
    }
  };

  return (
    <section className="calc">
      <div className="solution-container">
        <p>
          {calc.num ? calc.num.toLocaleString() : calc.res.toLocaleString()}
        </p>
      </div>

      <div className="keys-container">
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              style={
                btn === "DEL"
                  ? "delete-key"
                  : btn === "RESET"
                  ? "reset-key"
                  : typeof btn === "number"
                  ? "num-key"
                  : btn === "="
                  ? "equal-key"
                  : "num-key"
              }
              value={btn}
              onClick={
                btn === "DEL"
                  ? delClickHandler
                  : btn === "RESET"
                  ? resetClickHandler
                  : typeof btn === "number"
                  ? numClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : signClickHandler
              }
            />
          );
        })}
      </div>
    </section>
  );
}
