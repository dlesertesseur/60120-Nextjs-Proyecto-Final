import Link from "next/link";
import React from "react";

const Filter = ({ category, title, items }) => {
  return (
    <aside
      className={
        "flex-col w-full justify-between items-center p-2 bg-slate-100 rounded-md"
      }
    >
      <div
        className={`font-medium 
        text-sm 
        text-center 
        inline-flex 
        items-center`}
      >
        {title}
      </div>
      <ul className={`mt-2`}>
        {items?.map((i) => {
          const ret = (
            <li key={i}>
              <Link
                href={`/products/${category}/${i}`}
                className="block px-1 py-2 hover:font-bold text-xs"
              >
                {i}
              </Link>
            </li>
          );
          return ret;
        })}
      </ul>
    </aside>
  );
};

export default Filter;
