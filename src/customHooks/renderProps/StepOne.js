import React from 'react';
import FormWrapper from './FormWrapper';

class StepOne extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      input: '',
    }
  }

  render() {
    return (
      <FormWrapper title='step one' >
        {onSubmit => (
          <form onSubmit={() => this.handleOnSubmit(onSubmit)}>
            <h4>Step one</h4>
            <input onChange={(e) => this.handleOnChange(e)} value={this.state.input} />
            <button type='submit'>next</button>
          </form>
        )}
      </FormWrapper>
    )
  }

  handleOnChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleOnSubmit = (onSubmit) => {
    const payload = { value: this.state.input };
    onSubmit(payload);
    this.props.history.push('/custom-hooks/render-props/step-two');
  }
}

export default StepOne;