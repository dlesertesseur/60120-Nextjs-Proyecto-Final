"use client";
import React, { useState } from "react";

const Dropdown = ({ text, items = [], className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className={`text-white 
        bg-blue-500 
        hover:bg-blue-600 
        font-medium 
        rounded-lg 
        text-sm px-5 py-2.5 
        text-center 
        inline-flex 
        items-center ${className}`}
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {text}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <ul className={`absolute rounded-md bg-slate-100 my-1 ${open ? "" : "hidden"}`}>
        {items?.map((i) => {
          const ret = (
            <li key={i.value}>
              <a href={i.herf} className="block px-4 py-2 hover:bg-gray-200 rounded-md">
                {i.value}
              </a>
            </li>
          );
          return ret;
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
