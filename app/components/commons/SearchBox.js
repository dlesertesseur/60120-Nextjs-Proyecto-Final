import Image from "next/image";
import React from "react";

const SearchBox = () => {
  return (
    <div className="flex grow gap-0 items-center justify-between focus:ring-0 focus:ring-offset-0">
      <input
        className="rounded-md h-9 px-3 font-light text-sm w-full bg-slate-200"
        type="text"
      ></input>
      <button className="p-2">
        <div>
          <Image src={"/search.png"} width={24} height={24} alt={"search"} />
        </div>
      </button>
    </div>
  );
};

export default SearchBox;
