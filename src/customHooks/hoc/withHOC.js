import React from 'react';

function withHOC(WrappedComponent, title) {
  return class Component extends React.Component {
    render() {
      return <WrappedComponent {...this.props} onSubmit={this.handleOnSubmit} />
    }

    handleOnSubmit = payload => {
      alert("title: " + title + " \npayload: " + JSON.stringify(payload));
    }
  }
}

export default withHOC;