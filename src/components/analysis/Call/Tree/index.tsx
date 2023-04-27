import ButtonDropDown from "@/utils/Button/Button";
import React from "react";

const TreeMap = () => {
  return (
    <div className="w-[100%] h-[450px] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px] mt-[50px] mb-[50px]">
      <div className="w-[100%] flex items-center justify-between">
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
      <div className="w-[100%] h-[280px] bg-[#ff00ff] mt-[40px]"></div>
    </div>
  );
};

export default TreeMap;
