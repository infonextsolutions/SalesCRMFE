import { getBasicIcon } from "@/utils/AssetsHelper";
import Navigator from "@/utils/customNavigator";
import Image from "next/image";
import React, { useState } from "react";
import ActivityHistory from "./ProfileDetails/Lead/activity";
import Attachements from "./ProfileDetails/Lead/attachements";
import { LeadId } from "@/types/leadId";

const LeadProfileContainer = ({
  titles,
  current,
  info,
  data,
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
      }] bg-white rounded-xl p-[25px] px-[35px] pt-[30px] `}
    >
      <Navigator callback={CallBack} current={current} list={list} />
      <div className="flex justify-between pl-[20px]  relative">
        <div className="text-black text-[14px] leading-[21px] mt-[25px] w-[100%] tracking-wide  ">
          {activeTitle === 0 && (
            <>
              <div className="absolute top-[35px] right-[30px]">
                <Image
                  src={getBasicIcon("Edit")}
                  className={`w-[16px] h-[16px] cursor-pointer`}
                  alt=""
                  width={16}
                  height={16}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="">
                {/* <p className="mt-[20px] text-[#3F434A] font-medium">
                  Last Activity
                </p>
                <p className="text-[#595F69]">
                  {info[activeTitle].data.lastActivity}
                </p> */}
                <p className="mt-[20px] text-[#3F434A] font-medium">
                  Inquiry type
                </p>
                <p className="text-[#595F69]">{data.inquiry}</p>
                <p className="mt-[20px] text-[#3F434A] font-medium">
                  Product/Service Type
                </p>
                <p className="text-[#595F69]">
                  {data.companyId.company_product_category}
                </p>
                <p className="mt-[20px] text-[#3F434A] font-medium">
                  Potential Deal Size
                </p>
                <p className="text-[#595F69]">{data.potential_deal_size}</p>
                <p className="mt-[20px] text-[#3F434A] font-medium">
                  Existing Budget
                </p>
                <p className="text-[#595F69]">{data.existing_budget}</p>
                <p className="mt-[20px] text-[#3F434A] font-medium">
                  Win Probability
                </p>
                <p className="text-[#595F69]">{data.win_probability}</p>
                {/* <p className="mt-[20px] text-[#3F434A] font-medium">
                  Next Action
                </p>
                <p className="text-[#595F69]">
                  {info[activeTitle].data.nextAction}
                </p> */}
                {/* <p className="mt-[20px] text-[#3F434A] font-medium">
                  Interested Product/Service Type
                </p>
                <p className="text-[#595F69]">
                  {info[activeTitle].data.interestedProductType}
                </p> */}
              </div>
            </>
          )}
          {activeTitle === 1 && <ActivityHistory />}
          {activeTitle === 2 && <Attachements />}
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
  data: LeadId;
}