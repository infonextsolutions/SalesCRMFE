import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React, { useState } from "react";

const DropItems = ({ title, list, top, change }: any) => {
  return (
    <div
      className="w-[100%]"
      style={{
        marginTop: top,
      }}
    >
      <p className="block mb-2 text-sm font-medium text-[#8a9099] tracking-wide">
        {title}
      </p>
      <select
        id="countries"
        onChange={(e: any) => {
          change(e.target.value);
        }}
        className=" border border-gray-300 outline-none text-gray-900 text-sm rounded-2xl tracking-wide text-[#3F434A] font-medium  block w-full p-2.5 bg-white"
      >
        {list.map((item: any, i: any) => {
          return (
            <option
              key={i}
              onClick={() => {
                change(item.value);
              }}
              value={item.value}
              selected={item.selected}
            >
              {item.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const Addvalue = ({ cancel }: any) => {
  const [data, setData] = useState({
    indicator_type: "",
    indicator_category: "",
    indicator_value: "",
    alternatives: "",
    comparision_type: "",
    time_restriction: "",
    speaker: "",
  });
  return (
    <div className="w-[100%] h-[100%] py-[10px] pl-[30px] pr-[40px]  relative">
      <h1 className="text-[#3f434a] text-[31px] font-medium mb-[24px] tracking-[1px]">
        Add Indicator category
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
      <div className="w-[100%] justify-between flex ">
        <div className="w-[63%]">
          <DropItems
            title="Indicator Type"
            top={20}
            list={[
              {
                title: "Choose Indicator type",
                val: 0,
                selected: true,
              },
            ]}
            change={(e: any) => {
              setData({ ...data, indicator_type: e });
            }}
          />
           <DropItems
            title="Indicator Category"
            top={10}
            list={[
              {
                title: "Choose Category type",
                val: 0,
                selected: true,
              },
            ]}
            change={(e: any) => {
              setData({ ...data, indicator_category: e });
            }}
          />
           <DropItems
            title="Indicator Value"
            top={10}
            list={[
              {
                title: "Choose Indicator Value",
                val: 0,
                selected: true,
              },
            ]}
            change={(e: any) => {
              setData({ ...data, indicator_value: e });
            }}
          />
        </div>
        <div className="w-[35%] flex items-end">

        </div>
      </div>
    </div>
  );
};

export default Addvalue;
