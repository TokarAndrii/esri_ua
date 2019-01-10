import React from 'react';

const Button = ({ className, text, type = 'button', onClick = () => null }) => (
  <button className={className} type={type} onClick={onClick}>
    {text}
  </button>
);

export default Button;
