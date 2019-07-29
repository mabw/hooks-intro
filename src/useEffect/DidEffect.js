import React, { useState, useEffect } from 'react';

const DidEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`page loaded`);
  }, []);

  return (
    <div>
      <h1>Did effect example</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>);
}

export default DidEffect;