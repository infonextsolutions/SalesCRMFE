import React from "react";
import { getBasicIcon } from "../AssetsHelper";

const DropDown = ({ list }: any) => {
  return (
    <div className=" px-[8px] pt-[10px] pb-[3px] flex flex-col min-h-[30px] rounded-[10px] bg-white absolute top-[50px] drop-shadow-2xl z-10 right-0 ">
      {list.map((item: any, i: any) => {
        console.log(item, i);
        return (
          <div className={`mb-[4px] px-[15px] box-content flex items-center h-[35px] rounded-[10px] hover:bg-[#e8e9eb] `}>
            <img src={getBasicIcon(item.Icon)} alt="" className={`mt-[2px] h-[17px] mr-[16px] svg-not-selected  hover:svg-selected `}  />
            <p className={`text-black text-[13px] whitespace-nowrap tracking-wider pr-[30px]`} >{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DropDown;
