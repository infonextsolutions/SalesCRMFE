import { getBasicIcon } from "@/utils/AssetsHelper";
import React from "react";

const Search = () => {
  return (
    <div className="w-[80%] h-[34px] border-[#ccc] border-[1px] rounded-[12px] ml-[8px] flex items-center">
        <div className="h-[100%] w-[40px] px-[12px] flex items-center justify-center " >
            <img className="w-[100%]" src={getBasicIcon("Search")} alt="" />
        </div>
        <div>
            <input type="text" />
        </div>
    </div>
  );
};

export default Search;