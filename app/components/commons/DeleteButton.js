import React from "react";

const DeleteButton = ({ text = null, onClick, children, compact }) => {
  return (
    <button
      className={`bg-red-500 ${compact ? "h-8" : "h-10"} text-sm ${
        compact ? "text-xs" : "text-sm"
      } font-semibold text-white px-6 rounded-md`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default DeleteButton;
