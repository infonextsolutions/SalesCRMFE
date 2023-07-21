import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Activity = [
  {
    activityType: "Phone",
    title: "Demo call with Shradha",
    time: "| 23 Jan 2023 | 4:00 PM | 30 Min |",
  },
  {
    activityType: "Calendar",
    title: "Demo with Piyush",
    time: "| 13 April 2023 | 2:00 PM | 30 Min |",
  },
  {
    activityType: "Mail",
    title: "Demo Mail with Shradha",
    time: "| 27 Dec 2023 | 4:00 PM | 30 Min |",
  },
  {
    activityType: "Phone",
    title: "Demo call with Shradha",
    time: "| 31 Jan 2023 | 7:00 PM | 50 Min |",
  },
];
const MidPath = ({ active }: any) => {
  return (
    <div className="w-[31px] flex items-center justify-between">
      <div
        className={`w-[4px] h-[4px] rounded-[50%] ${
          active ? "bg-[#B656EB]" : "bg-gray-400"
        }`}
      ></div>
      <div
        className={`w-[19px] h-[4px] rounded-[12px] ${
          active ? "bg-[#B656EB]" : "bg-gray-400"
        }`}
      ></div>
      <div
        className={`w-[4px] h-[4px] rounded-[50%] ${
          active ? "bg-[#B656EB]" : "bg-gray-400"
        }`}
      ></div>
    </div>
  );
};

const SingleActivity = ({ act, i, random }: any) => {
  const [hover, setHover] = useState(false);
  const [bounding, setBounding] = useState({ top: 0, left: 0 });
  const ref: any = useRef();

  return (
    <div
      className="flex justify-between"
      ref={ref}
      onMouseOver={() => {
        const box = ref.current.getBoundingClientRect();
        setBounding({ left: box.x, top: box.y });
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Image
        src={getBasicIcon(act.activityType)}
        alt=""
        width={15}
        height={15}
      />
      {random > i && <MidPath active={true} />}
      {hover && (
        <div
          className="bg-[#E8E9EB] max-w-[180px] flex flex-col items-center rounded-[15px] fixed py-[8px] px-[15px]  right-[10px] drop-shadow-sm"
          style={{
            zIndex: 10000000000000,
            // top: !last ? "30px" : "",
            // right: "10px",
            // bottom: last ? "30px" : "",
            top: bounding.top - 50,
            left: bounding.left,
          }}
        >
          <p className="text-[#B656EB] w-[100%] text-[13px] font-medium">
            {act.title}
          </p>
          <p className="text-[#000] text-[9px] w-[100%] font-medium">
            {act.time}
          </p>
        </div>
      )}
    </div>
  );
};
const ActivityHistory = ({ width, left, random }: any) => {
  return (
    <div
      className={`flex items-center justify-center h-[20px] shrink-0 cursor-pointer`}
      style={{ width: width, marginLeft: left }}
    >
      {Activity.map((act, index) => {
        return random >= index ? (
          <SingleActivity act={act} random={random} i={index} key={index} />
        ) : (
          <div className="flex justify-between">
            {Activity.length > index && <MidPath active={false} />}
            <p className="text-gray-500 mt-[-7px] text-3xl">-</p>
            {/* <Image src={getBasicIcon("mi)} alt="" width={15} height={15} /> */}
          </div>
        );
      })}

      {/* <Image src={getBasicIcon("Calendar")} alt="" width={15} height={15} />
         <MidPath />
        <Image src={getBasicIcon("Calendar")} alt="" width={15} height={15} />
          <MidPath />
         <Image src={getBasicIcon("Mail")} alt="" width={15} height={15} />
        <MidPath />
         <Image src={getBasicIcon("Phone")} alt="" width={15} height={15} /> */}
    </div>
  );
};

export default ActivityHistory;
