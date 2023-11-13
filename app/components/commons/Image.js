import React from "react";
import Image from "next/image";

const Picture = ({ src, width, height, alt }) => {
  return (
    <div>
      <Image src={src} width={width} height={height} alt={alt} />
    </div>
  );
};

export default Picture;
