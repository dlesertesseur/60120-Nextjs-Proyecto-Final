import Image from "next/image";
import React from "react";
import UploadButton from "./UploadButton";

const InputImage = ({ label, value, setValue, disabled }) => {
  const defaultImage = "/noPicture.jpg";

  const setPicture = (e) => {
    console.log(e);
    setValue(e);
  };

  return (
    <div className={"flex flex-col"}>
      <div className={"flex gap-4"}>
        <div className="flex-col items-start">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label}
          </label>
          <Image
            src={value ? value : defaultImage}
            alt={value ? value : defaultImage}
            width={144}
            height={144}
          ></Image>
        </div>

        {!disabled ? (
          <div className="flex-col items-start">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {"Preview"}
            </label>
            <UploadButton
              label={"Upload"}
              name={"Upload"}
              setPicture={setPicture}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default InputImage;
