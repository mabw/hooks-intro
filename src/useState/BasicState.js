import React, { useState } from 'react';

const BasicState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Basic state example</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>);
}

export default BasicState;