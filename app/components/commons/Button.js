import React from "react";

const Button = ({ text = null, onClick, children }) => {
  return (
    <button
      className="bg-blue-500 h-10 text-sm font-semibold text-white px-7 rounded-md"
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
