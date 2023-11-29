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
      <div className="flex justify-between pl-[20px] relative">
        <div className="text-black text-[14px] leading-[21px] mt-[25px] w-[100%] tracking-wide  ">
          {activeTitle === 0 && (
            <>
              {/* <div className="absolute top-[35px] right-[30px]">
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
              </div> */}
              <h2 className="text-4xl font-semibold">
                Lead-{data.lead_title}
                {""} Info
              </h2>
              <div className="pr-20">
                <div className="flex items-center mt-4 justify-between">
                  <p className="text-[#3F434A] text-lg">Last Activity</p>
                  <p className=" text-[#595F69] text-lg font-medium">
                    {info[activeTitle].data.lastActivity}
                  </p>
                </div>
                <div className="flex items-center mt-4 justify-between">
                  <p className="text-[#3F434A] text-lg">
                    Product/ Service Type
                  </p>
                  <p className="text-[#595F69] text-lg font-medium">
                    {info[activeTitle].data.productType}
                  </p>
                </div>
                <div className="flex items-center mt-4 justify-between">
                  <p className="text-[#3F434A] text-lg">
                    Last Call Disposition
                  </p>
                  <p className="text-[#595F69] text-lg font-medium">
                    {/* {info[activeTitle].data.lastActivity} */}
                  </p>
                </div>
                <div className="flex items-center mt-4 justify-between">
                  <p className="text-[#3F434A] text-lg">Next Action</p>
                  <p className="text-[#595F69] text-lg font-medium">
                    {info[activeTitle].data.nextAction}
                  </p>
                </div>
                <div className="flex items-center mt-4 justify-between">
                  <p className="text-[#3F434A] text-lg">
                    Interested Product/Service Type
                  </p>
                  <p className="text-[#595F69] text-lg font-medium">
                    {info[0].data.interestedProductType}
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mt-5">Lead Description</h2>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h2 className="text-2xl font-semibold mt-5">
                Company Description
              </h2>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </>
          )}
          {activeTitle === 1 && <ActivityHistory data1={data} data={data} />}
          {activeTitle === 2 && <Attachements data={data} />}
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
