import SimpleButton from "@/utils/Button/SimpleButton";
import axios from "axios";
import React, { useState } from "react";

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

const Notes = ({ cancel, leadid }: any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = () => {
    const body = {
      leadId: leadid,
      title: title,
      content: content,
    };
    const url = "https://testsalescrm.nextsolutions.in/api/leads/notes";
    axios.post(url, body).then((e: any) => {
      console.log(e);
    });
  };

  return (
    <div className="w-[100%] h-[100%]  py-[30px] pl-[40px] pr-[40px]  relative">
      <h1 className="text-[#3f434a] text-[31px] font-medium  mb-[24px] tracking-[1px]">
        Add Note
      </h1>
      <div className="custom-scroll-black w-[100%] pb-[60px] overflow-y-auto ">
        <div>
          <AddText
            top={"10px"}
            title="Note Title"
            change={(e: any) => {
              setTitle(e);
            }}
          />
          <AddText
            top={"10px"}
            title="Description"
            change={(e: any) => {
              setContent(e);
            }}
          />
        </div>
        <div className="absolute right-[160px] bottom-[40px] mt-[130px] flex ">
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
        <div className="absolute right-[40px] bottom-[40px] mt-[130px] flex ">
          <SimpleButton
            theme={1}
            text={"Create"}
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

export default Notes;
