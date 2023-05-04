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
      {title === "Description" ? (
        <textarea
          className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[120px] outline-none resize-none"
        ></textarea>
      ) : (
        <input
          type="text"
          className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
        />
      )}
    </div>
  );
};

const Notes = ({ cancel }: any) => {
  return (
    <div className="w-[100%] hide-scrollbar h-[100%] py-[30px] pl-[40px] pr-[40px] overflow-y-auto relative">
      <h1 className="text-[#3f434a] text-[31px] font-medium mb-[24px] tracking-[1px]">
        Add Note
      </h1>
      <div className="custom-scroll-back hide-scrollbar w-[100%] pb-[60px] overflow-y-auto relative">
        <div>
          <AddText top={"10px"} title="Note Title" />
          <AddText top={"10px"} title="Description" />
          <AddText top={"10px"} title="Lead ID" />
        </div>
      <div className="absolute right-[160px] bottom-[10px] mt-[130px] flex ">
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
      <div className="absolute right-[40px] bottom-[10px] mt-[130px] flex ">
        <SimpleButton theme={1} text={"Create"} left={20} right={0} />
      </div>
    </div>
    </div>
  );
};

export default Notes;