import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <div className="w-full px-[38px] mt-[30px] ">
      <div className="w-[100%] h-[40px] border-[#ccc] border-[1px] rounded-[12px]  flex items-center overflow-hidden">
        <div className="h-[100%] w-[40px] px-[12px] flex items-center justify-center cursor-pointer ">
          <Image
            className="w-[100%]"
            src={getBasicIcon("Search")}
            width={16}
            height={16}
            alt=""
          />
        </div>
        <div className="grow h-[32px] ">
          <input
            type="text"
            className="w-[100%] h-[32px] bg-white outline-0 text-black "
            placeholder="Search Transcript..."
          />
        </div>
        {/* <div className="h-[100%] w-[40px] px-[12px] flex items-center justify-center cursor-pointer ">
          <Image
            className="w-[100%]"
            src={getBasicIcon("Filter")}
            width={16}
            height={16}
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

const Transcript = () => {
  const arr = new Array(10).fill(10);
  const arrr = [
    {
      title: "Interviewer",
      message: "We are talking with Jenny. So what is your current occupation?",
    },
    {
      title: "Interviewee",
      message: "I am an assistant director [???] basically [???].",
    },
    {
      title: "Interviewer",
      message: " And so how long you have been in this particular position?",
    },
    {
      title: "Interviewee",
      message: "I am in this particular position - it has been 4 years.",
    },
    {
      title: "Interviewer",
      message:
        "Are you able to briefly describe your work or career history to date?",
    },
    {
      title: "Interviewee",
      message:
        "My career has been, it initially started with a lot of clinical roles in very different areas of specialization within the nursing [???] industry and [???] plastics [???] to whole different variety and then I moved into rehabs. I was [???] for 15 years and then basically moved into management role when I was 26 and had been working in the management role for the last 27 years and yeah, about 20 years I have been working in management, and basically did a rehab degree in rehab counseling, which I think played a [???], so [???] sort of varying delay in some respects from the traditional clinical role of nursing.",
    },
    {
      title: "Interviewer",
      message:
        "Yeah, sort of I guess first thing [???] broadly speaking, why did you choose to go into nursing?",
    },
    {
      title: "Interviewee",
      message:
        "Because I was paid to train and employed at the same time. In the 70s, things were very different in [???] of jobs and employment...",
    },
  ];

  return (
    <div>
      <Search />
      <div className="w-full px-[22px] mt-[30px] bg-[#ccc] min-h-[30vh]">
        <div className="w-[100%] h-[400px] hide-scrollbar custom-scroll overflow-x-auto bg-white px-[30px] py-[26px] overflow-y-auto">
          {arrr.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <div className="flex  my-[8px] ">
                  <p
                    className="text-[#304FFD] shrink-0 w-[100px] font-medium text-[15px] mr-[30px] tracking-wide"
                    style={{
                      color: i % 2 === 0 ? "#304FFD" : "#FF965D",
                    }}
                  >
                    00:05 {item.title}:
                  </p>
                  <p className=" text-black tracking-wide font-medium text-[15px]">
                    {item.message}
                  </p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Transcript;
