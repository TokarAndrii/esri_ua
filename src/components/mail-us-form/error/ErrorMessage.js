import React from 'react';

const ErrorMessage = ({ className, closeBtnClassName, message }) => (
  <div className={className}>
    <span className={closeBtnClassName}>&times;</span>
    <p>
      <strong>Error! </strong>message not sent! {message} Check all fields to be
      inputted correct.
    </p>
  </div>
);

export default ErrorMessage;
