import React, { useState, useEffect } from 'react';

const EffectItem = ({ fruit }) => {
  useEffect(() => {
    alert(`you clicked ${fruit} times`);
  }, [fruit]);

  return <p>You clicked fruit {fruit} times</p>;
}

const ConditionEffectFromProps = () => {
  const [fruit, setFruit] = useState(0);
  const [vegetable, setVegetable] = useState(1);

  return (
    <div>
      <h1>Condition Effect From Props example</h1>
      <EffectItem fruit={fruit} />
      <button onClick={() => setFruit(fruit + 1)}>
        Click fruit
      </button>
      <p>You clicked vegetable {vegetable} times</p>
      <button onClick={() => setVegetable(vegetable + 1)}>
        Click vegetable
      </button>
    </div>);
}

export default ConditionEffectFromProps;