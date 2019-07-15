import React, { useState } from 'react';
import useSubmit from './useSubmit';


const StepOne = ({ history }) => {
  const [state, setState] = useState('');
  const onSubmit = useSubmit('step one');

  const handleOnChange = (e) => {
    setState(e.target.value);
  }

  const handleOnSubmit = () => {
    const payload = { value: state };
    onSubmit(payload);
    history.push('/custom-hooks/hooks/step-two');
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <h4>Step one</h4>
      <input onChange={(e) => handleOnChange(e)} value={state} />
      <button type='submit'>next</button>
    </form>
  )
}

export default StepOne;