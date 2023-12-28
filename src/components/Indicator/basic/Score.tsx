import { getBasicIcon } from "@/utils/AssetsHelper";
import SimpleButton from "@/utils/Button/SimpleButton";
import Image from "next/image";
import React, { useState } from "react";

const AddScore = ({ title }: any) => {
  return (
    <div className="flex items-center pl-3 mt-4 justify-between ">
      <div className="flex items-center gap-8">
        <h4 className="w-[180px] text-sm">{title}</h4>
        <Image
          className="cursor-pointer "
          src={getBasicIcon("Edit")}
          alt=""
          // fill={true}
          width={20}
          height={20}
          style={{
            objectFit: "contain",
          }}
          // onClick={() => setEdit(true)}
        />
      </div>
      <div className="">
        <input
          type="text"
          className="border-2 w-[82px] ml-12 rounded-2xl px-8"
        />
      </div>{" "}
      <Image
        className="cursor-pointer "
        src={getBasicIcon("Delete")}
        alt=""
        // fill={true}
        width={20}
        height={20}
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  );
};
const AddTime = ({ title }: any) => {
  return (
    <div className="flex items-center pl-3 mt-4 justify-between ">
      <div className="flex items-center gap-8">
        <h4 className="w-[180px] text-sm">{title}</h4>
        <Image
          className="cursor-pointer "
          src={getBasicIcon("Edit")}
          alt=""
          // fill={true}
          width={20}
          height={20}
          style={{
            objectFit: "contain",
          }}
          // onClick={() => setEdit(true)}
        />
      </div>
      <div className="flex items-center justify-between gap-2 ">
        <input type="time" className="border-2 px-2 rounded-lg" />
        <h4 className="text-gray-600">-</h4>
        <input type="time" className="border-2 px-2 rounded-lg" />
      </div>{" "}
    </div>
  );
};

const Score = ({ cancel, onChange }: any) => {
  const [data, setData] = useState({});
  const [scoreSetting, setScoreSetting] = useState(true);
  const [timeSetting, setTimeSetting] = useState(false);

  const gotoScoreSetting = () => {
    setScoreSetting(true);
    setTimeSetting(false);
  };

  const gotoTimeSetting = () => {
    setTimeSetting(true);
    setScoreSetting(false);
  };

  return (
    <div className="w-[100%] h-[100%] py-[10px] pl-[30px] pr-[40px]  relative">
      <div className="flex justify-around">
        <button
          onClick={gotoScoreSetting}
          className={
            scoreSetting
              ? "focus:outline-none text-white text-[12px] bg-bg-red hover:bg-[#fe50437a] font-medium rounded-lg px-4  py-1.5 mt-2 mb-2"
              : "text-black font-medium text-sm hover:text-white hover:bg-bg-red hover:rounded-lg  hover:py-1.5 hover:px-4 hover:mt-2 hover:mb-2"
          }
          type="button"
        >
          Score Settings
        </button>
        <button
          onClick={gotoTimeSetting}
          className={
            timeSetting
              ? "focus:outline-none text-white text-[12px] bg-bg-red hover:bg-[#fe50437a] font-medium rounded-lg text-md px-4  py-1.5 mt-2 mb-2"
              : "text-black font-medium text-sm hover:text-white hover:bg-bg-red hover:rounded-lg  hover:py-1.5 hover:px-4 hover:mt-2 hover:mb-2"
          }
          type="button"
        >
          Time Settings
        </button>
      </div>
      <hr className="border-t-2 border-gray-300 mb-4" />
      {scoreSetting && (
        <>
          <div className="flex justify-between pl-3 pr-16">
            <h4 className="font-bold text-center">Indicator Type</h4>
            <h4 className="font-bold text-center">
              Score Weightage <br /> (Out of 100 )
            </h4>
          </div>

          <div>
            <div className="">
              <AddScore title={"Introduction"} />
              <AddScore title={"Agenda Setting"} />
              <AddScore title={"Company Introduction"} />
              <AddScore title={"Product/ Service"} />
              <AddScore title={"Probing"} />
              <AddScore title={"Next Steps Discussion"} />
              <AddScore title={"Objecting Handling"} />
              <h2 className="pl-3 mt-4 text-sm cursor-pointer text-[#304FFD]">
                Add New Indicator Type
              </h2>
            </div>
          </div>
        </>
      )}
      {timeSetting && (
        <>
          <div className="flex justify-between px-3">
            <h4 className="font-bold text-center">Indicator Type</h4>
            <div className="flex gap-10">
              <h4 className="font-bold text-center">
                Start Time <br /> (MM:SS)
              </h4>
              <h4 className="font-bold text-center">
                Ends Time <br /> (MM:SS)
              </h4>
            </div>
          </div>

          <div>
            <div className="">
              <AddTime title={"Introduction"} />
              <AddTime title={"Agenda Setting"} />
              <AddTime title={"Company Introduction"} />
              <AddTime title={"Product/ Service"} />
              <AddTime title={"Probing"} />
              <AddTime title={"Next Steps Discussion"} />
              <AddTime title={"Objecting Handling"} />
            </div>
          </div>
        </>
      )}
      <div className="w-[100%] mt-6 flex justify-end">
        <SimpleButton
          theme={1}
          click={() => {}}
          text={"Save"}
          left={20}
          right={0}
        />
        <SimpleButton
          theme={2}
          click={() => {
            cancel();
          }}
          text={"Cancel"}
          left={20}
          right={0}
        />
      </div>
    </div>
  );
};

export default Score;
