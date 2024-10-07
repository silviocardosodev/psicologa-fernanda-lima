import React from 'react';
import './style.global.css';

const Button = ({
  label,
  onClick = () => {},
  type = 'button',
  styleType = 'primary',
  disabled = false,
}) => {
  return (
    <button
      className={`button ${styleType}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
