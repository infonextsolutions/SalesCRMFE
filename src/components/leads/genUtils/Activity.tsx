import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React, { useRef, useState } from "react";

const MidPath = () => {
  return (
    <div className="w-[31px] flex items-center justify-between">
      <div className="w-[4px] h-[4px] rounded-[50%] bg-[#B656EB]"></div>
      <div className="w-[19px] h-[4px] rounded-[12px] bg-[#B656EB]"></div>
      <div className="w-[4px] h-[4px] rounded-[50%] bg-[#B656EB]"></div>
    </div>
  );
};

const ActivityHistory = ({ width, left, last }: any) => {
  const [hover, setHover] = useState(false);
  console.log(hover);
  const ref: any = useRef();
  console.log(ref.current.getBoundingClientRect());
  return (
    <div
      className={`flex items-center justify-between h-[20px] relative shrink-0 cursor-pointer`}
      style={{ width: width, marginLeft: left }}
      ref={ref}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Image src={getBasicIcon("Phone")} alt="" width={15} height={15} />
      <MidPath />
      <Image src={getBasicIcon("Calendar")} alt="" width={15} height={15} />
      <MidPath />
      <Image src={getBasicIcon("Mail")} alt="" width={15} height={15} />
      <MidPath />
      <Image src={getBasicIcon("Phone")} alt="" width={15} height={15} />
      {true && (
        <div
          className="bg-[#E8E9EB] min-w-[180px] flex flex-col items-center rounded-[15px] absolute py-[8px] px-[15px]  right-[10px] drop-shadow-sm"
          style={{
            zIndex: 10000000000000,
            top: !last ? "30px" : "",
            right: "10px",
            bottom: last ? "30px" : "",
          }}
        >
          <p className="text-[#B656EB] w-[100%] text-[13px] font-medium">
            Demo Call with Shraddha
          </p>
          <p className="text-[#000] text-[9px] w-[100%] font-medium">
            | 23 Jan 2023 | 4:00 PM | 30 Min |
          </p>
        </div>
      )}
    </div>
  );
};

export default ActivityHistory;
