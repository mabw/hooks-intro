import React, { useState } from 'react';

const MultiStateExample = () => {
  const [fruit, setFruit] = useState(0);
  const [vegetable, setVegetable] = useState(1);
  const [cereals, setCereals] = useState(2);

  return (
    <div>
      <h1>Multi state example</h1>
      <p>You clicked fruit {fruit} times</p>
      <button onClick={() => setFruit(fruit + 1)}>
        Click fruit
      </button>
      <p>You clicked vegetable {vegetable} times</p>
      <button onClick={() => setVegetable(vegetable + 1)}>
        Click vegetable
      </button>
      <p>You clicked cereals {cereals} times</p>
      <button onClick={() => setCereals(cereals + 1)}>
        Click cereals
      </button>
    </div>);
}

export default MultiStateExample;