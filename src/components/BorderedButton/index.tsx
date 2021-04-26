import React from "react";

interface BorderedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const BorderedButton = ({ text, ...rest }: BorderedButtonProps) => {
  return (
    <button className="purple-btn" {...rest}>{text}</button>
  );
}

export default BorderedButton;
