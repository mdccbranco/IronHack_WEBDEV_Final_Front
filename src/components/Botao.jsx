import React from 'react';

const Button = ({label, method, type }) => {
  return (
    <button className="components-button" onClick={method} type={type}>{label}</button>
  );
}

export default Button;

