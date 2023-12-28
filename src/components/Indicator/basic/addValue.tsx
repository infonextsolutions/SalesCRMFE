import { getBasicIcon } from "@/utils/AssetsHelper";
import SimpleButton from "@/utils/Button/SimpleButton";
import Image from "next/image";
import React, { useState } from "react";

const AddText = ({ title, place, change }: any) => {
  return (
    <div className="w-[100%]  mb-[15px]">
      <p className="w-[100%] text-[#8A9099] font-medium tracking-wide mb-[8px]">
        {title}
      </p>
      <input
        onChange={(e: any) => {
          change(e.target.value);
        }}
        className="w-[100%] h-[41px] rounded-[14px] bg-transparent border-[2px] border-[#e4e4e4] text-[#3F434A] px-[14px] outline-none text-[14px] font-medium tracking-wide"
        type="text"
        name=""
        placeholder={place}
        id=""
      />
    </div>
  );
};

const Addvalue = ({ cancel, submit }: any) => {
  const [data, setData] = useState({
    indicator_value: "",
    alternatives: "",
  });
  return (
    <div className="w-[100%] h-[100%] py-[10px] pl-[30px] pr-[40px]  relative">
      <h1 className="text-[#3f434a] text-[31px] font-medium mb-[24px] tracking-[1px]">
        New Indicator value
      </h1>
      <div
        className="w-[30px] h-[30px] cursor-pointer rounded-xl absolute top-[20px] right-[30px] flex items-center justify-center bg-[#f8f8f8]"
        onClick={() => {
          cancel();
        }}
      >
        <Image
          className="w-[15px] h-[15px]"
          src={getBasicIcon("Cross")}
          width={15}
          height={15}
          alt=""
        />
      </div>
      <AddText
        title="Add New Indicator Value"
        place={"Indicator Value Name"}
        change={(e: any) => {
          setData({ ...data, indicator_value: e });
        }}
      />
      <AddText
        title="Alternative Values For The Indicator Value"
        place={"Enter Comma Seperated Values"}
        change={(e: any) => {
          setData({ ...data, alternatives: e });
        }}
      />
      <div className="w-[100%] flex justify-end">
        <SimpleButton
          theme={1}
          click={submit}
          text={"Create"}
          left={20}
          right={0}
        />
      </div>
    </div>
  );
};

export default Addvalue;
