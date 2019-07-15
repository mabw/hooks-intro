import React, { useState } from 'react';
import useSubmit from './useSubmit';

const StepTwo = ({ history }) => {
  const [state, setState] = useState(false);
  const onSubmit = useSubmit('step two');

  const handleOnClicked = () => {
    setState(!state.checked);
  }

  const handleOnSubmit = () => {
    const payload = { value: state.checked ? 'checked' : 'non-checked' };
    onSubmit(payload);
    history.push('/custom-hooks/hooks/step-one');
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <h4>Step two</h4>
      <input type="checkbox" onChange={handleOnClicked} checked={state.checked} id="checkbox" />
      <label htmlFor="checkbox">check box</label>
      <button type='submit'>next</button>
    </form>
  )
}

export default StepTwo;
