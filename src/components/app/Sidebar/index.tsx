import React from "react";
import useUI from "@/hooks/useUI";
import { getBasicIcon } from "@/utils/AssetsHelper";
import SideItem from "./SideItem";
import Logo from "./SidebarLogo";

const Sidebar = () => {
  const { menuOpen, menuOptions, menuSelected } = useUI();

  return (
    <div
      className={`overflow-x-hidden h-screen  ease-in duration-200 bg-white pt-[13px] border-r-[1px] border-[#eaebec] ${
        menuOpen ? "w-[220px]" : "w-[55px]"
      }`}
    >
      <Logo />
      {menuOptions.map((item: any, i: any) => {
        return (
          <SideItem
            img={getBasicIcon(item.icon)}
            title={item.title}
            list={item.list}
            id={i}
            key={i}
            open={menuOpen}
            selected={menuSelected}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
