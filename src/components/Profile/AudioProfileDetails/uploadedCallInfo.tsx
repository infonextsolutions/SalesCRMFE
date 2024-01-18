import Backdrop from "@/components/View/Backdrop/Center";
import EditLead from "@/components/View/EditLead";
import { getBasicIcon } from "@/utils/AssetsHelper";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

const CallInfo = ({ check, info, data }: any) => {
  const activeTitle = 0;

  function convertDatetimeToCustomFormat(dateStr: any) {
    // Convert the string to a Date object
    const dt: any = new Date(dateStr);

    // Calculate the number of seconds since January 1, 1400 (Iranian calendar)
    const referenceDate: any = new Date("1400-01-01T00:00:00Z");
    const secondsDifference = Math.floor((dt - referenceDate) / 1000);

    return secondsDifference;
  }

  return (
    <div>
      {/* {edit && (
        <Backdrop pad={"50px 0"} bool={true} width={"900px"}>
          <EditLead cancel={cancelEdit} update={UpdateData} data={data2} />
        </Backdrop>
      )} */}
      {/* <div className="absolute top-[16px] right-0">
        <Image
          src={getBasicIcon("Edit")}
          className={`w-[16px] h-[16px] cursor-pointer mt-[35px] mr-[30px]`}
          alt=""
          width={16}
          height={16}
          onClick={() => {
            showEdit();
          }}
        />
      </div> */}
      <div className="pl-[30px]">
        <p className="mt-[20px] text-[#3F434A] leading-[30px] text-[20px] font-medium">
          Record Id- {convertDatetimeToCustomFormat(data?.updatedAt)}
        </p>
        <div className="text-[#8A9099] mt-[7px] leading-[21px]">
          <p>{data?.callTitle? (data?.callTitle.length===0?"-":data?.callTitle):"-"}</p>
        </div>
      </div>
      <div className="border-b mt-[20px] w-[600px] h-[1px] px-[30px]"></div>

      {check && (
        <>
          <div className="pl-[30px]">
            <div className="mt-[25px]">
              <p className="text-[#3F434A] text-[15px] font-medium leading-[22px]">
                CALL METRICS
              </p>
              <p className="text-[#3F434A] text-[14px] mt-[10px] leading-[21px]">
                Talk/Listen Ratio
              </p>
              <p className="mt-[5px] text-[#8A9099] text-[12px] leading-[18px]">
                {info[activeTitle].data.talkRatio}
              </p>
            </div>
            <div className="mt-[12px]">
              <p className="text-[#3F434A] text-[14px] leading-[21px]">
                Longest Monologue
              </p>
              <p className="text-[#8A9099] text-[12px] leading-[18px]">
                {info[activeTitle].data.longestMonologue}
              </p>
            </div>
            <div className="mt-[12px]">
              <p className="text-[#3F434A] text-[14px] leading-[21px]">
                Filler words per minute
              </p>
              <p className="text-[#8A9099] text-[12px] leading-[18px]">
                {info[activeTitle].data.fillerWords}
              </p>
            </div>
            <div className="mt-[12px]">
              <p className="text-[#3F434A] text-[14px] leading-[21px]">
                Interactivity
              </p>
              <p className="text-[#8A9099] text-[12px] leading-[18px]">
                {info[activeTitle].data.interactivity}
              </p>
            </div>
            <div className="mt-[12px]">
              <p className="text-[#3F434A] text-[14px] leading-[21px]">
                Next Steps
              </p>
              <p className="text-[#8A9099] text-[12px] leading-[18px]">
                {info[activeTitle].data.nextSteps}
              </p>
            </div>
            <div className="mt-[12px]">
              <p className="text-[#3F434A] text-[14px] leading-[21px]">
                Engaging questions
              </p>
              <p className="text-[#8A9099] text-[12px] leading-[18px]">
                {info[activeTitle].data.engagingQuestions}
              </p>
            </div>
          </div>
          <div className="border-b mt-[20px] w-[600px] h-[1px] px-[30px]"></div>
        </>
      )}
    </div>
  );
};

export default CallInfo;
