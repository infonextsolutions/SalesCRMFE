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

const Notes = ({ cancel }: any) => {
  return (
    <div className="w-[100%] h-[100vh] py-[30px] pl-[50px] pr-[20px] ">
      <h1 className="text-[#3f434a] text-[31px] font-medium mb-[40px] tracking-[1px]">
        Add Note
      </h1>
      <div className="custom-scroll-black w-[100%] h-[70vh] overflow-y-auto">
        <div className="pr-[50px]">
          <AddText top={"10px"} title="Note Title" />
          <AddText top={"10px"} title="Description" />
          <AddText top={"10px"} title="Lead Id" />
          <AddText top={"10px"} title="Date" />
          <div className="w-[100%] mt-[130px] flex ">
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
      </div>
    </div>
  );
};

export default Notes;
