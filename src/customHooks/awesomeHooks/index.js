import React, { useState } from 'react';
import useValue from './useValue';
import useFunction from './useFunction';
import useComponent from './useComponent';

const AwesomeHooks = () => {
  const [state, setState] = useState(0);
  const value = useValue(state);
  const action = useFunction(setState);
  const Component = useComponent(() => action(state + 1));

  return (
    <div>
      <h1>Awesome hooks demo</h1>
      <Component><button>{value}</button></Component>
    </div>
  )
}

export default AwesomeHooks;