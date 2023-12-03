"use client";
import React from "react";

const InputSelect = ({
  label,
  items = [],
  setValue,
  value,
  name,
  disabled,
}) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>

      {!disabled ? (
        <select
          disabled={disabled ? true : false}
          value={value?.toUpperCase()}
          name={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={setValue}
        >
          {items?.map((i) => {
            return <option key={i.slug ? i.slug : i.id}> {i.value.toUpperCase()} </option>;
          })}
        </select>
      ) : (
        <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {value?.toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default InputSelect;
