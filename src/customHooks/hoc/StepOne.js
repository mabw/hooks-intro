import React from 'react';
import withHOC from './withHOC';

class StepOne extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      input: '',
    }
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <h4>Step one</h4>
        <input onChange={(e) => this.handleOnChange(e)} value={this.state.input} />
        <button type='submit'>next</button>
      </form>
    )
  }

  handleOnChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleOnSubmit = () => {
    const payload = { value: this.state.input };
    this.props.onSubmit(payload);
    this.props.history.push('/custom-hooks/hoc/step-two');
  }
}

export default withHOC(StepOne, 'step one');