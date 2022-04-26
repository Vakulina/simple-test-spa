import './Button.scss';
import React from 'react';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  buttonText: string,
}

const Button: React.FC<ButtonProps> = ({ onClick, buttonText }) => (
  <button
    onClick={onClick}
  >
    {buttonText}
  </button>
)
export default Button;
