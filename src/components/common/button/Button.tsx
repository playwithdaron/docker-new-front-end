import React from 'react';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  marginTop?: string | number;
  marginButton?: string | number;
  fontSize?: string | number;
  borderRadius?: string | number;
  padding?: string | number;
  border?: string | number;
  fontWeight?: string | number;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  width,
  height,
  backgroundColor,
  borderColor,
  textColor,
  fontSize,
  borderRadius,
  border,
  padding,
  fontWeight,
  className,
  style,
  ...props
}) => {
  const buttonStyle: React.CSSProperties = {
    width,
    height,
    backgroundColor,
    borderColor,
    color: textColor,
    fontSize,
    border,
    fontWeight,
    borderRadius,
    padding,
    ...style,
  };

  return (
    <button
      className={`custom_button ${className || ''}`}
      onClick={onClick}
      style={buttonStyle}
      {...props}>
      {text}
    </button>
  );
};

export default Button;
