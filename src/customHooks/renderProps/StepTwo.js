import React from 'react';
import FormWrapper from './FormWrapper';

class StepTwo extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      checked: false,
    }
  }

  render() {
    return (
      <FormWrapper title="step two">
        {onSubmit => (
          <form onSubmit={() => this.handleOnSubmit(onSubmit)}>
            <h4>Step two</h4>
            <input type="checkbox" onChange={this.handleOnClicked} checked={this.state.checked} id="checkbox" />
            <label htmlFor="checkbox">check box</label>
            <button type='submit'>next</button>
          </form>
        )}
      </FormWrapper>
    )
  }

  handleOnClicked = () => {
    this.setState({ checked: !this.state.checked });
  }

  handleOnSubmit = (onSubmit) => {
    const payload = { value: this.state.checked ? 'checked' : 'non-checked' };
    onSubmit(payload);
    this.props.history.push('/custom-hooks/render-props/step-one');
  }
}

export default StepTwo;