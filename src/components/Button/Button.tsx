import './Button.scss';
import React from 'react';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  buttonText: string,
  className?: string,
}

const Button: React.FC<ButtonProps> = ({ onClick, buttonText, className }) => (
  <button className={`button ${className}`}
    onClick={onClick}
  >
    {buttonText}
  </button>
)
export default Button;
