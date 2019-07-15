import React, { useState } from "react";

const InitialState = () => {
  const [count, setCount] = useState(() => {
    alert("page loaded");
    return 0;
  });

  return (
    <div>
      <h1>Initial state example</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default InitialState;
