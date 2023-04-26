import { getBasicIcon } from "@/utils/AssetsHelper";
import React from "react";

const Comments = () => {
  return (
    
    <><textarea placeholder="write a comment here..."
    className="w-[85%] ml-14 h-[100px] apperance-none block bg-gray-50 text-gray-600 border rounded-xl py-4 px-3 focus:outline-none">
    </textarea>
    <div className="py-2">
    <button className="bg-renal-blue rounded-xl justify-end  ml-[350px] w-[20%] pl-[5px] pr-[5px] p-[6px]">
    <p className="whitespace-nowrap font-large text-[15px] pl-[8px] pr-[8px] text-[#ffffff] ">comment</p>
    </button>
    <div className="mx-auto w-[100%] border-b border-gray-300 my-3"></div>
    <div className="py-1"></div>
    <div className="flex items-center justify-between mt-2 ml-4">
    <h3 className="text-sm text-black font-medium ml-4">Jane Cooper</h3>
    <p className="text-sm text-gray-600 mr-10">16h ago</p>
    </div>
    <p className="block py-2 ml-7 text-xs font-small text-blue-500 hover:text-indigo-500">*2:11</p>
    <div className="flex items-center ">
    <p className="ml-7 text-small font-small text-black-500 ">Good call on answering features!</p>
    <p className="mr-20 text-blue-500">@Micheal</p>
    </div>
    <p className="ml-7 text-blue-500">#introcall</p>
    <button className="py-2 text-gray-500 text-small font-medium ml-7">Reply</button>
    <div className="flex items-center justify-between mt-2 ml-4">
    <h3 className="text-sm text-black font-medium ml-8">Micheal</h3>
    <p className="text-sm text-gray-600 mr-10">16h ago</p>
    </div>
    <p className="ml-12 text-small font-small text-black-500 ">Thanks Jane!Thought was the best way to give more clarity
    about our product and services.</p>
    </div>
    </>
  );
};

export default Comments;
