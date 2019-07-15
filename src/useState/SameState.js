import React, { useState, useEffect } from "react";

const EffectItem = () => {
  useEffect(() => {
    alert(`component loaded`);
  });

  return <p>You clicked fruit </p>;
};

const SameState = () => {
  const [fruit, setFruit] = useState(0);

  useEffect(() => {
    alert(`page loaded`);
  });

  return (
    <div>
      <h1>Multi state example</h1>
      <EffectItem />
      <button onClick={() => setFruit(fruit)}>Click fruit</button>
    </div>
  );
};

export default SameState;
