import React, { useState, useEffect } from "react";
import ButtonDropDown from "@/utils/Button/Button";
import Charts from "./treemap";
import DatePicker from "@/utils/Button/DatePicker";

const TreeMap = ({ data1, getPitchData }: any) => {
  const [startDate, setStartDate] = useState("2023-07-19");
  const [endDate, setEndDate] = useState("2023-07-26");
  useEffect(() => {
    getPitchData([startDate, endDate]);
  }, [startDate, endDate]);
  return (
    <div className="w-[100%] overflow-hidden bg-[#fff] rounded-xl shrink-0 px-[2px] py-[19px] mt-[50px] mb-[50px]">
      <div className="w-[100%] flex items-center justify-between overflow-hidden">
        <h1 className="text-[20px] font-medium text-[#3F434A] tracking-wide">
          Sales Pitch Analysis
        </h1>
        {/* <div className="flex">
          <DatePicker
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
          <ButtonDropDown
            dark={false}
            light={true}
            text={"Team A"}
            border={true}
            id={1}
            dropdown={true}
            list={[]}
          />
        </div> */}
      </div>
      <div className="w-[100%] overflow-x-auto custom-scroll">
        <Charts data1={data1} />
      </div>
    </div>
  );
};

export default TreeMap;

interface Root {
  _id: string;
  call_purpose: number;
  company_intro: number;
  self_credentialing: number;
  voice_mail: number;
  real_time_cues: number;
  post_call_analytics: number;
  integration: number;
  open_ended: number;
  sales_coaching: number;
  sales_visibility: number;
  dialer: number;
  CRM: number;
  decision_maker: number;
  revenue_potential: number;
  web_conferencing: number;
  better_sales_visibility: number;
  improved_customer_experience: number;
  actionable_insights: number;
  conversion_rate: number;
  ramp_time: number;
  data_driven_coaching: number;
  trail: number;
  email: number;
  meeting: number;
  closure: number;
  call: number;
  next_steps: number;
  zoom_demo: number;
  createdAt: string;
  updatedAt: string;
}
