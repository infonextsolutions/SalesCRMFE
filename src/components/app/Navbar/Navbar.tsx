import React from "react";
import { getBasicIcon, getRoundedAvatar } from "@/utils/AssetsHelper";
import { useAppDispatch } from "@/store/store";
import { triggerMenu } from "@/store/UI";

const Navbar = () => {
 
  const dispatch = useAppDispatch();


  return (
    <div className="w-full h-[60px] border-b-[1px] border-[#eaebec]  bg-white flex items-center justify-between">
      <img src={getBasicIcon("Menu")} className="ml-[20px] cursor-pointer" alt="" onClick={()=>{
        dispatch(triggerMenu());
      }}  />
      <div className="flex w-[240px] h-[100%] pt-[14px] pb-[10px] justify-between mr-[50px]">
        <img src={getBasicIcon("Search")} className="pt-[7px] pb-[7px] cursor-pointer " alt="" />
        <img src={getBasicIcon("Bell + Notification")} className="pt-[7px] pb-[7px] cursor-pointer " alt="" />
        <div className="flex w-[160px] justify-between items-center border-l-[1px] border-[#dcd4d4] " >
          <img className="ml-[20px] h-[100%] cursor-pointer" src={getRoundedAvatar(1, 30)} alt="" />
          <p className="text-black  cursor-pointer">Jane C.</p>
          <img src={getBasicIcon("Arrow Down 1")} className="cursor-pointer" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
