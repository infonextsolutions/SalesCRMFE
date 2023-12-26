import Backdrop from "@/components/View/Backdrop/Center";
import EditLead from "@/components/View/EditLead";
import { getBasicIcon } from "@/utils/AssetsHelper";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

const CallInfo = ({ check, info, data, data1 }: Props) => {
  const activeTitle = 0;
  // const [edit, setEdit] = useState(false);
  // const [bool, setBool] = useState(true);

  // const showEdit = () => {
  //   setEdit(true);
  // };

  // const cancelEdit = () => {
  //   setBool(false);
  //   setTimeout(() => {
  //     setEdit(false);
  //     setBool(true);
  //   }, 500);
  // };

  // console.log(data,"here is it");
  console.log(data1, data, "bc-2317");
  // const [data2, setData] = useState(data1);

  // const UpdateData = async () => {
  //   const response = await axios
  //     .get(
  //       `https://sales365.trainright.fit/api/leads/find-by-id?id=${data1._id}`
  //     )
  //     .then((e) => {
  //       setData(e.data);
  //     })
  //     .catch((e) => {
  //       console.log(e,"error occured")
  //     });
  // };

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
      <h4 className="text-2xl font-semibold capitalize pl-7">
        {data1.lead_title}
      </h4>

      <div className="pl-[30px]">
        <p className=" border-b-2 w-3/4 pb-2 border-red-400 mt-[20px] text-[#3F434A] leading-[30px] text-[20px] font-medium">
          Call Id - {info[activeTitle].data.callId}
        </p>
        <div className="text-[#8A9099] flex justify-between w-9/12  mt-[7px] leading-[21px]">
          <p className="text-sm font-medium">LEAD ID</p>
          <p className="text-sm font-semibold text-black">
            {info[activeTitle].data.leadID}
          </p>
        </div>
        <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
          <p className="text-sm font-medium">Lead Title</p>
          <p className="text-sm font-semibold text-black">
            {info[activeTitle].data.leadInfo}
          </p>
        </div>
        <p className="border-b-2 w-3/4 pb-2 border-red-400 mt-[20px] text-[#3F434A] leading-[22px] text-[20px] font-medium">
          INFO
        </p>
        <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
          <p className="text-sm font-medium"> Company Name</p>
          <p className="text-sm font-semibold text-black">
            {info[activeTitle].data.companyName ?? "-"}
          </p>
        </div>
        <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
          <p className="text-sm font-medium">Client POC</p>
          <p className="text-sm font-semibold text-black">
            {info[activeTitle].data.clientPOC ?? "-"}
          </p>
        </div>
        <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
          <p className="text-sm font-medium">Product/Service</p>
          <p className="text-sm font-semibold text-black">
            {data1.companyId.company_product_category}
          </p>
        </div>
        <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
          <p className="text-sm font-medium">Lead Stage</p>
          <p className="text-sm font-semibold text-black">{data1.leadStage}</p>
        </div>
        <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
          <p className="text-sm font-medium">Call Type</p>
          <p className="text-sm font-semibold text-black">{data1?.call_type}</p>
        </div>
        <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
          <p className="text-sm font-medium">Call Description</p>
          <p className="text-sm font-semibold text-black">
            {data1?.call_description ?? "-"}
          </p>
        </div>
        <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
          <p className="text-sm font-medium">Call Disposition</p>
          <p className="text-sm font-semibold text-black">
            {data1?.call_disposition ?? "-"}
          </p>
        </div>
      </div>
      <div className="pl-[30px]">
        <div className="mt-[25px]">
          <p className="border-b-2 w-3/4 pb-2 border-red-400 text-[#3F434A] text-[20px] font-medium leading-[22px]">
            CALL PARTICIPANTS
          </p>
          <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
            <p className="text-sm font-medium">Call Owner</p>
            <p className="text-sm font-semibold text-black">
              {info[activeTitle].data.callOwner ?? "-"}
            </p>
          </div>
          <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
            <p className="text-sm font-medium">Call Participant</p>
            <p className="text-sm font-semibold text-black">
              {info[activeTitle].data.clientPOC ?? "-"}
            </p>
            <p className="text-sm font-semibold text-grey">
              {info[activeTitle].data.pocJob ?? "-"}
            </p>
          </div>
        </div>
        {/* <p className="text-[#8A9099] text-[12px] leading-[18px]">
            {data1.owners[0].name}
          </p> */}
      </div>
      <div className=" mt-[20px] w-[600px] h-[1px] px-[30px]"></div>
      {check && (
        <>
          <div className="pl-[30px]">
            <div className="mt-[25px]">
              <p className="border-b-2 w-3/4 pb-2 border-red-400 text-[#3F434A] text-[20px] font-medium leading-[22px]">
                CALL METRICS
              </p>
              <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
                <p className="text-sm font-medium">Talk/Listen Ratio</p>
                <p className="text-sm font-semibold text-black">
                  {info[activeTitle].data.talkRatio}
                </p>
              </div>
            </div>
            <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
              <p className="text-sm font-medium">Longest Monologue</p>
              <p className="text-sm font-semibold text-black">
                {info[activeTitle].data.longestMonologue}
              </p>
            </div>
            <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
              <p className="text-sm font-medium">Filler words per minute</p>
              <p className="text-sm font-semibold text-black">
                {info[activeTitle].data.fillerWords}
              </p>
            </div>
            <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
              <p className="text-sm font-medium">Interactivity</p>
              <p className="text-sm font-semibold text-black">
                {info[activeTitle].data.interactivity}
              </p>
            </div>
            <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
              <p className="text-sm font-medium"> Next Steps</p>
              <p className="text-sm font-semibold text-black">
                {info[activeTitle].data.nextSteps}
              </p>
            </div>
            <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
              <p className="text-sm font-medium">Engaging questions</p>
              <p className="text-sm font-semibold text-black">
                {info[activeTitle].data.engagingQuestions}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CallInfo;

interface Props {
  check: any;
  info: any;
  data: any;
  data1: Root;
}

export interface Root {
  _id: string;
  companyId: CompanyId;
  customerId: CustomerId;
  potential_deal_size: string;
  win_probability: string;
  created_by: string;
  customer_name: string;
  inquiry: string;
  existing_budget: string;
  leadStatus: string;
  leadStage: string;
  lead_title: string;
  lead_description: string;
  notes: Note[];
  source: string;
  leadId: string;
  owners: Owner[];
  __v: number;
  createdAt: string;
  updatedAt: string;
  call_type: string;
  call_disposition: string;
  call_description: string;
  participants: {
    name: string;
    designation: string;
  };
}

export interface CompanyId {
  _id: string;
  company_name: string;
  company_website_url: string;
  company_icon: string;
  company_location: string;
  company_product_category: string;
  company_description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CustomerId {
  _id: string;
  name: string;
  contact: string;
  email: string;
  parentId: string;
  designation: string;
  companyId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Note {
  title: string;
  content: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Owner {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  roles: string[];
  token: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  designation: string;
}
