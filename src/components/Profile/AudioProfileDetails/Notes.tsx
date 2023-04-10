import { getBasicIcon, getRoundedAvatar } from "@/utils/AssetsHelper";
import React from "react";
import Image from "next/image";


const Notes = () => {
  return (<> <div className="bg-gray-100 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4">
    <div className="flex items-center ">
      <Image
        src={getBasicIcon("Filter")}
        className={`w-[40px] ml-[290px] pl-[4px] pr-[4px] p-[6px] bg-white rounded-xl svg-grey`}
        alt=""
        width={20}
        height={20}
        style={{
          objectFit: "contain",
        }}
      />
      <div className="flex ml-2 items-center">
      <button className="bg-renal-blue absolute left flex pl-[7px] rounded-xl pr-[7px] p-[8px]">
      <Image
        src={getBasicIcon("plus")}
        className={`w-[20px] svg-white`}
        alt=""
        width={20}
        height={20}
        style={{
          objectFit: "contain",
        }}
      />
      <p className="whitespace-nowrap font-large  text-[14px] pl-[5px] pr-[5px] text-[#ffffff] ">Add Note</p>
      </button>
      </div>
    </div>
  </div>
  <div className="py-2"></div>
  <div className="mt-[10px] ml-[20px] w-[85%] h-[200px] border-black border-[1px] rounded-[20px] ">
  <p className="mt-[10px] mb-[20px] ml-[14px] text-gray-600">12 June 2020</p>
  <p className=" ml-[14px] text-[18px] font-medium text-black-400">The title of a note</p>
  <div className="py-1"></div>
  <p className=" ml-[14px] text-[14px] font-small text-gray-500">lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod faucibus tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed id nisi id turpis sagittis tincidunt...</p>
  </div>
  <div className="py-2"></div>
  <div className="mt-[10px] ml-[20px] w-[85%] h-[200px] border-black border-[1px] rounded-[20px] ">
  <p className="mt-[10px] mb-[20px] ml-[14px] text-gray-600">12 June 2020</p>
  <p className=" ml-[14px] text-[18px] font-medium text-black-400">The title of a note</p>
  <div className="py-1"></div>
  <p className=" ml-[14px] text-[14px] font-small text-gray-500">lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod faucibus tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed id nisi id turpis sagittis tincidunt...</p>
  </div>
  </>
  );

};

export default Notes;