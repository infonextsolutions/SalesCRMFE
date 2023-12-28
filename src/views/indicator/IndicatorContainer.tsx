import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React from "react";

const IndicatorContainer = ({ dummydata }: any) => {
  return (
    <div>
      <div className="flex justify-between w-[80%]">
        <h4 className="text-gray-600 font-bold">Indicator Value</h4>
        <h4 className="text-gray-600 font-bold">Alternative Values</h4>
        <h4 className="text-gray-600 font-bold">Score</h4>
      </div>
      <hr className="mt-2" />

      {dummydata.map((data: any) => (
        <div key={data.id}>
          <div className=" w-[99%] flex justify-between">
            <div className=" h-[auto] flex  w-[80%] py-4">
              <h4 className="text-[#585858] w-[47%] pr-4 font-semibold">
                {data.indicator_value}
              </h4>
              <div className="flex flex-col gap-3 w-[50%] ">
                {data.alternative_values.map((item: any) => (
                  <h4
                    key={item.id}
                    className="text-[#585858] font-semibold pr-4"
                  >
                    {item.value}
                  </h4>
                ))}
              </div>
              <h4 className="text-[#585858] font-semibold">{data.score}</h4>
            </div>
            <div className="flex gap-4 w-[10%] h-[62px]">
              <Image
                className="w-[20%] cursor-pointer "
                src={getBasicIcon("Edit")}
                alt=""
                // fill={true}
                width={30}
                height={30}
                style={{
                  objectFit: "contain",
                }}
              />{" "}
              <Image
                className="w-[20%] cursor-pointer  "
                src={getBasicIcon("Delete")}
                alt=""
                // fill={true}
                width={30}
                height={30}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default IndicatorContainer;
