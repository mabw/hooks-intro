import React, { useState, useEffect } from 'react';

const UpdateEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });


  return (
    <div>
      <h1>Basic effect example</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default UpdateEffect;