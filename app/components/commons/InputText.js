import React from "react";

const InputText = ({ label, setValue, value, name }) => {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-1">
        <input
          onChange={setValue}
          value={value}
          id={label}
          name={name}
          type="text"
          required
          className="w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default InputText;
