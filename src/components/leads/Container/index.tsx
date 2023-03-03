import React from "react";
import Search from "../Search/Search";

const LeadsContainer = ({ children }: LeadContainerProps) => {
  return (
    <div className="w-[100%] bg-white min-h-[70vh] rounded-[18px]">
      <div className="w-[100%] h-[50px] flex items-center border-b-[1px] border-[#ccc]">
        <Search />
      </div>
      {children}
    </div>
  );
};

export default LeadsContainer;

interface LeadContainerProps {
  children: JSX.Element[] | JSX.Element;
}
