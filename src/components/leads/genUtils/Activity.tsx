import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Activity = [
  {
    activityType: "Phone",
    title: "Demo call with Shradha",
    time: "| 23 Jan 2023 | 4:00 PM | 30 Min |",
  },
  {
    activityType: "Calendar",
    title: "Demo with Piyush",
    time: "| 13 April 2023 | 2:00 PM | 30 Min |",
  },
  {
    activityType: "Mail",
    title: "Demo Mail with Shradha",
    time: "| 27 Dec 2023 | 4:00 PM | 30 Min |",
  },
  {
    activityType: "Phone",
    title: "Demo call with Shradha",
    time: "| 31 Jan 2023 | 7:00 PM | 50 Min |",
  },
];
const MidPath = ({ active }: any) => {
  return (
    <div className="w-[31px] flex items-center justify-between">
      <div
        className={`w-[4px] h-[4px] rounded-[50%] ${
          active ? "bg-[#B656EB]" : "bg-gray-400"
        }`}
      ></div>
      <div
        className={`w-[19px] h-[4px] rounded-[12px] ${
          active ? "bg-[#B656EB]" : "bg-gray-400"
        }`}
      ></div>
      <div
        className={`w-[4px] h-[4px] rounded-[50%] ${
          active ? "bg-[#B656EB]" : "bg-gray-400"
        }`}
      ></div>
    </div>
  );
};

const SingleActivity = ({ act, i, random }: any) => {
  const [hover, setHover] = useState(false);
  const [bounding, setBounding] = useState({ top: 0, left: 0 });
  const ref: any = useRef();

  return (
    <div
      className="flex justify-between"
      ref={ref}
      onMouseOver={() => {
        const box = ref.current.getBoundingClientRect();
        setBounding({ left: box.x, top: box.y });
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Image
        src={getBasicIcon(act.activityType)}
        alt=""
        width={15}
        height={15}
      />
      {random > i && <MidPath active={true} />}
      {hover && (
        <div
          className="bg-[#E8E9EB] max-w-[180px] flex flex-col items-center rounded-[15px] fixed py-[8px] px-[15px]  right-[10px] drop-shadow-sm"
          style={{
            zIndex: 10000000000000,
            // top: !last ? "30px" : "",
            // right: "10px",
            // bottom: last ? "30px" : "",
            top: bounding.top - 50,
            left: bounding.left,
          }}
        >
          <p className="text-[#B656EB] w-[100%] text-[13px] font-medium">
            {act.title}
          </p>
          <p className="text-[#000] text-[9px] w-[100%] font-medium">
            {act.time}
          </p>
        </div>
      )}
    </div>
  );
};

const Single = ({ item, i, data }: any) => {
  const [hover, setHover] = useState(false);
  const [bounding, setBounding] = useState({ top: 0, left: 0 });
  const ref: any = useRef();
  const src =
    item?.type === "email"
      ? "Mail"
      : item?.callId
      ? "Phone"
      : item?.type === "note"
      ? "Tasks"
      : "";
  const owners = data?.owners.length > 0 ? data?.owners[0].name : "";
  function formatDate(inputDate:any) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dateObj = new Date(inputDate);

    const day = dateObj.getUTCDate();
    const month = months[dateObj.getUTCMonth()];
    const year = dateObj.getUTCFullYear();

    let hours = dateObj.getUTCHours();
    const minutes = dateObj.getUTCMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    const duration = "30 Min"; // Assuming a fixed duration of 30 minutes

    const formattedDate = `| ${day} ${month} ${year} | ${hours}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm} | ${duration} |`;

    return formattedDate;
  }
  return (
    <div
      className="flex justify-between"
      ref={ref}
      onMouseOver={() => {
        const box = ref.current.getBoundingClientRect();
        setBounding({ left: box.x, top: box.y });
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {i === 0 ? <></> : <MidPath active={true} />}
      <Image src={getBasicIcon(src)} alt="" width={15} height={15} />
      {/* {
    activityType: "Phone",
    title: "Demo call with Shradha",
    time: "| 23 Jan 2023 | 4:00 PM | 30 Min |",
  }, */}
      {hover && (
        <div
          className="bg-[#E8E9EB] max-w-[180px] flex flex-col items-center rounded-[15px] fixed py-[8px] px-[15px]  right-[10px] drop-shadow-sm"
          style={{
            zIndex: 10000000000000,
            // top: !last ? "30px" : "",
            // right: "10px",
            // bottom: last ? "30px" : "",
            top: bounding.top - 50,
            left: bounding.left,
          }}
        >
          <p className="text-[#B656EB] w-[100%] text-[13px] font-medium">
            {item?.type === "email"
              ? `Email sent to ${owners}`
              : item?.callId
              ? `Call setup with ${owners}`
              : item?.type === "note"
              ? `Note added by ${owners}`
              : ""}
          </p>
          <p className="text-[#000] text-[9px] w-[100%] font-medium">{formatDate(item.createdAt)}</p>
        </div>
      )}
    </div>
  );
};

const ActivityHistory = ({ width, left, random, data }: any) => {
  console.log(data, 341151, Activity);
  const arr = [null, null, null, null];
  if (data?.activityId) {
    for (let i = 0; i < 4; i++) {
      if (i + 1 > data?.activityId?.history.length) {
        arr[i] = null;
      } else {
        const element = data?.activityId?.history[i];
        arr[i] = element;
      }
    }
  }
  return (
    <div
      className={`flex items-center justify-center h-[20px] shrink-0 cursor-pointer`}
      style={{ width: width, marginLeft: left }}
    >
      {/* {Activity.map((act, index) => {
        return random >= index ? (
          <SingleActivity act={act} random={random} i={index} key={index} />
        ) : (
          <div className="flex justify-between">
            {Activity.length > index && <MidPath active={false} />}
            <p className="text-gray-500 mt-[-7px] text-3xl">-</p>
          </div>
        );
      })} */}

      {arr.map((item: any, i: any) => {
        return (
          <React.Fragment key={i}>
            {item === null ? (
              i === 0 ? (
                <>
                  <div className="flex justify-between">
                    <p className="text-gray-500 mt-[-7px] text-3xl">-</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between">
                    <MidPath active={false} />
                    <p className="text-gray-500 mt-[-7px] text-3xl">-</p>
                  </div>
                </>
              )
            ) : (
              <Single key={i} i={i} item={item} data={data} />
            )}
          </React.Fragment>
        );
      })}
      {/* <div className="flex justify-between">
            <p className="text-gray-500 mt-[-7px] text-3xl">-</p>
          </div>
          <div className="flex justify-between">
            <MidPath active={false} />
            <p className="text-gray-500 mt-[-7px] text-3xl">-</p>
          </div>
          <div className="flex justify-between">
            <MidPath active={false} />
            <p className="text-gray-500 mt-[-7px] text-3xl">-</p>
          </div>
          <div className="flex justify-between">
            <MidPath active={false} />
            <p className="text-gray-500 mt-[-7px] text-3xl">-</p>
          </div> */}
      {/* <div className="flex justify-between">
        <MidPath active={false} />
        <p className="text-gray-500 mt-[-7px] text-3xl">-</p>
      </div> */}
      {/* <Image src={getBasicIcon("Calendar")} alt="" width={15} height={15} />
         <MidPath />
        <Image src={getBasicIcon("Calendar")} alt="" width={15} height={15} />
          <MidPath />
         <Image src={getBasicIcon("Mail")} alt="" width={15} height={15} />
        <MidPath />
         <Image src={getBasicIcon("Phone")} alt="" width={15} height={15} /> */}
    </div>
  );
};

export default ActivityHistory;
