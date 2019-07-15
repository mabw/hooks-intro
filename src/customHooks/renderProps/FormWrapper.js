
import React from 'react';

class FormWrapper extends React.Component {
  render() {
    return this.props.children(this.handleOnSubmit)
  }

  handleOnSubmit = payload => {
    alert("title: " + this.props.title + " \npayload: " + JSON.stringify(payload));
  }
}

export default FormWrapper;