import { getBasicIcon, getRoundedAvatar } from "@/utils/AssetsHelper";
import React from "react";
import Image from "next/image";

const Note = () => {
  return (
    <div className="mb-[30px] min-h-[250px] w-[100%] px-[28px] border-black border-[2px] py-[28px] pb-[40px] rounded-[20px] ">
  <div className="flex items-center justify-between mb-4">
    <p className="font-medium border-b-[2px] border-[#E8E9EB] border-dashed pb-[10px] text-gray-600 flex items-center">
      <span className="mr-2">12 June 2020</span>
      <div className="flex items-center space-x-4">
        <Image
          src={getBasicIcon("Edit")}
          className={`w-[16px] h-[16px] ml-[160px] cursor-pointer`}
          alt=""
          width={16}
          height={16}
        />
        <Image
          src={getBasicIcon("Delete")}
          className={`w-[16px] h-[16px] cursor-pointer`}
          alt=""
          width={16}
          height={16}
        />
      </div>
    </p>
  </div>
      <p className=" text-[18px] font-medium text-[#3F434A] capitalize">
        The title of a note
      </p>
      <div className="py-1"></div>
      <p className=" text-[14px] font-medium text-gray-500">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
        faucibus tempor. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas. Sed id nisi id turpis sagittis
        tincidunt...
      </p>
    </div>
  );
};

const Notes = () => {
  return (
    <>
      <div className="w-[100%]">
        <div className="bg-gray-100 px-4 py-3 mb-[20px] flex items-center justify-end">
          <Image
            src={getBasicIcon("Filter")}
            className={`w-[30px] p-[6px] mr-[5px] bg-white rounded-md svg-grey`}
            alt=""
            width={15}
            height={15}
            style={{
              objectFit: "contain",
            }}
          />
          <div className="flex items-center ml-[10px]">
            <button className="bg-renal-blue  flex pl-[5px] rounded-xl pr-[5px] p-[7px]">
              <Image
                src={getBasicIcon("Plus")}
                className={`w-[20px] svg-white`}
                alt=""
                width={20}
                height={20}
                style={{
                  objectFit: "contain",
                }}
              />
              <p className="whitespace-nowrap font-medium text-[14px] pl-[5px] pr-[5px] text-[#ffffff] ">
                Add Note
              </p>
            </button>
          </div>
        </div>
        <div className="py-2"></div>
        <div className=" px-[10%]">
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
      </div>
    </>
  );
};

export default Notes;
