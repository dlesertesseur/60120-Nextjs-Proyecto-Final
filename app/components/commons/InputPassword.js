import React from "react";

const InputPassword = ({ label, setValue, value, error }) => {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-1">
        <input
          onChange={setValue}
          value={value}
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className={`w-full rounded-md px-2 py-1 ring-1 ${
            error
              ? "ring-red-600 text-red-600 bg-red-100"
              : "ring-gray-300 text-gray-900"
          }  placeholder:text-gray-400 sm:text-sm sm:leading-6`}
        />
      </div>
      {error ? (
        <div className="block text-xs font-medium text-red-600">{error}</div>
      ) : null}
    </div>
  );
};

export default InputPassword;
