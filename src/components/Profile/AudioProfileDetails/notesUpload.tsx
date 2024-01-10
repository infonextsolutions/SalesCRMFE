import { getBasicIcon, getRoundedAvatar } from "@/utils/AssetsHelper";
import React, { useEffect, useRef, useState } from "react";
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
  const [list, setList] = useState<any>(data?.notes ? data.notes : []);

  const [notes, setNotes] = React.useState(false);
  const [bool, setBool] = React.useState(true);
  const showNotes = () => {
    setNotes(true);
  };
  const [content, setContent] = React.useState({
    title: "",
    content: "",
  });

  const containerRef: any = useRef();
  const [accessToken, setAccessToken] = useState<string>("");

  useEffect(() => {
    if (window !== undefined) {
      setAccessToken(localStorage.getItem("access-token") || "");
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0; // Set scrollTop to 0 to scroll to the top
    }
  });

  const dispatch = useAppDispatch();
  const cancelNotes = (e: any) => {
    if (e) {
      // setList([...list, e]);
      const url =
        "https://sales365.trainright.fit/api/recording/notes/addManual";
      const { title, content } = e;
      setList([...list, e]);
      axios
        .post(url, {
          title: title,
          content: content,
          recordingId: data._id,
        }, { headers: { Authorization: accessToken } })
        .then((e) => {
          if (containerRef.current) {
            containerRef.current.scrollTop = 0; // Set scrollTop to 0 to scroll to the top
          }
          const iso = new Date().toISOString();
          setList([
            ...list,
            {
              title: title,
              content: content,
              updatedAt: iso,
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
    return "-";
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
              className="bg-bg-red  flex pl-[5px] rounded-xl pr-[5px] p-[7px]"
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
          ref={containerRef}
          className=" px-[10%] overflow-y-auto flex flex-col custom-scroll-black h-[90vh]"
        >
          <div className="w-[100%] flex flex-col-reverse ">
            {list.map((item: any, i: any) => {
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
      </div>
    </>
  );
};

export default Notes;
