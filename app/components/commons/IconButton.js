import Image from "next/image";
import React from "react";

const IconButton = ({ text = null, onClick, src, size = 26, children, alert = false }) => {
  return (
    <div className="flex justify-end">
      {alert ? <div className="h-3 w-3 absolute rounded-full bg-red-600"></div> : null}

      <button className="h-10 px-2 rounded-md" onClick={onClick}>
        {text ? (
          <div className="text-sm font-semibold text-white">{text}</div>
        ) : null}
        <div>
          <Image src={src} width={size} height={size} alt={src} />
        </div>
        {children}
      </button>
    </div>
  );
};

export default IconButton;
