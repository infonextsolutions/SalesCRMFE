import SimpleButton from "@/utils/Button/SimpleButton";
import React, { useState } from "react";

const AddText = ({ top, title, width, change }: any) => {
  const [input, setInput] = useState();
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
        value={input}
        onChange={(e: any) => {
          setInput(e.target.value);
          change(e.target.value);
        }}
        className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
      />
    </div>
  );
};

const Notesd = ({ cancel }: any) => {
  const [content, setContent] = useState({
    title: "",
    content: "",
  });

  return (
    <div className="w-[100%] h-[100%]  py-[30px] pl-[40px] pr-[40px]  relative">
      <h1 className="text-[#3f434a] text-[31px] font-medium  mb-[24px] tracking-[1px]">
        Add Note
      </h1>
      <div className="custom-scroll-black w-[100%] pb-[60px] overflow-y-auto ">
        <div>
          <AddText
            top={"10px"}
            change={(e: any) => {
              setContent({ ...content, title: e });
            }}
            title="Note Title"
          />
          <AddText
            top={"10px"}
            change={(e: any) => {
              setContent({ ...content, content: e });
            }}
            title="Description"
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
            click={() => {
              cancel(content);
            }}
            theme={1}
            text={"Create"}
            left={20}
            right={0}
          />
        </div>
      </div>
    </div>
  );
};

export default Notesd;
