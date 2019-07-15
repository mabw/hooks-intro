import React from 'react';
import withHOC from './withHOC';

class StepTwo extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      checked: false,
    }
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <h4>Step two</h4>
        <input type="checkbox" onChange={this.handleOnClicked} checked={this.state.checked} id="checkbox" />
        <label htmlFor="checkbox">check box</label>
        <button type='submit'>next</button>
      </form>
    )
  }

  handleOnClicked = () => {
    this.setState({ checked: !this.state.checked });
  }

  handleOnSubmit = () => {
    const payload = { value: this.state.checked ? 'checked' : 'non-checked' };
    this.props.onSubmit(payload);
    this.props.history.push('/custom-hooks/hoc/step-one');
  }
}

export default withHOC(StepTwo, 'step two');