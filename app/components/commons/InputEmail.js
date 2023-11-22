import React from "react";

const InputEmail = ({ label, setValue, value }) => {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-1">
        <input
          onChange={setValue}
          value={value}
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full rounded-md border-0 px-2 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default InputEmail;
