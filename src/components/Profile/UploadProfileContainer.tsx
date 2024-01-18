import React, { useState } from "react";
import Navigator from "@/utils/customNavigator";
import Image from "next/image";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Comments from "./AudioProfileDetails/CommentUpload";
import Notes from "./AudioProfileDetails/notesUpload";
import CallInfo from "./AudioProfileDetails/uploadedCallInfo";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "@/store/UI";
import Coaching from "./RecordedCoaching";

const AudioProfileContainer = ({
  titles,
  current,
  info,
  check,
  data,
  width,
}: any) => {
  const activeTitle = useSelector((state: any) => state.ui.current);
  const dispatch = useDispatch();
  function CallBack(childData: any) {
    // setActiveTitle(childData);
    dispatch(setCurrent(childData));
  }
  const list = titles.map((title: any, i: any) => ({ id: i, title: title }));


  return (
    <div
      className={`w-[${
        width ? width : "100%"
      }]  bg-white rounded-xl p-[25px] px-[35px] pt-[30px]`}
    >
      <Navigator
        width={false}
        callback={CallBack}
        current={activeTitle}
        list={list}
      />
      <div className="flex justify-between w-[100%] relative overflow-hidden">
        <div className="text-black w-[100%] text-[14px] leading-[21px] mt-[25px] tracking-wide ">
          {activeTitle === 0 && (
            <CallInfo data={data} check={check} info={info} />
          )}
          {activeTitle === 1 && <Comments data={data} />}
          {activeTitle === 2 && <Notes data={data} />}
          {activeTitle === 3 && <Coaching data={data?._id} />}
        </div>
      </div>
    </div>
  );
};

export default AudioProfileContainer;
