import { getBasicIcon, getRoundedAvatar } from "@/utils/AssetsHelper";
import React, { useState } from "react";
import Image from "next/image";
import Backdrop from "@/components/View/Backdrop/Center";
import Notesd from "./notedummy";

const Note = ({ title, content }: any) => {
  return (
    <div className="mb-[30px] min-h-[250px] w-[100%] px-[28px]  border-black border-[2px] py-[28px] pb-[40px] rounded-[20px] ">
      <div className="flex items-center justify-between mb-4 ">
        <p className="font-medium border-b-[2px] border-[#E8E9EB] border-dashed  pb-[10px] text-gray-600 flex items-center">
          <span className="mr-10">12 June 2020</span>
          <div className="flex  items-center space-x-3">
            <Image
              src={getBasicIcon("Edit")}
              className={`w-[16px] h-[16px]  ml-32 cursor-pointer`}
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
        {title}
      </p>
      <div className="py-1"></div>
      <p className=" text-[14px] font-medium text-gray-500">{content}</p>
    </div>
  );
};

const Notes = () => {
  const [list, setList] = useState<any>([
    {
      title: "note-1",
      content: `  lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
    faucibus tempor. Pellentesque habitant morbi tristique senectus et netus
    et malesuada fames ac turpis egestas. Sed id nisi id turpis sagittis
    tincidunt...`,
    },
  ]);
  const [notes, setNotes] = React.useState(false);
  const [bool, setBool] = React.useState(true);
  const showNotes = () => {
    setNotes(true);
  };
  const [content, setContent] = React.useState({
    title: "",
    content: "",
  });
  const cancelNotes = (e: any) => {
    if (e) {
      setList([...list, e]);
    }
    setBool(false);
    setTimeout(() => {
      setNotes(false);
      setBool(true);
    }, 1700);
  };

  return (
    <>
      {notes && (
        <Backdrop bool={bool}>
          <Notesd cancel={cancelNotes} />
        </Backdrop>
      )}
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
            <button
              onClick={() => {
                showNotes();
              }}
              className="bg-renal-blue  flex pl-[5px] rounded-xl pr-[5px] p-[7px]"
            >
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
          {list.map((item: any, i: any) => {
            return <Note title={item.title} key={i} content={item.content} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
