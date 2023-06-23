import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React from "react";

const Notes1 = ({ cancel,note }: any) => {

  const Note = note.length==0 ? {}:note[note.length-1] ;
  return (
    <>
      <div className="hide-scrollbar w-[100%] pb-[20px] px-[40px] py-[30px] h-[100%] overflow-y-auto relative ">
        <div
          className="w-[30px] h-[30px] cursor-pointer rounded-xl absolute top-[30px] right-[30px] flex items-center justify-center bg-[#f8f8f8]"
          onClick={() => {
            cancel();
          }}
        >
          <Image
            className="w-[15px] h-[15px]"
            src={getBasicIcon("Cross")}
            width={15}
            height={15}
            alt=""
          />
        </div>
        <h1 className="text-[30px] text-[#000] font-medium tracking-md">
          Recent Note
        </h1>
        <h1 className="text-[30px] capitalize font-medium text-[#3F434A] tracking-md border-t-[2px] border-[#ccc] border-dashed mt-[12px] pt-[30px]">
          {Note.title}
        </h1>
        <p className="text-[#595F69] font-medium tracking-wide mt-[18px]">
          {Note.content}
        </p>
      </div>
    </>
  );
};

export default Notes1;
