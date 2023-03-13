import { getBasicIcon } from "@/utils/AssetsHelper";
import Button from "@/utils/Button/Button";
import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <div className="w-[60%] h-[40px] border-[#ccc] border-[1px] rounded-[12px]  flex items-center">
        <div className="h-[100%] w-[40px] px-[12px] flex items-center justify-center cursor-pointer " >
            <Image className="w-[100%]" fill={true} src={getBasicIcon("Search")} alt="" />
        </div>
        <div className="grow h-[32px] " >
            <input type="text" className="w-[100%] h-[32px] bg-white outline-0 text-black " placeholder="Search contact..." />
        </div>
        <div className="h-[100%] w-[40px] px-[12px] flex items-center justify-center cursor-pointer "  >
            <Image className="w-[100%]" fill={true}  src={getBasicIcon("Filter")} alt="" />
        </div>
    </div>
  );
};

export default Search;