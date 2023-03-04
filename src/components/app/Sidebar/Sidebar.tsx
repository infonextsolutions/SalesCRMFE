import useUI from "@/hooks/useUI";
import { getBasicIcon } from "@/utils/AssetsHelper";
import React from "react";

const Logo = () => {
  return (
    <div
      className="cursor-pointer w-[200px] bg-white flex items-center"
    >
      <img src="./Images/Logo/Compact.svg" alt="" className="w-[35px]" />
      <p className="tracking-wide text-[#3F434A] ml-[10px] font-bold text-[16px] poppins">
        Product X
      </p>
    </div>
  );
};

const SideItem = ({img,title}:any) => {
  return (
    <div className={"cursor-pointer w-[200px] bg-white flex items-center mt-[12px]"}>
      <img src={img} alt="" className={"w-[35px] p-[6px]"} />
      <p className="tracking-wider text-[#3F434A] ml-[10px] font-medium text-[14px] poppins">
        {title}
      </p>
    </div>
  );
};

const Sidebar = () => {

  const {menuOpen} = useUI();
  return (
    <div
      className={`overflow-x-hidden h-screen  ease-in duration-200 bg-white px-[10px] pt-[13px] border-r-[1px] border-[#eaebec] ${
        menuOpen ? "w-[220px]" : "w-[55px]"
      }`}
    >
      <Logo  />
      <SideItem img={getBasicIcon("Grid")} title={"Dashboard"} />
      <SideItem img={getBasicIcon("Sort")} title={"Sales"} />
      <SideItem img={getBasicIcon("Phone")} title={"Coaching"} />
      <SideItem img={getBasicIcon("Tasks")} title={"Calling"} />
    </div>
  );
};

export default Sidebar;