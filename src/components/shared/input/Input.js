import React from 'react';

const Input = ({
  className,
  value,
  type = 'text',
  name,
  placeholder,
  onChange = () => null,
  min = '',
  max = '',
}) => (
  <input
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    className={className}
    min={min}
    max={max}
  />
);

export default Input;
