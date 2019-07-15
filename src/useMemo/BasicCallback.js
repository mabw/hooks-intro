import React, { useState, useCallback, useMemo } from 'react';

const BasicCallback = () => {
  const [state, changeState] = useState({});
  const memorizedValue = useMemo(() => Math.random(), []);
  const memorizedCallback = useCallback(() => console.log(memorizedValue), [memorizedValue]);
  const unMemorizedCallback = () => console.log(memorizedValue);
  const { prevMemorizedCallback, prevUnMemorizedCallback } = state;

  return (
    <div>
      <p>Memorized value: {memorizedValue}</p>
      <p>New update {Math.random()}</p>
      <p>is prevMemorizedCallback === to memorizedCallback: {String(prevMemorizedCallback === memorizedCallback)}</p>
      <p>is prevUnMemorizedCallback === to unMemorizedCallback: {String(prevUnMemorizedCallback === unMemorizedCallback)}</p>
      <p><button onClick={memorizedCallback}>memorizedCallback</button></p>
      <p><button onClick={unMemorizedCallback}>unMemorizedCallback</button></p>
      <p><button onClick={() => changeState({ prevMemorizedCallback: memorizedCallback, prevUnMemorizedCallback: unMemorizedCallback })}>update State</button></p>
    </div>
  );
};

export default BasicCallback;