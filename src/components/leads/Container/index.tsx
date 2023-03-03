import React from "react";

const LeadsContainer = ({ children }: LeadContainerProps) => {
  return (
    <div className="w-[100%] bg-white min-h-[70vh] rounded-[24px]">
      <div className="w-[100%] h-[50px] border-b-[1px] border-[#ccc]"></div>
      {children}
    </div>
  );
};

export default LeadsContainer;

interface LeadContainerProps {
  children: JSX.Element[] | JSX.Element;
}