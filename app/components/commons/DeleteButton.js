import React from "react";

const DeleteButton = ({ text = null, onClick, children }) => {
  return (
    <button
      className="bg-red-500 h-10 text-sm font-semibold text-white px-6 rounded-md"
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default DeleteButton;
