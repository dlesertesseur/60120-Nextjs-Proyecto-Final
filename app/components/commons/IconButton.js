import Image from "next/image";
import React from "react";

const IconButton = ({ text = null, onClick, src, size = 26, children}) => {
  return (
    <button className=" h-10 px-2 rounded-md" onClick={onClick}>
      {text ? (
        <div className="text-sm font-semibold text-white">{text}</div>
      ) : null}
      <div>
        <Image src={src} width={size} height={size} alt={src} />
      </div>
      {children}
    </button>
  );
};

export default IconButton;
