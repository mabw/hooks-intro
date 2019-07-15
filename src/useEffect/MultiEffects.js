import React, { useState, useEffect } from "react";

const MultiEffects = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`page loaded 1`);
  });
  useEffect(() => {
    alert(`page loaded 2`);
  });
  useEffect(() => {
    alert(`page loaded 3`);
  });

  return (
    <div>
      <h1>Basic effect example</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default MultiEffects;
