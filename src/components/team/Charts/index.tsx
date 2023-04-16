import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React from "react";

const Bars = ({ color }: any) => {
  return (
    <div className="w-[40%] bg-[#fff] flex items-center justify-center">
      <div className="w-[80px] h-[80px] rounded-2xl flex items-center justify-between bg-[#fff5ef] px-[13px] py-[17px]">
        <div className="w-[25%] h-[100%] flex items-end">
          <div
            className="w-[100%] h-[28%] bg-renal-blue rounded-t-[3px]"
            style={{
              backgroundColor: color,
            }}
          ></div>
        </div>
        <div className="w-[25%] h-[100%] flex items-end">
          <div
            className="w-[100%] h-[56%] bg-renal-blue rounded-t-[3px]"
            style={{
              backgroundColor: color,
            }}
          ></div>
        </div>
        <div className="w-[25%] h-[100%] flex items-end">
          <div
            className="w-[100%] h-[90%] bg-renal-blue rounded-t-[3px]"
            style={{
              backgroundColor: color,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const ChartItem = ({ down, chartColor,title }: any) => {
  return (
    <div className="w-[280px] mr-[20px] rounded-2xl overflow-hidden h-[100%] bg-[#fff] flex ">
      <div className="w-[60%] flex flex-col px-[22px] py-[25px] h-[100%] ">
        <p className="text-[#8A9099] text-[16px]">{title}</p>
        <div className="w-[100%] flex items-center justify-between pl-[7px]">
          <p className="text-[29px] text-[#000] font-medium tracking-wider">
            101
          </p>
          <div className="flex items-center mb-[-12px] mr-[10px]">
            <Image
              src={getBasicIcon("Arrow-Right 1")}
              className={`translate-y-[1px] ${
                down ? "rotate-90" : "-rotate-90"
              }`}
              alt=""
              width={12}
              height={12}
            />
            <p
              className=" font-medium text-[14px]"
              style={{
                color: down ? "#fd8983" : "#49C96D",
              }}
            >
              50.8%
            </p>
          </div>
        </div>
      </div>
      <Bars color={chartColor} />
    </div>
  );
};

const Charts = () => {
  return (
    <div className="w-[100%] mb-[20px] flex h-[120px]">
      <ChartItem chartColor={"#304cfdś"} title={"Open Deals"} />
      <ChartItem down={true} chartColor={"#49C96D"} title={"Close Deals"} />
      <ChartItem down={true} chartColor={"#fd8983"} title={"Lost Deals"} />
    </div>
  );
};

export default Charts;
