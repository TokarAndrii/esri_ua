import React from 'react';

const SuccessMessage = ({ className, closeBtnClassName }) => (
  <div className={className}>
    <span className={closeBtnClassName}>&times;</span>
    <p>
      <strong>Success!</strong>Message sent to us, thank You.
    </p>
  </div>
);

export default SuccessMessage;
