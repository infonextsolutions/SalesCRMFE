import ButtonDropDown from "@/utils/Button/Button";
import React from "react";
import Search from "../Search/Search";

const LeadsContainer = ({ children }: LeadContainerProps) => {
  return (
    <div className="w-[100%] bg-white min-h-[70vh] rounded-[18px]">
      <div className="w-[100%] h-[58px] flex items-center border-b-[1px] border-[#ccc] px-[8px]">
        <Search />
        <ButtonDropDown  light={true} text={"Actions"} border={true} id={1} dropdown={true} />
      </div>
      {children}
    </div>
  );
};

export default LeadsContainer;

interface LeadContainerProps {
  children: JSX.Element[] | JSX.Element;
}
