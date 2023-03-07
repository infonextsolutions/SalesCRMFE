import ButtonDropDown from "@/utils/Button/Button";
import React from "react";
import Search from "../Search/Search";

const CallsContainer = ({ children }: LeadContainerProps) => {
  return (
    <div className="w-[100%] bg-white min-h-[70vh] rounded-[18px] overflow-hidden mb-[40px]">
      <div className="w-[100%] h-[58px] flex items-center  px-[8px]">
        <Search />
        <ButtonDropDown light={true} text={"Actions"} border={true} id={1} dropdown={true} list={[]} />
      </div>
      {children}
    </div>
  );
};

export default CallsContainer;

interface LeadContainerProps {
  children: JSX.Element[] | JSX.Element;
}
