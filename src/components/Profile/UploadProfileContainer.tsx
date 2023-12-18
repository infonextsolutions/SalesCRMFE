import React, { useState } from "react";
import Navigator from "@/utils/customNavigator";
import Image from "next/image";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Comments from "./AudioProfileDetails/CommentUpload";
import Notes from "./AudioProfileDetails/notesUpload";
import CallInfo from "./AudioProfileDetails/uploadedCallInfo";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "@/store/UI";
import Recorded from "@/types/recorded-call";
import Coaching from "./RecordedCoaching";

const AudioProfileContainer = ({
  titles,
  current,
  info,
  check,
  data,
  width,
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

interface AudioProfileContainerProps {
  titles: any[] | any;
  current: Number;
  [key: string]: any;
  check: Boolean;
  data: Root;
}

export interface Root {
  auto_highlights_result: AutoHighlightsResult;
  callTitle: string;
  _id: string;
  audio_url: string;
  transId: string;
  language_model: string;
  acoustic_model: string;
  language_code: string;
  status: string;
  text: string;
  words: Word[];
  confidence: string;
  audio_duration: string;
  utterances: Utterance[];
  chapters: any;
  sentiment_analysis_results: SentimentAnalysisResult[];
  entities: any;
  createdAt: string;
  updatedAt: string;
}

export interface AutoHighlightsResult {
  status: string;
  results: Result[];
}

export interface Result {
  count: number;
  rank: number;
  text: string;
  timestamps: Timestamp[];
}

export interface Timestamp {
  start: number;
  end: number;
}

export interface Word {
  text: string;
  start: number;
  end: number;
  confidence: number;
  speaker: string;
}

export interface Utterance {
  confidence: number;
  end: number;
  speaker: string;
  start: number;
  text: string;
  words: Word2[];
}

export interface Word2 {
  text: string;
  start: number;
  end: number;
  confidence: number;
  speaker: string;
}

export interface SentimentAnalysisResult {
  text: string;
  start: number;
  end: number;
  sentiment: string;
  confidence: number;
  speaker: string;
}
