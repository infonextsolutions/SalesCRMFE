import Recorded from "@/types/recorded-call";
import { getBasicIcon } from "@/utils/AssetsHelper";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

const Search = ({ input, change }: any) => {
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
            value={input}
            onChange={change}
            className="w-[100%] font-medium h-[32px] bg-white outline-0 text-black "
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

const Transcript = ({
  src,
  data,
  text,
  utterances,
}: {
  src: any;
  data: Recorded;
  text: any;
  utterances: any;
}) => {
  //   url = https://testsalescrm.nextsolutions.in/api/audio-transcript/create/by-audio-url
  // method = post
  // body = {
  //     "audio_url":"",
  //     "leadId":"21345678778678687",
  //     "callId":"34567890876546788"
  // }

  console.log(utterances);

  const arr = [];
  for (let i = 0; i < utterances.length; i++) {
    arr.push({
      title: utterances[i].speaker === "A" ? "A" : "B",
      message: utterances[i].text,
      start: utterances[i].start,
      end: utterances[i].end,
    });
  }

  const arrr: any = [
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
        "My career has been, it initially started with a lot of clinical roles in very different areas of specialization within the nursing [???] induinputy and [???] plastics [???] to whole different variety and then I moved into rehabs. I was [???] for 15 years and then basically moved into management role when I was 26 and had been working in the management role for the last 27 years and yeah, about 20 years I have been working in management, and basically did a rehab degree in rehab counseling, which I think played a [???], so [???] sort of varying delay in some respects from the traditional clinical role of nursing.",
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
  const [Arrr, setArr] = useState<any>(arr);
  // const [Arrr, setArr] = useState<any>([{ title: "speaker 1", message: text }]);

  const [input, setInput] = useState("");

  // const transcriptUpdate = async () => {
  //   const res = await axios.post(
  //     "https://testsalescrm.nextsolutions.in/api/audio-transcript/create/by-audio-url",
  //     {
  //       audio_url: src,
  //       leadId: data.leadId._id,
  //       callId: data._id,
  //     }
  //   );

  //   setArr([{ title: "speaker 1", message: res.data.result.text }]);
  // };

  // React.useEffect(() => {
  //   if (Arrr) {
  //     if (Arrr.length === 0) {
  //       transcriptUpdate();
  //     }
  //   }
  // });

  function convertMilliseconds(milliseconds: any) {
    let seconds = Math.floor(milliseconds / 1000) % 60;
    let minutes = Math.floor(milliseconds / (1000 * 60));
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  return (
    <div>
      <Search
        change={(e: any) => {
          setInput(e.target.value);
          const str = e.target.value;
          const newArr = arrr
            .filter(
              (item: any) =>
                item.title.toLowerCase().includes(str.toLowerCase()) ||
                item.message.toLowerCase().includes(str.toLowerCase())
            )
            .map((item: any) => {
              let newTitle = item.title.replace(
                new RegExp(str, "gi"),
                (match: any) =>
                  `<mark style="background: #304ffd ; color: white;">${match}</mark>`
              );
              let newBody = item.message.replace(
                new RegExp(str, "gi"),
                (match: any) =>
                  `<mark style="background:#304ffd ; color: white;">${match}</mark>`
              );
              return {
                ...item,
                title: newTitle,
                message: newBody,
              };
            });
          setArr(newArr);
        }}
        input={input}
      />
      <div className="w-full px-[22px] mt-[30px] bg-[#ccc] min-h-[30vh]">
        <div className="w-[100%] h-[400px] hide-scrollbar bg-white px-[30px] py-[26px] overflow-y-auto">
          {Arrr.map((item: any, i: any) => {
            return (
              <React.Fragment key={i}>
                <div className="flex  my-[8px] ">
                  <p
                    className="text-[#304FFD] shrink-0 w-[100px] font-medium text-[15px] mr-[30px] tracking-wide"
                    style={{
                      color: item.title === "A" ? "#304FFD" : "#FF965D",
                    }}
                    dangerouslySetInnerHTML={{
                      // __html: `00:05 ${item.title}:`,
                      __html: `${convertMilliseconds(item.start)} ${item.title}:`,
                    }}
                  ></p>
                  <p
                    className=" text-black tracking-wide font-medium text-[15px]"
                    dangerouslySetInnerHTML={{ __html: item.message }}
                  ></p>
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
