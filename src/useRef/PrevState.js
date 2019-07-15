import React, { useState, useRef, useEffect } from 'react';

const PrevState = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;

  return (
    <div>
      <h1>previous state example</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h4>Now: {count}, before: {prevCount}</h4>
    </div>);
}

export default PrevState;