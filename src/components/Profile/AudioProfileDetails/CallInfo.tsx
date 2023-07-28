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

  const called:any = data1;
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
  console.log(called,"please duvafka")
  return (
    <div>
      {edit && (
        <Backdrop pad={"50px 0"} bool={true} width={"900px"}>
          <EditLead
            cancel={cancelEdit}
            update={()=>{UpdateData()}}
            data={data2?.result}
          />
        </Backdrop>
      )}
      <div className="absolute top-[16px] right-0">
        {/* <Image
          src={getBasicIcon("Edit")}
          className={`w-[16px] h-[16px] cursor-pointer mt-[35px] mr-[30px]`}
          alt=""
          width={16}
          height={16}
          onClick={() => {
            showEdit();
          }}
        /> */}
      </div>
      <div className="pl-[30px]">
        <p className="mt-[20px] text-[#3F434A] leading-[30px] text-[20px] font-medium">
          Call Id- {convertDatetimeToCustomFormat(data1.updatedAt)}
        </p>
        <div className="text-[#8A9099] mt-[7px] leading-[21px]">
          <p>LEAD ID-{data1.leadId.leadId}</p>
          <p>{data1.leadId.lead_title}</p>
        </div>
        <p className="mt-[20px] text-[#3F434A] leading-[22px] text-[15px] font-medium">
          INFO
        </p>
        <div className="mt-[11px]">
          <p className="text-[#8A9099] text-[12px] leading-[18px] font-medium">
            COMPANY NAME
          </p>
          <p className="mt-[4px] text-[#3F434A] text-[14px] leading-[21px]">
            {data1.companyId.company_name}
          </p>
        </div>
        <div className="mt-[11px]">
          <p className="text-[#8A9099] text-[12px] leading-[18px] font-medium">
            CLIENT POC
          </p>
          <p className="mt-[4px] text-[#3F434A] text-[14px] leading-[21px]">
            {/* {info[activeTitle].data.clientPOC} */}
            {data1.customerId.name}
          </p>
        </div>
        <div className="mt-[11px]">
          <p className="text-[#8A9099] text-[12px] leading-[18px] font-medium">
            PRODUCT/SERVICE
          </p>
          <p className="mt-[4px] text-[#3F434A] text-[14px] leading-[21px]">
            {data1.companyId.company_product_category}
          </p>
        </div>
        <div className="mt-[11px]">
          <p className="text-[#8A9099] text-[12px] leading-[18px] font-medium">
            DEAL SIZE
          </p>
          <p className="mt-[4px] text-[#3F434A] text-[14px] leading-[21px]">
            {data1.leadId.potential_deal_size}
          </p>
        </div>
        <div className="mt-[11px]">
          <p className="text-[#8A9099] text-[12px] leading-[18px] font-medium">
            LEAD STAGE
          </p>
          <p className="mt-[4px] text-[#3F434A] text-[14px] leading-[21px]">
            {/* {info[activeTitle].data.leadStage} */}
            {data1.leadId.leadStage}
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
            {data1.customerId.name}
          </p>
          <p className="text-[#8A9099] text-[10px] leading-[15px]">
            {data1.customerId.designation}
          </p>
        </div>
        <div className="mt-[12px]">
          <p className="text-[#3F434A] text-[14px] leading-[21px]">
            Call Owner
          </p>
          <p className="text-[#8A9099] text-[12px] leading-[18px]">
            {owner?owner.name:"-"}
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
  leadId: LeadId;
  companyId: CompanyId;
  customerId: CustomerId;
  call_start_time: string;
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
