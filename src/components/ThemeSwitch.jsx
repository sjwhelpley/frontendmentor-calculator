import React, { useContext } from "react";
import { ThemeContext } from "../Theme";
import "./ThemeSwitch.css";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  var buttons = document.getElementsByClassName("button");
  var arr = [...buttons];

  // set starting input based on theme

  // https://webcodespace.com/how-to-create-a-three-state-toggle-switch-using-html-css-and-javascript/
  arr.forEach((element, index) => {
    element.addEventListener("click", () => {
      element.style.opacity = "1";

      if (index == 0) {
        toggleTheme("theme-one");
      } else if (index == 1) {
        toggleTheme("theme-two");
      } else {
        toggleTheme("theme-three");
      }

      arr
        .filter(function (item) {
          return item != element;
        })
        .forEach((item) => {
          item.style.opacity = "0";
        });
    });
  });

  return (
    <div className="container">
      <p className="theme-label">THEME</p>
      <div className="switch-label-container">
        <div className="label-container">
          <p className="label">1</p>
          <p className="label">2</p>
          <p className="label">3</p>
        </div>

        <div className="toggle-container">
          <input className="button" type="radio" name="toggle" id="one" />
          <input className="button" type="radio" name="toggle" id="two" />
          <input className="button" type="radio" name="toggle" id="three" />
        </div>
      </div>
    </div>
  );
}
