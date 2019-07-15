import React, { useReducer, useEffect } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'sameState':
      return state;
    default:
      throw new Error();
  }
}

const SameReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => alert('page reloaded'));
  return (
    <div>
      <h1>same reducer demo</h1>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'sameState' })}>same</button>
    </div>
  );
}

export default SameReducer;