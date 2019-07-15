import React, { useState } from "react";

const ObjectState = () => {
  const [state, setState] = useState({ fruit: 0, vegetable: 1 });

  return (
    <div>
      <h1>Multi state example</h1>
      <p>You clicked fruit {state.fruit} times</p>
      <button onClick={() => setState({ ...state, fruit: state.fruit + 1 })}>
        Click fruit
      </button>
      <p>You clicked vegetable {state.vegetable} times</p>
      <button onClick={() => setState({ vegetable: state.vegetable + 1 })}>
        Click vegetable
      </button>
    </div>
  );
};

export default ObjectState;
