import React, { useState } from "react";
import SimpleButton from "@/utils/Button/SimpleButton";
import axios from "axios";
import { LeadId } from "@/types/leadId";

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
  const [content, setContent] = useState<any>({});

  const submit = () => {
    const url = "https://testsalescrm.nextsolutions.in/api/leads/update";

    axios
      .post(url, {
        ...data,
        id: data._id,
        inquiry: content.inquiry,
        win_probability: content.win_probability,
      })
      .then((e: any) => {
        console.log(e);
      });
  };

  return (
    <div className="w-[100%] h-[100%]  py-[30px] pl-[40px] pr-[40px]  relative">
      <h1 className="text-[#3f434a] text-[31px] font-medium  mb-[24px] tracking-[1px]">
        Edit Lead
      </h1>
      <div className="custom-scroll-black w-[100%] pr-[20px] h-[300px] hidden-scroll pb-[60px] overflow-y-auto pb-[50px]">
        <div>
          <AddText
            top={"10px"}
            title="Inquiry Type"
            change={(e: any) => {
              setContent({ ...content, inquiry: e });
            }}
          />
          <AddText
            top={"10px"}
            title="Deal Size"
            change={(e: any) => {
              setContent({ ...content, dealSize: e });
            }}
          />
          <AddText
            top={"10px"}
            title="Existing Budget"
            change={(e: any) => {
              setContent({ ...content, ExistingBudget: e });
            }}
          />
          <AddText
            top={"10px"}
            title="Win Probability"
            change={(e: any) => {
              setContent({ ...content, win_probability: e });
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
