import Image from "next/image";
import React from "react";
import { getBasicIcon } from "./AssetsHelper";

const RangeHolder = ({ align }: any) => {
  return (
    <div
      className="w-[25px]  h-[25px] flex shrink-0 drop-shadow-md  absolute items-center cursor-pointer justify-center  top-[-10px]"
      style={{
        right: align ? "-5px" : "",
        left: !align ? "-5px" : "",
      }}
    >
      <Image
        src={getBasicIcon("Range")}
        style={{
          zIndex: 10,
        }}
        alt=""
        width={25}
        height={25}
      />
    </div>
  );
};

const DualRange = ({ width, top, title }: any) => {
  return (
    <div
      style={{
        width: width ? width : "100%",
        marginTop: top ? top : "10px",
      }}
      className="my-[15px]"
    >
      <p className="block mb-2 text-sm font-medium text-[#8a9099] tracking-wide">
        {title}
      </p>
      <div className="w-[100%]  h-[4px] mt-[18px] flex bg-[#fff] relative rounded-[3px]">
        <div className="h-[100%] w-[100%] bg-renal-blue rounded-l-[3px] relative">
          <RangeHolder align={true} />
          <RangeHolder />
        </div>
      </div>
    </div>
  );
};

export default DualRange;
