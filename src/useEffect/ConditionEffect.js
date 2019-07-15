import React, { useState, useEffect } from 'react';

const ConditionEffect = () => {
  const [fruit, setFruit] = useState(0);
  const [vegetable, setVegetable] = useState(1);

  useEffect(() => {
    alert(`you clicked ${fruit} times`);
  }, [fruit]);

  return (
    <div>
      <h1>Condition Effect example</h1>
      <p>You clicked fruit {fruit} times</p>
      <button onClick={() => setFruit(fruit + 1)}>
        Click fruit
      </button>
      <p>You clicked vegetable {vegetable} times</p>
      <button onClick={() => setVegetable(vegetable + 1)}>
        Click vegetable
      </button>
    </div>);
}

export default ConditionEffect;