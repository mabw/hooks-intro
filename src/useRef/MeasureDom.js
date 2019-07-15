import React, { useRef, useState, useCallback } from 'react';

function MeasureDOM() {
  const [height, setHeight] = useState(0);
  const domRef = useRef();

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div>
      <h1 ref={measuredRef}>Hello, world</h1>
      <h2>The above header is {Math.round(height)}px tall</h2>
      <h4 ref={domRef} style={{ height: '15px' }}>Hello</h4>
      <h4>height: {domRef.current && domRef.current.style.height}</h4>
      <h4>width: {domRef.current && domRef.current.style.width}</h4>
    </div>
  );
}

export default MeasureDOM;