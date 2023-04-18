import { getBasicIcon } from "@/utils/AssetsHelper";
import DualRange from "@/utils/dualRange";
import Image from "next/image";
import React, { useRef, useState } from "react";

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

const Tracker = ({ title, color }: any) => {
  const ref: any = useRef();
  const [width, setWidth] = useState<any>();
  React.useEffect(() => {
    const onChange = () => {
      if (ref) {
        setWidth(ref.current.offsetWidth);
      }
    };
    window.addEventListener("resize", onChange);
    onChange();
  }, []);

  return (
    <div className="w-full my-[14px]">
      <h1
        className={` text-[14px] font-medium`}
        style={{
          color: color,
        }}
      >
        {title}
      </h1>
      <div
        className="w-[100%] bg-[#efefef] h-[11px] mt-[5px] relative "
        ref={ref}
      >
        {list.map((item: any, i: any) => {
          return (
            <div
              className="h-[11px] absolute"
              key={i}
              style={{
                width: `${(item.duration / width) * 100}px`,
                backgroundColor: color,
                top: 0,
                left: `${(item.at / width) * 100}px`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

const Text = ({ top, title, width }: any) => {
  return (
    <>
      <div
        className="w-[100%] "
        style={{
          width: width ? width : "100%",
          marginTop: top,
        }}
      >
        <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
          {title}
        </p>
        <input
          type="text"
          value="Regina"
          className="outline-none w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[5px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
        />
      </div>
      <div
        className="w-[100%] "
        style={{
          width: width ? width : "100%",
          marginTop: top,
        }}
      >
        <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
          Link
        </p>
        <p className="text-renal-blue text-[14px] font-medium mt-[6px]">
          https://hello.productx.listen?link23456_1
        </p>
      </div>
    </>
  );
};

const FullCall = ({ cancel }: any) => {
  return (
    <div className="hide-scrollbar w-[100%]  px-[40px] py-[30px] h-[100%] overflow-y-auto relative ">
      <div
        className="w-[30px] h-[30px] cursor-pointer rounded-xl absolute top-[30px] right-[30px] flex items-center justify-center bg-[#f8f8f8]"
        onClick={() => {
          cancel();
        }}
      >
        <Image
          className="w-[15px] h-[15px]"
          src={getBasicIcon("Cross")}
          width={15}
          height={15}
          alt=""
        />
      </div>
      <h1 className="text-[30px] text-text-norm absolute tracking-md font-medium">
        Share Full Call
      </h1>
      <div className="flex w-[100%] h-[100%]">
        <div className="w-[50%] h-[100%] pr-[30px] border-[#ccc] border-r-[1px]">
          <div className="w-full mt-[70px] mb-[20px] relative ">
            <Image
              src="/video.svg"
              width={400}
              height={400}
              className="rounded-2xl w-full"
              alt=""
            />
            <div className="w-full h-full flex bg-[#00000054] rounded-2xl absolute z-10 top-0 left-0 items-center justify-center ">
              <div className="w-[50px] h-[50px] cursor-pointer flex items-center justify-center rounded-[50%] bg-white">
                <Image
                  src="/Play.svg"
                  className="translate-x-[2px] translate-y-[1px]"
                  width={10}
                  height={10}
                  alt=""
                />
              </div>
            </div>
          </div>
          <DualRange title="Call Length:30:00" from="00:00" to="30:00" />
          <Tracker title={"John"} list={list} color={"#304FFD"} />
          <Tracker title={"Shraddha"} list={list} color={"#FF965D"} />
        </div>
        <div className="w-[50%] h-[100%] px-[60px] py-[40px]">
          <Text title={"Snippet Name"} top={20} />
        </div>
      </div>
    </div>
  );
};

export default FullCall;