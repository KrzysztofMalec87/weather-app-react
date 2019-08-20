import React from 'react';

const errorMessage = ({ children }) => (
  <div className="alert alert-danger error-message">{children}</div>
);

export default errorMessage;
