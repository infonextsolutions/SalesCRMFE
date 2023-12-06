import Backdrop from "@/components/View/Backdrop/Center";
import EditLead from "@/components/View/EditLead";
import { getBasicIcon } from "@/utils/AssetsHelper";
import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const CallInfo = ({ check, info, data, data1 }: Props) => {
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

  // console.log(data,"here is it");
  console.log(data1, "please only notice this!");

  const [data2, setData] = useState<any>({});

  const UpdateData = async () => {
    const response = await axios
      .get(
        `https://testsalescrm.nextsolutions.in/api/leads/find-by-id?id=${data1.leadId._id}`
      )
      .then((e) => {
        setData(e.data);
      })
      .catch((e) => {
        console.log(e, "error occured");
      });
  };

  const [check1, setCheck] = useState(false);

  useEffect(() => {
    if (!check1) {
      UpdateData();
      setCheck(true);
    }
  });

  const called: any = data1;
  const owner = called.owner;
  const participants = called.participants;

  function convertDatetimeToCustomFormat(dateStr: any) {
    // Convert the string to a Date object
    const dt: any = new Date(dateStr);

    // Calculate the number of seconds since January 1, 1400 (Iranian calendar)
    const referenceDate: any = new Date("1400-01-01T00:00:00Z");
    const secondsDifference = Math.floor((dt - referenceDate) / 1000);

    return secondsDifference;
  }
  console.log(data1, "please duvafka");
  return (
    <div>
      {edit && (
        <Backdrop pad={"50px 0"} bool={true} width={"900px"}>
          <EditLead
            cancel={cancelEdit}
            update={() => {
              UpdateData();
            }}
            data={data2?.result}
          />
        </Backdrop>
      )}
      <h4 className="text-2xl font-semibold capitalize pl-7">
        {data1.call_title}
      </h4>
      <div className="pl-[30px]">
        <p className=" border-b-2 w-3/4 pb-2 border-red-400 mt-[20px] text-[#3F434A] leading-[30px] text-[20px] font-medium">
          Call Id - {convertDatetimeToCustomFormat(data1.updatedAt)}
        </p>
        <div className="text-[#8A9099] flex justify-between w-9/12  mt-[7px] leading-[21px]">
          <p className="text-sm font-medium">LEAD ID</p>
          <p className="text-sm font-semibold text-black">
            {data1.leadId.leadId}
          </p>
        </div>
        <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
          <p className="text-sm font-medium">Lead Title</p>
          <p className="text-sm font-semibold text-black">
            {data1.leadId.lead_title}
          </p>
        </div>

        <p className="border-b-2 w-3/4 pb-2 border-red-400 mt-[20px] text-[#3F434A] leading-[22px] text-[20px] font-medium">
          INFO
        </p>
        <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
          <p className="text-sm font-medium"> Company Name</p>
          <p className="text-sm font-semibold text-black">
            {data1.companyId.company_name}
          </p>
        </div>
        <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
          <p className="text-sm font-medium">Client POC</p>
          <p className="text-sm font-semibold text-black">
            {data1.customerId.name}
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
          <p className="text-sm font-semibold text-black">
            {data1.leadId.leadStage}
          </p>
        </div>
        <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
          <p className="text-sm font-medium">Call Type</p>
          <p className="text-sm font-semibold text-black">{data1?.call_type}</p>
        </div>
        <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
          <p className="text-sm font-medium">Call Description</p>
          <p className="text-sm font-semibold text-black">
            {data1?.call_discription}
          </p>
        </div>
      </div>
      <div className=" mt-[10px] w-[600px] h-[1px] px-[30px]"></div>
      <div className="pl-[30px]">
        <div className="mt-[25px]">
          <p className="border-b-2 w-3/4 pb-2 border-red-400 text-[#3F434A] text-[20px] font-medium leading-[22px]">
            CALL PARTICIPANTS
          </p>
          <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
            <p className="text-sm font-medium">Call Owner</p>
            <p className="text-sm font-semibold text-black">
              {owner ? owner.name : "-"}
            </p>
          </div>
          <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
            <p className="text-sm font-medium">Call Participant</p>
            <p className="text-sm font-semibold text-black">
              {data1?.participants?.name}
            </p>
            <p className="text-sm font-semibold text-grey">
              {data1?.participants?.designation}
            </p>
          </div>
          <div className="text-[#8A9099] w-9/12 flex justify-between mt-[7px] leading-[21px]">
            <p className="text-sm font-medium">New Participant</p>
            <p className="text-sm font-semibold text-black">
              {data1?.call_new_participant_name ?? "-"}
            </p>
            <p className="text-sm font-semibold text-grey">
              {data1?.call_new_participant_designation ?? "-"}
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-[20px] w-[600px] h-[1px] px-[30px]"></div>
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

interface Props {
  check: any;
  info: any;
  data: any;
  data1: Root;
}

interface Root {
  _id: string;
  callId: string;
  call_title: string;
  call_type: string;
  leadId: LeadId;
  companyId: CompanyId;
  customerId: CustomerId;
  call_start_time: string;
  call_discription: string;
  call_new_participant_name: string;
  participants: {
    name: string;
    designation: string;
  };
  call_new_participant_designation: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  scriptId: string;
}

interface LeadId {
  _id: string;
  companyId: string;
  customerId: string;
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
  owners: string[];
  __v: number;
  updatedAt: string;
  createdAt: string;
  scriptId: string;
  callId: string;
}

interface Note {
  title: string;
  content: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface CompanyId {
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

interface CustomerId {
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
