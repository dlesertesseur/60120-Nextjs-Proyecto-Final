import React from "react";

const Text = ({ className, children }) => {
  return <h1 className={`text-xs font-semibold ${className}`}>{children}</h1>;
};

export default Text;
