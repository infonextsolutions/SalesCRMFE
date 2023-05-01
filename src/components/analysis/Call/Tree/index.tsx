import React from "react";
import ButtonDropDown from "@/utils/Button/Button";
import Charts from "./treemap";

const TreeMap = () => {
  return (
    <div className="w-[100%] overflow-hidden bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px] mt-[50px] mb-[50px]">
      <div className="w-[100%] flex items-center justify-between overflow-hidden">
        <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
          Pitch Analysis
        </h1>
        <div className="flex">
          <ButtonDropDown
            light={true}
            text={"19 Aug – 25 Aug"}
            icon={"Calendar"}
            border={true}
            id={1}
            dropdown={true}
            list={[]}
          />
          <ButtonDropDown
            light={true}
            text={"Team A"}
            border={true}
            id={1}
            dropdown={true}
            list={[]}
          />
        </div>
      </div>
      <div className="w-[100%] overflow-x-auto custom-scroll">
        <Charts />
      </div>
    </div>
  );
};

export default TreeMap;
