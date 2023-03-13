import { getBasicIcon } from "@/utils/AssetsHelper";
import Navigator from "@/utils/customNavigator";
import Image from "next/image";
import React, { useState } from "react";

const LeadProfileContainer = ({
  titles,
  current,
  info,
  width,
}: LeadProfileContainerProps) => {
  const [activeTitle, setActiveTitle] = useState(0);
  function CallBack(childData: any) {
    setActiveTitle(childData);
  }
  const list = titles.map((title: any, i: any) => ({ id: i, title: title }));
  return (
    <div
      className={`w-[${
        width ? width : "100%"
      }] bg-white rounded-xl p-[25px] px-[35px] pt-[30px]`}
    >
      <Navigator callback={CallBack} current={current} list={list} />
      <div className="flex justify-between pl-[30px] ">
        <div className="text-black text-[14px] leading-[21px] mt-[25px] tracking-wide ">
          {activeTitle === 0 && (
            <div className="">
              <p className="mt-[20px] text-[#3F434A] font-medium">
                Last Activity
              </p>
              <p className="text-[#595F69]">
                {info[activeTitle].data.lastActivity}
              </p>
              <p className="mt-[20px] text-[#3F434A] font-medium">
                Inquiry type
              </p>
              <p className="text-[#595F69]">
                {info[activeTitle].data.inquiryType}
              </p>
              <p className="mt-[20px] text-[#3F434A] font-medium">
                Product/Service Type
              </p>
              <p className="text-[#595F69]">
                {info[activeTitle].data.productType}
              </p>
              <p className="mt-[20px] text-[#3F434A] font-medium">
                Potential Deal Size
              </p>
              <p className="text-[#595F69]">
                {info[activeTitle].data.dealSize}
              </p>
              <p className="mt-[20px] text-[#3F434A] font-medium">
                Existing Budget
              </p>
              <p className="text-[#595F69]">{info[activeTitle].data.budget}</p>
              <p className="mt-[20px] text-[#3F434A] font-medium">
                Win Probability
              </p>
              <p className="text-[#595F69]">{info[activeTitle].data.winProb}</p>
              <p className="mt-[20px] text-[#3F434A] font-medium">
                Next Action
              </p>
              <p className="text-[#595F69]">
                {info[activeTitle].data.nextAction}
              </p>
              <p className="mt-[20px] text-[#3F434A] font-medium">
                Interested Product/Service Type
              </p>
              <p className="text-[#595F69]">
                {info[activeTitle].data.interestedProductType}
              </p>
            </div>
          )}
        </div>
        <div>
          <Image
            src={getBasicIcon("Edit")}
            className={`w-[16px] h-[16px] cursor-pointer mt-[35px] mr-[30px]`}
            alt=""
            width={16}
            height={16}
            style={{
                objectFit:"contain"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LeadProfileContainer;

interface LeadProfileContainerProps {
  titles: any[] | any;
  current: Number;
  [key: string]: any;
}
