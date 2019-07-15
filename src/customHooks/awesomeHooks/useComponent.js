import React from 'react';

const useComponent = (action) => {
  const Component = ({ children }) => (
    <div onClick={action}>{children}</div>
  );

  return Component;
}

export default useComponent;