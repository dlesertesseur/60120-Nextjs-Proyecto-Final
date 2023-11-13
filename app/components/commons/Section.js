import React from "react";

const Section = ({ children, align, className = "" }) => {
  
    const getAlign = () => {
    let ret = "justify-center";
    switch (align) {
      case "left":
        ret = "justify-start";
        break;
      case "right":
        ret = "justify-end";
        break;
    }
    return ret;
  };

  return <div className={`flex grow gap-2 ${getAlign()} ${className}`}>{children}</div>;
};

export default Section;
