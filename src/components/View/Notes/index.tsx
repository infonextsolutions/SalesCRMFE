import SimpleButton from "@/utils/Button/SimpleButton";
import React from "react";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";



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

const TextBox = ({ title, place }: any) => {
  return (
    <div className="w-[100%]">
      <p className="w-[100%] text-[#8A9099] font-medium tracking-wide mb-[8px]">
        {title}
      </p>
      <textarea
        name=""
        id=""
        placeholder={place}
        className="w-[100%] h-[170px] rounded-[14px] bg-[#fff] border-[2px] py-[10px] border-[#d9d9d9] text-[#3F434A] px-[14px] outline-none text-[14px] font-medium tracking-wide"
      ></textarea>
    </div>
  );
};


const Notes = ({ cancel }: any) => {
  return (
    <div className="w-[100%] hide-scrollbar h-[100%] py-[30px] pl-[40px] pr-[40px] overflow-x-auto relative">
      <h1 className="text-[#3f434a] text-[31px] font-medium  mb-[24px] tracking-[1px]">
        Add Note
      </h1>
      <div className="custom-scroll-black w-[100%] pb-[60px] overflow-y-auto ">
        <div>
          <AddText top={"10px"} title="Note Title" />
          <TextBox title="Description" place={"Type something"} />
          <AddText top={"10px"} title="Lead ID" />
          <AddText top={"10px"} title="Date"/>
        </div>
      </div>


      <div className="absolute right-[160px]  flex ">
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
  <div className="absolute right-[40px]  flex ">
    <SimpleButton theme={1} text={"Create"} left={20} right={0} />
  </div>
    </div>
  );
};



export default Notes;
