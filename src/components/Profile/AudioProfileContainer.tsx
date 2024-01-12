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
  refresh,
}: AudioProfileContainerProps) => {
  const activeTitle = useSelector((state: any) => state.ui.current);
  const dispatch = useDispatch();
  function CallBack(childData: any) {
    // setActiveTitle(childData);
    dispatch(setCurrent(childData));
  }
  const list = titles.map((title: any, i: any) => ({ id: i, title: title }));

  const timestamp = data1?.createdAt;
  const date = new Date(timestamp);

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;

  return (
    <div
      className={`w-[${width ? width : "100%"
        }]  bg-[#ffe3e170] rounded-xl p-[25px] px-[35px] pt-[30px]`}
    >
      {data1?.companyId?.company_name && (
        <div className="w-[90%] flex justify-around">
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
            {data1?.companyId?.company_name}
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
          <div className="flex gap-2 text-[black]">
            <Image
              src={getBasicIcon("Time")}
              style={{
                zIndex: 10,
              }}
              alt=""
              width={25}
              height={25}
            />
            {formattedTime}
          </div>
        </div>
      )}
      <hr className="border-t-4 border-red-300 mt-4" />
      <Navigator
        callback={CallBack}
        current={activeTitle}
        list={list}
        width={false}
      />
      <div className="flex justify-between w-[100%] relative overflow-hidden">
        <div className="text-black w-[100%] text-[14px] leading-[21px] mt-[25px] tracking-wide ">
          {activeTitle === 0 && (
            <CallInfo data1={data1} data={data} check={check} info={info} />
          )}
          {activeTitle === 1 && (
            <CommentsAndNotes data={data} notesData={data} />
          )}
          {activeTitle === 2 && <Coaching data={data} refresh={refresh} />}
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
  refresh?: any;
}
