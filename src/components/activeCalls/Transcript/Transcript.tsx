import { getBasicIcon } from "@/utils/AssetsHelper";
import React from "react";

const Search = () => {
  return (
    <div className="w-full px-[38px] mt-[30px] ">
      <div className="w-[100%] h-[40px] border-[#ccc] border-[1px] rounded-[12px]  flex items-center">
        <div className="h-[100%] w-[40px] px-[12px] flex items-center justify-center cursor-pointer ">
          <img className="w-[100%]" src={getBasicIcon("Search")} alt="" />
        </div>
        <div className="grow h-[32px] ">
          <input
            type="text"
            className="w-[100%] h-[32px] bg-white outline-0 text-black "
            placeholder="Search Transcript..."
          />
        </div>
        <div className="h-[100%] w-[40px] px-[12px] flex items-center justify-center cursor-pointer ">
          <img className="w-[100%]" src={getBasicIcon("Filter")} alt="" />
        </div>
      </div>
    </div>
  );
};

const Transcript = () => {

    const arr = new Array(10).fill(10)

  return (
    <div>
      <Search />
      <div className="w-full px-[22px] mt-[30px] bg-[#ccc] min-h-[30vh]">
        <div className="w-[100%] h-[400px] hide-scrollbar bg-white px-[30px] py-[26px] overflow-y-auto">
          {arr.map((item) => {
            return (
              <>
                <div className="flex items-center my-[8px] ">
                  <p className="text-[#304FFD] text-[15px] mr-[30px] tracking-wide">
                    00:05 John:
                  </p>
                  <p className="text-black tracking-wide font-medium text-[15px]">
                    Hello Shraddha. How are you
                  </p>
                </div>
                <div className="flex items-center my-[8px] ">
                  <p className="text-[#FF965D] text-[15px] mr-[30px] tracking-wide">
                    00:07 Shraddha:
                  </p>
                  <p className="text-black tracking-wide font-medium text-[15px]">
                    Hello I am Fine. Thank you.
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Transcript;
