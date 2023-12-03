import Image from "next/image";
import React from "react";

const InputImage = ({ label, value}) => {
  const defaultImage = "/noPicture.jpg";

  return (
    <div className={"flex flex-col"}>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>

      <div className={"flex gap-4"}>
        <div className="flex items-start">
          <Image src={value ? value : defaultImage} alt={value ? value : defaultImage} width={144} height={144}></Image>
        </div>

        {/* {!disabled ? (
          <div className="flex">
            <UploadButton
              label={"Upload"}
              onClick={(e) => {
                console.log(e.currentTarget.value);
              }}
            />
          </div>
        ) : null} */}
      </div>
    </div>
  );
};
export default InputImage;
