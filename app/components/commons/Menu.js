"use client";
import Link from "next/link";
import React, { useState } from "react";

const Menu = ({ text, items = [], className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      // onMouseOver={() => {
      //   setOpen(true);
      // }}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div
        className={`font-medium 
        rounded-lg 
        text-sm 
        text-center 
        inline-flex 
        items-center ${className}`}
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
      </div>

      <ul
        // onMouseOut={() => {
        //   setOpen(false);
        // }}
        onClick={() => {
          setOpen(false);
        }}
        className={`absolute mt-3 bg-slate-100 my-1 ${open ? "" : "hidden"}`}
      >
        {items?.map((i) => {
          const ret = (
            <li key={i.value}>
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                href={`/products/${i.slug}`}
                className="block px-4 py-2 hover:bg-gray-200 text-xs"
              >
                {i.value}
              </Link>
            </li>
          );
          return ret;
        })}
      </ul>
    </div>
  );
};

export default Menu;
