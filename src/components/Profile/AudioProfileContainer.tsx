import React, { useState } from "react";
import Navigator from "@/utils/customNavigator";
import Image from "next/image";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Comments from "./AudioProfileDetails/Comment";
import Notes from "./AudioProfileDetails/notesRecordt";
import CallInfo from "./AudioProfileDetails/recordedCallInfo";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "@/store/UI";
import Recorded from "@/types/recorded-call";
import Coaching from "./RecordedCoaching";
import CommentsAndNotes from "./AudioProfileDetails/Comment";

const AudioProfileContainer = ({
  titles,
  current,
  info,
  check,
  data,
  width,
  data1,
}: AudioProfileContainerProps) => {
  console.log("data7:", data);
  const activeTitle = useSelector((state: any) => state.ui.current);
  const dispatch = useDispatch();
  function CallBack(childData: any) {
    // setActiveTitle(childData);
    dispatch(setCurrent(childData));
  }
  const list = titles.map((title: any, i: any) => ({ id: i, title: title }));

  console.log(activeTitle, "pleafgwafaw");

  return (
    <div
      className={`w-[${
        width ? width : "100%"
      }]  bg-white rounded-xl p-[25px] px-[35px] pt-[30px]`}
    >
      {data1?.companyId?.company_name && (
        <div className="w-[70%] flex justify-around">
          <div className="flex gap-2 text-[black]">
            <Image
              src={getBasicIcon("buildingIcon")}
              style={{
                zIndex: 10,
              }}
              alt=""
              width={25}
              height={25}
            />
            {info[0].data?.companyName}
          </div>
          <div className="flex gap-2 text-[black]">
            <Image
              src={getBasicIcon("Calendar")}
              style={{
                zIndex: 10,
              }}
              alt=""
              width={25}
              height={25}
            />
            {new Date(data1.createdAt).toDateString()}
          </div>
        </div>
      )}
      <hr className="border-t-4 border-red-300 mt-4" />
      <Navigator callback={CallBack} current={activeTitle} list={list} />
      <div className="flex justify-between w-[100%] relative overflow-hidden">
        <div className="text-black w-[100%] text-[14px] leading-[21px] mt-[25px] tracking-wide ">
          {activeTitle === 0 && (
            <CallInfo data1={data1} data={data} check={check} info={info} />
          )}
          {activeTitle === 1 && (
            <CommentsAndNotes data={data} notesData={data} />
          )}
          {activeTitle === 2 && <Coaching data={data} />}
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
  data: Recorded;
}
