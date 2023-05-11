import Image from "next/image";
import React, { useRef } from "react";
import Tracker from "../conversation-tracker";
import Transcript from "../Transcript/Transcript";
import { getBasicIcon } from "@/utils/AssetsHelper";
import useSound from "use-sound";
import AudioPlayer from "./components/AudioPlayer";
import Recorded from "@/types/recorded-call";
const CallHolder = ({ click }: any) => {
  return (
    <div
      onClick={() => {
        click();
      }}
      className="w-[25px]  h-[25px] flex shrink-0 drop-shadow-md  absolute items-center cursor-pointer justify-center  top-[-10px] right-[-10px] "
    >
      <Image
        src={getBasicIcon("CallPlay")}
        style={{
          zIndex: 10,
        }}
        alt=""
        width={25}
        height={25}
      />
    </div>
  );
};

const CallPlayer = () => {
  const [playing, setPlaying] = React.useState(false);
  const ref: any = useRef();
  React.useEffect(() => {});

  return (
    <div className="w-[100%] h-[100px] mb-[100px] mt-[20px] px-[40px]">
      <p className="text-[34px] mb-[70px] font-medium tracking-wide text-[#000]">
        Call Player
      </p>
      <audio src="/poor-audio.ogg" ref={ref}></audio>
      <div className="w-[100%]  h-[4px] mt-[10px] flex bg-[#fff] relative rounded-[3px]">
        <div className="h-[100%] w-[40%] bg-renal-blue rounded-l-[3px] relative">
          <CallHolder click={() => {}} />
        </div>
        <div className="absolute text-[#8A9099] top-[10px] right-[3px] text-[11px] tracking-wide font-medium ">
          15:53/30:00
        </div>
      </div>
      <div className="w-[100%] mt-[15px] flex justify-center items-center">
        <Image
          src={getBasicIcon("playRev")}
          style={{
            zIndex: 10,
          }}
          alt=""
          width={13}
          height={13}
          className="mr-[9px] cursor-pointer"
        />
        <Image
          src={getBasicIcon("playBtn")}
          style={{
            zIndex: 10,
          }}
          onClick={() => {
            if (!playing) {
              setPlaying(true);
              ref.current.play();
            } else {
              setPlaying(false);
              ref.current.pause();
            }
          }}
          className="translate-y-[1px] cursor-pointer"
          alt=""
          width={40}
          height={40}
        />
        <Image
          src={getBasicIcon("playFor")}
          style={{
            zIndex: 10,
          }}
          className="ml-[8px] cursor-pointer"
          alt=""
          width={13}
          height={13}
        />
      </div>
    </div>
  );
};

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

const Audio = ({data}:props) => {
  console.log(data);



  return (
    <>
      {/* <div className="w-full relative p-[20px] ">
        <div className="w-full h-full flex  absolute z-10 top-0 left-0 items-center justify-center ">
          <div className="w-[100px] h-[100px] cursor-pointer flex items-center justify-center rounded-[34px] bg-white">
            <img src="/Play.svg" className="" alt="" />
          </div>
        </div>
        <img src="/video.svg" className="w-full rounded-2xl" alt="" />
      </div> */}
      {/* <CallPlayer /> */}

      <AudioPlayer src={data.RecordingUrl}  />
      <div className="w-full mt-[30px] mb-[30px] px-[38px] ">
        <h1 className="text-[16px] font-medium text-black uppercase mb-[10px]">
          call data
        </h1>
        <div className="w-full flex items-center">
          <Image
            src="/Images/dots/Dot.svg"
            className="h-[18px] svg-ellipse-5 mr-[25px]"
            alt=""
            width={10}
            height={10}
          />
          <p className="text-[#304FFD] text-[14px]">Participant 1:John</p>
        </div>
        <div className="w-full flex items-center mt-[6px]">
          <Image
            src="/Images/dots/Dot.svg"
            className="h-[18px] svg-ellipse-6 mr-[25px]"
            alt=""
            width={10}
            height={10}
          />
          <p className="text-[#FF965D] text-[14px]">Participant 2:Shraddha</p>
        </div>
      </div>
      <Tracker title={"John"} list={list} color={"#304FFD"} />
      <Tracker title={"Shraddha"} list={list} color={"#FF965D"} />
      <Tracker title={"Topics"} list={list} color={"#0090FF"} />
      <Transcript src={data.RecordingUrl} data={data} />
    </>
  );
};

export default Audio;

interface props{
  data:Recorded
}