import React from "react";
import Tracker from "../conversation-tracker";
import Transcript from "../Transcript/Transcript";

const list = [
  {
    duration: 40,
    at: 20,
  },
  {
    duration: 60,
    at: 80,
  },
  {
    duration: 30,
    at: 160,
  },
  {
    duration: 40,
    at: 210,
  },
  {
    duration: 40,
    at: 280,
  },
  {
    duration: 40,
    at: 320,
  },
  {
    duration: 40,
    at: 400,
  },
  {
    duration: 40,
    at: 500,
  },
];

const Video = () => {
  return (
    <>
      <div className="w-full relative p-[20px] ">
        <div className="w-full h-full flex  absolute z-10 top-0 left-0 items-center justify-center ">
          <div className="w-[100px] h-[100px] cursor-pointer flex items-center justify-center rounded-[34px] bg-white">
            <img src="/Play.svg" className="" alt="" />
          </div>
        </div>
        <img src="/video.svg" className="w-full rounded-2xl" alt="" />
      </div>
      <div className="w-full mt-[30px] mb-[30px] px-[38px] ">
        <h1 className="text-[16px] font-medium text-black uppercase mb-[10px]">
          call data
        </h1>
        <div className="w-full flex items-center">
          <img
            src="/Images/dots/Dot.svg"
            className="h-[18px] svg-ellipse-5 mr-[25px]"
            alt=""
          />
          <p className="text-[#304FFD] text-[14px]">Participant 1:John</p>
        </div>
        <div className="w-full flex items-center mt-[6px]">
          <img
            src="/Images/dots/Dot.svg"
            className="h-[18px] svg-ellipse-6 mr-[25px]"
            alt=""
          />
          <p className="text-[#FF965D] text-[14px]">Participant 2:Shraddha</p>
        </div>
      </div>
      <Tracker title={"John"} list={list} color={"#304FFD"} />
      <Tracker title={"Shraddha"} list={list} color={"#FF965D"} />
      <Tracker title={"Topics"} list={list} color={"#0090FF"}/>
      
      <Transcript />
    </>
  );
};

export default Video;
