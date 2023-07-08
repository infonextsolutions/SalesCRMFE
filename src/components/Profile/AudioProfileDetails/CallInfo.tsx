import Backdrop from "@/components/View/Backdrop";
import EditLead from "@/components/View/EditLead";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React, { useState } from "react";


const CallInfo = ({ check, info ,data}: any) => {
  const activeTitle = 0;
  const [edit, setEdit] = useState(false);
  const [bool, setBool] = useState(true);

  const showEdit = () => {
    setEdit(true);
  };

  const cancelEdit = () => {
    setBool(false);
    setTimeout(() => {
      setEdit(false);
      setBool(true);
    }, 500);
  };

  // console.log(data.result.leadId,"here is it")

  return (
    <div>
       {edit && (
        <Backdrop pad={"50px 0"} bool={true} width={"900px"} >
          <EditLead cancel={cancelEdit} data={data.result?.leadId} />
        </Backdrop>
      )}
      <div className="absolute top-[16px] right-0">
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
      </div>
      <div className="pl-[30px]">
        <p className="mt-[20px] text-[#3F434A] leading-[30px] text-[20px] font-medium">
          Call Id- {info[activeTitle].data.callId}
        </p>
        <div className="text-[#8A9099] mt-[7px] leading-[21px]">
          <p>LEAD ID-{info[activeTitle].data.leadID}</p>
          <p>{info[activeTitle].data.leadInfo}</p>
        </div>
        <p className="mt-[20px] text-[#3F434A] leading-[22px] text-[15px] font-medium">
          INFO
        </p>
        <div className="mt-[11px]">
          <p className="text-[#8A9099] text-[12px] leading-[18px] font-medium">
            COMPANY NAME
          </p>
          <p className="mt-[4px] text-[#3F434A] text-[14px] leading-[21px]">
            {info[activeTitle].data.companyName}
          </p>
        </div>
        <div className="mt-[11px]">
          <p className="text-[#8A9099] text-[12px] leading-[18px] font-medium">
            CLIENT POC
          </p>
          <p className="mt-[4px] text-[#3F434A] text-[14px] leading-[21px]">
            {info[activeTitle].data.clientPOC}
          </p>
        </div>
        <div className="mt-[11px]">
          <p className="text-[#8A9099] text-[12px] leading-[18px] font-medium">
            PRODUCT/SERVICE
          </p>
          <p className="mt-[4px] text-[#3F434A] text-[14px] leading-[21px]">
            {info[activeTitle].data.product}
          </p>
        </div>
        <div className="mt-[11px]">
          <p className="text-[#8A9099] text-[12px] leading-[18px] font-medium">
            DEAL SIZE
          </p>
          <p className="mt-[4px] text-[#3F434A] text-[14px] leading-[21px]">
            {info[activeTitle].data.dealSize}
          </p>
        </div>
        <div className="mt-[11px]">
          <p className="text-[#8A9099] text-[12px] leading-[18px] font-medium">
            LEAD STAGE
          </p>
          <p className="mt-[4px] text-[#3F434A] text-[14px] leading-[21px]">
            {info[activeTitle].data.leadStage}
          </p>
        </div>
      </div>
      <div className="border-b mt-[20px] w-[600px] h-[1px] px-[30px]"></div>
      <div className="pl-[30px]">
        <div className="mt-[25px]">
          <p className="text-[#3F434A] text-[15px] font-medium leading-[22px]">
            CALL PARTICIPANTS
          </p>
          <p className="text-[#3F434A] text-[14px] mt-[10px] leading-[21px]">
            Client POC
          </p>
          <p className="mt-[5px] text-[#8A9099] text-[12px]">
            {info[activeTitle].data.clientPOC}
          </p>
          <p className="text-[#8A9099] text-[10px] leading-[15px]">
            {info[activeTitle].data.pocJob}
          </p>
        </div>
        <div className="mt-[12px]">
          <p className="text-[#3F434A] text-[14px] leading-[21px]">
            Call Owner
          </p>
          <p className="text-[#8A9099] text-[12px] leading-[18px]">
            {info[activeTitle].data.callOwner}
          </p>
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
