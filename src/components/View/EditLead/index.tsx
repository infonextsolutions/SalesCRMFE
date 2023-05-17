import React, { useState } from "react";
import SimpleButton from "@/utils/Button/SimpleButton";
import axios from "axios";
import { LeadId } from "@/types/leadId";

const AddDropDown = ({ top, title, width, list, change }: any) => {
  return (
    <div
      style={{
        width: width ? width : "100%",
        marginTop: top ? top : "10px",
      }}
    >
      <p className="block mb-2 text-sm font-medium text-[#8a9099] tracking-wide">
        {title}
      </p>
      <div className="w-[100%] px-[10px] border-[1px]   rounded-xl border-[#ccc]">
        <select
          onChange={(e) => {
            change(e.target.value);
          }}
          id="countries"
          className="outline-none cursor-pointer capitalize text-gray-900 py-[7px]   text-sm tracking-wide text-[#3F434A] font-medium  block w-full bg-white"
        >
          {list.map((item: any, i: any) => {
            return (
              <option value={item.value} key={i} selected={item.selected}>
                {item.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

const AddText = ({ top, title, width, change }: any) => {
  return (
    <div
      className="w-[100%] "
      style={{
        width: width ? width : "100%",
        marginTop: top,
      }}
    >
      <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
        {title}*
      </p>
      <input
        onChange={(e: any) => {
          change(e.target.value);
        }}
        type="text"
        className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
      />
    </div>
  );
};

const EditLead = ({ cancel, data }: { cancel: any; data: LeadId }) => {
  const [content, setContent] = useState<any>({})
  //   companyId:data.companyId._id,
  //   company_name,
  //   company_website_url,
  //   company_icon,
  //   company_location,
  //   company_product_category,
  //   company_description,
  //   customerId,
  //   customer_name,
  //   customer_contact,
  //   customer_email,
  //   designation,
  //   gender,
  //   industry,
  //   interested_product,
  //   id,
  //   potential_deal_size,
  //   win_probability,
  //   created_by,
  //   last_updated_by,
  //   activity_history,
  //   document_attached,
  //   conversation_history,
  //   customer_name,
  //   inquiry,
  //   existing_budget,
  //   close_date,
  //   last_activity,
  //   leadStatus,
  //   leadStage,
  //   follow_up_action,
  //   next_action,
  //   lead_title,
  //   lead_description,
  //   source
  // );
  console.log(data);
  console.log({
    id: data._id,
    lead_title: content.lead_title,
    companyId: data.companyId._id,
    customerId: data.companyId._id,
  });
  const submit = () => {
    const url = "https://testsalescrm.nextsolutions.in/api/leads/update";
    axios
      .put(url, {
        id: data._id,
        lead_title: content.lead_title,
        companyId: data.companyId._id,
        customerId: data.companyId._id,
      })
      .then((e: any) => {
        console.log(e);
      });
  };

  return (
    <div className="w-[100%] h-[100%]  py-[30px] pl-[40px] pr-[40px]  relative">
      <h1 className="text-[#3f434a] text-[22px] font-medium  mb-[24px] tracking-[1px]">
        Lead Information
      </h1>
      <div className="custom-scroll-black w-[100%] flex justify-between pr-[20px] scrollbar-hidden pb-[60px] pb-[50px]">
        <div className="w-[55%]">
          <div className="flex items-center justify-between">
            <AddText
              top={"10px"}
              title="Lead Id"
              width={"30%"}
              change={(e: any) => {
                setContent({ ...content, leadId: e });
              }}
            />
            <AddText
              top={"10px"}
              title="Lead title"
              width={"65%"}
              change={(e: any) => {
                setContent({ ...content, lead_title: e });
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <AddText
              top={"10px"}
              title="Company name"
              width={"48%"}
              change={(e: any) => {
                setContent({ ...content, company_name: e });
              }}
            />
            <AddText
              top={"10px"}
              title="Company location"
              width={"48%"}
              change={(e: any) => {
                setContent({ ...content, company_location: e });
              }}
            />
          </div>
          <AddText
            top={"10px"}
            title="LinkedIn"
            width={"100%"}
            change={(e: any) => {
              setContent({ ...content, linkedInurl: e });
            }}
          />
          <AddText
            top={"10px"}
            title="Twitter"
            width={"100%"}
            change={(e: any) => {
              setContent({ ...content, Twitter: e });
            }}
          />
          <AddText
            top={"10px"}
            title="Website URL"
            width={"100%"}
            change={(e: any) => {
              setContent({ ...content, website_url: e });
            }}
          />
          <AddText
            top={"10px"}
            title="Industry Type"
            width={"100%"}
            change={(e: any) => {
              setContent({ ...content, industry_type: e });
            }}
          />
        </div>
        <div className="w-[40%]">
          <AddText
            top={"10px"}
            title="Lead Owner"
            width={"100%"}
            change={(e: any) => {
              setContent({ ...content, lead_owner: e });
            }}
          />
          <AddText
            top={"10px"}
            title="Lead Stage"
            width={"100%"}
            change={(e: any) => {
              setContent({ ...content, Stage: e });
            }}
          />
          <AddText
            top={"10px"}
            title="Lead Status"
            width={"100%"}
            change={(e: any) => {
              setContent({ ...content, Status: e });
            }}
          />
          <AddText
            top={"10px"}
            title="Source"
            width={"100%"}
            change={(e: any) => {
              setContent({ ...content, Source: e });
            }}
          />
        </div>
        <div className="absolute right-[160px] bottom-[20px] mt-[130px] flex ">
          <SimpleButton
            theme={2}
            text={"Cancel"}
            left={20}
            right={0}
            click={() => {
              cancel();
            }}
          />
        </div>
        <div className="absolute right-[40px] bottom-[20px] mt-[130px] flex ">
          <SimpleButton
            theme={1}
            text={"Save"}
            left={20}
            right={0}
            click={() => {
              submit();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditLead;
