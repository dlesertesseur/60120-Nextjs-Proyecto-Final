"use client";
import Image from "next/image";
import React, { useState } from "react";

const UploadButton = (
  label,
  setValue,
  value,
  name,
  compact = true,
  onClick
) => {
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div className={"flex-col"}>
      {imgData ? (
        <Image
          src={imgData ? imgData : ""}
          alt={picture ? picture : ""}
          width={144}
          height={144}
          className={"flex"}
        ></Image>
      ) : <div className="box-border h-36 w-36 border-2"></div>}
      <input
        type="file"
        id={label}
        name={name}
        accept="image/*"
        className={"mt-1"}
        onChange={onChangePicture}
      />
    </div>
  );
};

export default UploadButton;
