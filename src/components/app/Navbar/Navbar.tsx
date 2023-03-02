import React from "react";
import { getBasicIcon } from "@/utils/Icons";
const Navbar = () => {
  return (
    <div className="w-full h-[60px] border-b-[1px] border-[#eaebec]  bg-white flex items-center justify-space-between">
        <img src={getBasicIcon("Menu")} className="ml-[20px]" alt="" />
        <div>

        </div>
    </div>
  );
};

export default Navbar;
