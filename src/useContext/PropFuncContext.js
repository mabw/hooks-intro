import React, { useState, useContext } from "react";
import { MyContext } from "./theme-context";

const AnotherButton = () => {
  const { color, setColor } = useContext(MyContext);
  return (
    <button
      style={{ background: `${color}`, color: "white", height: "38px" }}
      onClick={() => setColor("blue")}
    >
      change button color to blue
    </button>
  );
};

const ThemedButton = () => {
  const { color, setColor } = useContext(MyContext);
  return (
    <div>
      <button
        style={{ background: `${color}`, color: "white", height: "38px" }}
        onClick={() => setColor("red")}
      >
        change button color to red
      </button>
      <br />
      <br />
      <AnotherButton />
    </div>
  );
};
const PropFuncContext = () => {
  const [color, setColor] = useState("blue");

  return (
    <MyContext.Provider value={{ color, setColor }}>
      <ThemedButton />
    </MyContext.Provider>
  );
};

export default PropFuncContext;
