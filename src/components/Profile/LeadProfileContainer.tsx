import { getBasicIcon } from "@/utils/AssetsHelper";
import Navigator from "@/utils/customNavigator";
import Image from "next/image";
import React, { useState } from "react";
import ActivityHistory from "./ProfileDetails/Lead/activity";
import Attachements from "./ProfileDetails/Lead/attachements";
import { LeadId } from "@/types/leadId";
import Lead from "@/types/Leads";

const LeadProfileContainer = ({
  titles,
  current,
  info,
  data,
  width,
}: LeadProfileContainerProps) => {
  console.log(
    "+++++++++++++++++++++++++++++++ DATA : LEAD PROFILE CONTAINER +++++++++++++++++++++++++++",
    data || "no data", info || "no info"
  );
  const [activeTitle, setActiveTitle] = useState(0);
  function CallBack(childData: any) {
    setActiveTitle(childData);
  }
  const list = titles.map((title: any, i: any) => ({ id: i, title: title }));

  return (
    <div
      className={`w-[${width ? width : "100%"
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
                  <p className="text-[#3F434A] text-sm">Last Activity</p>
                  <p className=" text-[#595F69] text-sm font-medium">
                    {data?.activityId?.lastActivity?.type}
                  </p>
                </div>
                <div className="flex items-center mt-4 justify-between">
                  <p className="text-[#3F434A] text-sm">
                    Product/ Service Type
                  </p>
                  <p className="text-[#595F69] text-sm font-medium">
                    {data?.companyId?.company_product_category}
                  </p>
                </div>
                <div className="flex items-center mt-4 justify-between">
                  <p className="text-[#3F434A] text-sm">
                    Last Call Disposition
                  </p>
                  <p className="text-[#595F69] text-sm font-medium">
                    {info[activeTitle].data.lastActivity}
                  </p>
                </div>
                <div className="flex items-center mt-4 justify-between">
                  <p className="text-[#3F434A] text-sm">Next Action</p>
                  <p className="text-[#595F69] text-sm font-medium">
                    {info[activeTitle].data.nextAction}
                  </p>
                </div>
                <div className="flex items-center mt-4 justify-between">
                  <p className="text-[#3F434A] text-sm">
                    Interested Product/Service Type
                  </p>
                  <p className="text-[#595F69] text-sm font-medium">
                    {info[0].data.interestedProductType}
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mt-5">Lead Description</h2>
              <p className="mt-4">{data?.lead_description}</p>
              <h2 className="text-2xl font-semibold mt-5">
                Company Description
              </h2>
              <p className="mt-4">{data?.companyId?.company_description}</p>
            </>
          )}
          {activeTitle === 1 && <ActivityHistory data={data} />}
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
  data: Lead;
}
