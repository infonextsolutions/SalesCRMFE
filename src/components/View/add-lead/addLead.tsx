import SimpleButton from "@/utils/Button/SimpleButton";
import React from "react";

const AddText = ({ top, title, width }: any) => {
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
        type="text"
        className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
      />
    </div>
  );
};

const AddLead = ({ cancel }: any) => {
  return (
    <div
      className="custom-scroll-black w-[100%] h-[100vh] py-[30px] px-[50px] overflow-y-auto"
      style={{
        zIndex: 100000000000000,
      }}
    >
      <h1 className="text-[#3f434a] text-[31px] font-medium mb-[40px] tracking-[1px]">
        Add Lead
      </h1>
      <AddText top={"10px"} title="Company Name" />
      <AddText top={"10px"} title="State" />
      <AddText top={"10px"} title="Location" />
      <AddText top={"10px"} title="Client POC Name" />
      <AddText top={"10px"} title="Client POC Designation" />
      <AddText top={"10px"} title="Phone" />
      <AddText top={"10px"} title="Email" />
      <AddText top={"10px"} title="Product/Service" />
      <AddText top={"10px"} title="Lead Inquiry" />
      <div className="w-[100%] flex items-center justify-between">
        <AddText top={"10px"} width={"45%"} title="Lead Stage" />
        <AddText top={"10px"} width={"45%"} title="Lead Status" />
      </div>

      <div className="w-[100%] mt-[70px] flex ">
        <SimpleButton
          theme={1}
          text={"Save"}
          left={0}
          right={0}
          click={() => {}}
        />
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
    </div>
  );
};

export default AddLead;
