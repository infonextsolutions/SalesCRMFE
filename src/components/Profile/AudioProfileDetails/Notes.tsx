import { getBasicIcon, getRoundedAvatar } from "@/utils/AssetsHelper";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Backdrop from "@/components/View/Backdrop/Center";
import Notesd from "./notedummy";
import axios from "axios";
import { useAppDispatch } from "@/store/store";
import { setError, setSuccess } from "@/store/ai";

const Note = ({ title, content, date }: any) => {
  return (
    <div className="mb-[30px] shrink-0 mt-[5px] min-h-[250px] w-[100%] px-[28px] border-black border-[2px] py-[28px] pb-[40px] rounded-[20px] ">
      <p className="font-medium border-b-[2px]  flex border-[#E8E9EB] border-dashed pb-[10px] mb-[20px] text-gray-600">
        {date}
      </p>
      <p className=" text-[18px] font-medium text-[#3F434A] capitalize">
        {title}
      </p>
      <div className="py-1"></div>
      <p className=" text-[14px] font-medium text-gray-500">{content}</p>
    </div>
  );
};

const Notes = ({ data, refresh }: any) => {
  const [list, setList] = useState<any>([...data.notes]);

  console.log(data.notes, "please ch-11", data);

  const [notes, setNotes] = React.useState(false);
  const [bool, setBool] = React.useState(true);
  const showNotes = () => {
    setNotes(true);
  };
  const [content, setContent] = React.useState({
    title: "",
    content: "",
  });

  const containerRef:any = useRef();

  const dispatch = useAppDispatch();
  const cancelNotes = (e: any) => {
    if (e) {
      // setList([...list, e]);
      const url =
        "https://testsalescrm.nextsolutions.in/api/v2/active-call/notes";
      const { title, content } = e;
      console.log(e, "please ch-11");
      axios
        .post(url, {
          title: title,
          content: content,
          id: data._id,
        })
        .then((e) => {
          if (containerRef.current) {
            containerRef.current.scrollTop = 0; // Set scrollTop to 0 to scroll to the top
          }
          setList([
            ...list,
            {
              title: title,
              content: content,
            },
          ]);
          dispatch(
            setSuccess({
              show: true,
              success: "Note Added Successfully!",
            })
          );
        })
        .catch((e) => {
          console.log(e);
          dispatch(
            setError({
              show: true,
              error: "Error Occured!",
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

  function convertISODateToString(isoDateString: any) {
    if (isoDateString) {
      // Create a new Date object using the ISO date string
      const dateObject = new Date(isoDateString);

      // Define the month names array
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      // Extract the day, month, and year from the date object
      const day = dateObject.getDate();
      const monthIndex = dateObject.getMonth();
      const year = dateObject.getFullYear();

      // Create the formatted date string
      const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

      return formattedDate;
    }
    return "-"
  }

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
        <div
          ref={containerRef} className=" px-[10%] overflow-y-auto flex flex-col-reverse custom-scroll-black h-[90vh]">
          {list.map((item: any, i: any) => {
            console.log(item, "che21441");
            return (
              <Note
                title={item.title}
                key={i}
                content={item.content}
                date={convertISODateToString(item.updatedAt)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
