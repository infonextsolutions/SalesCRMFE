import ButtonDropDown from "@/utils/Button/Button";
import React from "react";

const Chart = ({ title, percent }: any) => {
  return (
    <div className="w-[10px] h-[100%] flex flex-col items-center relative">
      <div className="w-[30px] h-[100%] mb-[15px] bg-[#f7f8ff] rounded-t-[19px] relative overflow-hidden">
        <div
          className="w-[100%] bg-renal-blue bottom-0 absolute rounded-t-[19px]"
          style={{ height: percent }}
        ></div>
      </div>
      <div className="text-[10px] min-h-[40px] flex items-center justify-center tracking-sm font-medium text-[#8A9099] text-center absolute bottom-[-35px]">
        {title}
      </div>
    </div>
  );
};

const ChartContainer = ({ children }: any) => {
  return (
    <div className="w-[100%] h-[280px] mt-[40px] flex">
      <div className="w-[8%] h-[100%] flex flex-col justify-between items-center text-[#8A9099]">
        <p>100</p>
        <p>75</p>
        <p>50</p>
        <p>25</p>
        <p className="mb-[20px]">0</p>
      </div>
      <div className="w-[92%] h-[100%] flex justify-between pr-[30px] pl-[30px]">
        {children}
      </div>
    </div>
  );
};

const Emotion = () => {
  return (
    <div className="w-[700px] h-[450px] bg-[#fff] rounded-xl shrink-0 px-[19px] py-[19px]">
      <div className="w-[100%] flex items-center justify-between">
        <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
          Emotion Analysis
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
      <ChartContainer>
        <Chart title={"Joy"} percent={"20%"} />
        <Chart title={"Trust"} percent={"30%"} />
        <Chart title={"Politeness"} percent={"50%"} />
        <Chart title={"Satisfaction"} percent={"90%"} />
        <Chart title={"Curiosity"} percent={"70%"} />
        <Chart title={"Confidence"} percent={"60%"} />
        <Chart title={"Empathy"} percent={"50%"} />
        <Chart title={"Assertivenss"} percent={"50%"} />
      </ChartContainer>
    </div>
  );
};

export default Emotion;
