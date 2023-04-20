import { getBasicIcon } from "@/utils/AssetsHelper";
import React from "react";

const Comments = () => {
  return (
    <>
      <div className="flex w-[100%] flex-col px-[40px]">
        <textarea
          placeholder="write a comment here..."
          className="w-[100%] h-[160px] bg-[#fff] apperance-none block font-medium text-[14px] tracking-wide text-gray-600 border rounded-2xl py-4 px-3 focus:outline-none"
        ></textarea>
        <button className="bg-renal-blue mt-[18px] rounded-xl justify-end w-[110px] h-[38px] ml-auto font-medium tracking-wide pl-[5px] p-[5px]">
          <p className="whitespace-nowrap font-large text-[15px] pl-[8px] pr-[8px] text-[#ffffff] ">
            comment
          </p>
        </button>
      </div>  
      <div className="py-2">
        <div className="mx-auto w-[100%] border-b border-gray-300 my-3"></div>
        <div className="py-1"></div>
        <div className="flex items-center justify-between mt-2 ml-4">
          <h3 className="text-[16px] text-black font-medium ml-4  font-medium">Jane Cooper</h3>
          <p className="text-sm text-gray-600 mr-10 font-medium">16h ago</p>
        </div>
        <p className="block  font-medium  text-renal-blue py-2 ml-7 text-xs font-small text-renal-blue hover:text-indigo-500">
          *2:11
        </p>
        <div className="flex items-center ">
          <p className="ml-7 text-small font-medium text-black-500 ">
            Good call on answering features!
          </p>
          <p className="mr-20  font-medium  text-renal-blue ml-[2px]">@Micheal</p>
        </div>
        <p className="ml-7 text-blue-500  font-medium  text-renal-blue ">#introcall</p>
        <button className="py-2 text-gray-500 text-small font-medium ml-7">
          Reply
        </button>
        <div className="flex items-center justify-between mt-2 ml-4">
          <h3 className="text-sm text-black font-medium ml-8  font-medium ">Micheal</h3>
          <p className="text-sm text-gray-600 mr-10  font-medium  ">16h ago</p>
        </div>
        <p className="ml-12 text-[#3F434A] font-small text-black-500  font-medium ">
          Thanks Jane!Thought was the best way to give more clarity about our
          product and services.
        </p>
      </div>
    </>
  );
};

export default Comments;
