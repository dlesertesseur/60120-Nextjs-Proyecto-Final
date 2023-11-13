import React from "react";

const LabelValue = ({ label, value, className }) => {
  return (
    <div className={`flex w-full justify-between ${className}`}>
      <div className="text-lg font-semibold">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
};

export default LabelValue;
