import { getBasicIcon, getRoundedAvatar } from "@/utils/AssetsHelper";
import React, { useState } from "react";
import Image from "next/image";
import Backdrop from "@/components/View/Backdrop/Center";
import Notesd from "./notedummy";
import axios from "axios";
import { useAppDispatch } from "@/store/store";
import { setSuccess } from "@/store/ai";

const Note = ({ title, content }: any) => {
  return (
    <div className="mb-[30px] min-h-[250px] w-[100%] px-[28px] border-black border-[2px] py-[28px] pb-[40px] rounded-[20px] ">
      <p className="font-medium border-b-[2px]  flex border-[#E8E9EB] border-dashed pb-[10px] mb-[20px] text-gray-600">
        12 June 2020
      </p>
      <p className=" text-[18px] font-medium text-[#3F434A] capitalize">
        {title}
      </p>
      <div className="py-1"></div>
      <p className=" text-[14px] font-medium text-gray-500">{content}</p>
    </div>
  );
};

const Notes = ({ data }: any) => {
  const [list, setList] = useState<any>([
    // {
    //   title: "note-1",
    //   content: `  lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
    // faucibus tempor. Pellentesque habitant morbi tristique senectus et netus
    // et malesuada fames ac turpis egestas. Sed id nisi id turpis sagittis
    // tincidunt...`,
    // },
  ]);

  console.log(data.result.notes, "please ch-11", data);

  const [notes, setNotes] = React.useState(false);
  const [bool, setBool] = React.useState(true);
  const showNotes = () => {
    setNotes(true);
  };
  const [content, setContent] = React.useState({
    title: "",
    content: "",
  });
  const dispatch = useAppDispatch();
  const cancelNotes = (e: any) => {
    if (e) {
      // setList([...list, e]);
      const url = "https://testsalescrm.nextsolutions.in/api/calling/notes";
      const { title, content } = e;

      console.log(e, "please ch-11");

      axios
        .post(url, {
          title: title,
          content: content,
          callId: data._id,
        })
        .then((e) => {
          console.log(e,"ch-11");
          dispatch(
            setSuccess({
              show: true,
              success: "Note Added Successfully!",
            })
          );
        });
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
        <div className=" px-[10%] overflow-y-auto h-[90vh]">
          {list.map((item: any, i: any) => {
            return <Note title={item.title} key={i} content={item.content} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
