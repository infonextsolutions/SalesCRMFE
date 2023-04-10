import React, { useState } from "react";
import Navigator from "@/utils/customNavigator";
import Image from "next/image";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Comments from "./AudioProfileDetails/Comment";
import Notes from "./AudioProfileDetails/Notes";
import CallInfo from "./AudioProfileDetails/CallInfo";

const AudioProfileContainer = ({
  titles,
  current,
  info,
  check,
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
      <Navigator callback={CallBack} current={current} list={list} />
      <div className="flex justify-between w-[100%] relative overflow-hidden">
        <div className="text-black text-[14px] leading-[21px] mt-[25px] tracking-wide ">
          {activeTitle === 0 && <CallInfo check={check} info={info} />}
          {activeTitle === 1 && <Comments />}
          {activeTitle === 2 && <Notes />}
        </div>
        <div className="absolute top-[16px] right-0">
          <Image
            src={getBasicIcon("Edit")}
            className={`w-[16px] h-[16px] cursor-pointer mt-[35px] mr-[30px]`}
            alt=""
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioProfileContainer;

interface AudioProfileContainerProps {
  titles: any[] | any;
  current: Number;
  [key: string]: any;
  check: Boolean;
}
