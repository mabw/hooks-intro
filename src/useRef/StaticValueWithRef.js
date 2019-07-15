import React, { useState, useEffect, useRef } from 'react';

const StaticValueWithRef = () => {
  const [state, setState] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setState(state + 1);
    }, 30);

    return () => {
      clearInterval(intervalRef.current);
    };
  });

  return <div>
    <div>{state}</div>
    <div>
      <button onClick={() => {
        clearInterval(intervalRef.current);
      }
      }>stop</button>
    </div>
  </div>
}

export default StaticValueWithRef;