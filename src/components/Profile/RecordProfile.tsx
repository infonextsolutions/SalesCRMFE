import React, { useState } from "react";
import Navigator from "@/utils/customNavigator";
import Image from "next/image";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Comments from "./AudioProfileDetails/Comment";
import Notes from "./AudioProfileDetails/Notes";
import CallInfo from "./AudioProfileDetails/CallInfo";
import Activityhistory from "./ProfileDetails/Lead/activity";

const RecordProfile = ({
  titles,
  current,
  info,
  check,
  live,
  width,
}: AudioProfileContainerProps) => {
  const [activeTitle, setActiveTitle] = useState(0);

  function CallBack(childData: any) {
    setActiveTitle(childData);
  }
  const list = titles.map((title: any, i: any) => ({ id: i, title: title }));

  return (
    <div
      className={`w-[${
        width ? width : "100%"
      }]  bg-white rounded-xl p-[25px] px-[35px] pt-[30px]`}
    >
      {live && (
        <div className="h-[440px] bg-[#EDEDED] flex justify-center items-center text-[#000000]">
          <p className="text-[40px] leading-[60px] font-medium">
            LIVE VIDEO MEETING
          </p>
        </div>
      )}
      <Navigator callback={CallBack} current={current} list={list} />
      <div className="flex justify-between w-[100%] relative overflow-hidden">
        <div className="text-black w-[100%] text-[14px] leading-[21px] mt-[25px] tracking-wide ">
          {activeTitle === 0 && <CallInfo check={check} info={info} />}
          {activeTitle === 1 && <Activityhistory/>}
          {activeTitle === 2 && <Notes />}
        </div>
      </div>
    </div>
  );
};

export default RecordProfile;

interface AudioProfileContainerProps {
  titles: any[] | any;
  current: Number;
  [key: string]: any;
  check: Boolean;
  live?: any;
}
