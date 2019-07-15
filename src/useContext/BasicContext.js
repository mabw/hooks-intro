import React, { useState, useContext } from "react";
import { MyContext } from "./theme-context";

const AnotherButton = ({ changeColor }) => {
  const color = useContext(MyContext);
  return (
    <button
      style={{ background: `${color}`, color: "white", height: "38px" }}
      onClick={() => changeColor("blue")}
    >
      change button color to blue
    </button>
  );
};

const ThemedButton = ({ changeColor }) => {
  const color = useContext(MyContext);
  return (
    <div>
      <button
        style={{ background: `${color}`, color: "white", height: "38px" }}
        onClick={() => changeColor("red")}
      >
        change button color to red
      </button>
      <br />
      <br />
      <AnotherButton changeColor={changeColor} />
    </div>
  );
};
const BasicContext = () => {
  const [color, setColor] = useState("blue");

  return (
    <MyContext.Provider value={color}>
      <ThemedButton changeColor={setColor} />
    </MyContext.Provider>
  );
};

export default BasicContext;
