import './Button.scss';
import React from 'react';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  buttonText: string,
  className?: string,
  disabled?: boolean,
}

const Button: React.FC<ButtonProps> = ({ onClick, buttonText, className, disabled }) => (
  <button className={`button ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {buttonText}
  </button>
)
export default Button;
