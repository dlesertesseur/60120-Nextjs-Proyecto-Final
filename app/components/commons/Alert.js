import React from "react";

const Alert = ({ text }) => {
  return (
    <div
      className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 text-center"
      role="alert"
      text
    >
      <span class="font-medium">{text}</span>
    </div>
  );
};

export default Alert;
