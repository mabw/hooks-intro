import React, { useReducer } from 'react';

const init = (initialCount) => {
  return initialCount;
}

const initialCount = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

const InitReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <div>
      <h1>Basic reducer demo</h1>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}>

        Reset
      </button>
    </div>
  );
}

export default InitReducer;