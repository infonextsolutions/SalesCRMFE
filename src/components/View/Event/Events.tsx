import { getBasicIcon } from "@/utils/AssetsHelper";
import SimpleButton from "@/utils/Button/SimpleButton";
import { create } from "domain";
import Image from "next/image";
import React, { useState } from "react";

const DropItems = ({ title, list, top, setEventType }: any) => {
  return (
    <div
      className="w-[100%]"
      style={{
        marginTop: top,
      }}
    >
      <p className="block mb-2 text-sm font-medium text-[#8a9099] tracking-wide">
        {title}
      </p>

      <select
        className=" border border-gray-300 text-sm rounded-2xl tracking-wide text-[#3F434A] font-medium  block w-full p-2.5 bg-white"
        onChange={(e) => setEventType(e.target.value)}
      >
        {list.map((item: any, i: any) => (
          <option
            className="text-[#3F434A] "
            key={i}
            value={item.value}
            selected={item.selected}
          >
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

const AddText = ({ top, title, width, change }: any) => {
  return (
    <div
      className="w-[100%] "
      style={{
        width: width ? width : "100%",
        marginTop: top,
      }}
    >
      <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
        {title}
      </p>
      <input
        type="text"
        className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
        onChange={(e: any) => {
          change(e.target.value);
        }}
      />
    </div>
  );
};

const AddTextArea = ({ top, title, width, change }: any) => {
  return (
    <div
      className="w-[100%] "
      style={{
        width: width ? width : "100%",
        marginTop: top,
      }}
    >
      <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
        {title}
      </p>
      <textarea
        name=""
        className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[140px] outline-none"
        id=""
        onChange={(e: any) => {
          change(e.target.value);
          console.log(e.target.value);
        }}
      ></textarea>
    </div>
  );
};
const AddMember = ({ title }: any) => {
  const [members, setMembers] = React.useState<string[]>([]);
  const [value, setValue] = React.useState("");
  const addMember = (e: any) => {
    if (e.keyCode === 13 && value) {
      setMembers([...members, value]);
      setValue("");
    }
  };

  const removeMemberHandler = (removeMember: any) => {
    const newMembers = members.filter((member) => member !== removeMember);
    setMembers(newMembers);
  };
  return (
    <>
      <p className="text-[14px] font-medium mt-[20px] tracking-wide text-[#8a9099]">
        {title}
      </p>
      <div className=" text-gray-700 flex flex-wrap border border-[#e8e9eb] mt-[10px] rounded-[13px] tracking-wide text-[14px] font-medium px-[14px] h-auto ">
        <ul className="flex flex-wrap my-[3px] gap-2">
          {members.length >= 1 &&
            members.map((member, i) => (
              <li
                key={i}
                className="flex items-center gap-1 px-2 bg-gray-200 rounded-md"
              >
                {member}

                <div
                  className="cursor-pointer"
                  onClick={() => removeMemberHandler(member)}
                >
                  <Image
                    className="w-[12px] h-[12px]"
                    src={getBasicIcon("Cross")}
                    width={10}
                    height={10}
                    alt=""
                  />
                </div>
              </li>
            ))}
        </ul>
        <input
          type="text"
          className=" bg-white text-[#3f434a] rounded-[13px] tracking-wide text-[14px] font-medium px-[14px] h-[35px] outline-none"
          onKeyUp={addMember}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
    </>
  );
};

const Time = ({ id, setEventToTime, setEventFromTime }: any) => {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  React.useEffect(() => {
    const onpointerdown = () => {
      if (!hover) {
        setShow(false);
      }
    };
    document.addEventListener("pointerdown", onpointerdown, false);
    return () => {
      document.removeEventListener("pointerdown", onpointerdown, false);
    };
  });

  const [selected, setSelected] = useState(0);

  const arr = [
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "07:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ];

  return (
    <div className="w-[42%] h-[100%] relative border-r-[1px] border-[#ccc] flex items-center">
      <div
        onClick={() => {
          setShow(true);
        }}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className="h-[100%] cursor-pointer tracking-wider text-sm rounded-2xl text-[#3F434A] flex items-center justify-center font-medium px-[5px] w-full p-0 bg-white"
      >
        {arr[selected]}
      </div>
      {show && (
        <div
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          className="w-[100%] h-[100px] bg-[#f8f8f8] flex flex-col rounded-xl hide-scrollbar absolute top-[50px] left-0 px-[15px] py-[13px] overflow-y-auto"
        >
          {arr.map((item: any, i: any) => {
            const check = selected === i;
            return (
              <div className="w-[100%] relative cursor-pointer" key={i}>
                {check && (
                  <Image
                    src={getBasicIcon("Check")}
                    className="absolute left-[0px] top-[5px] cursor-pointer w-[13px] svg-renal-blue"
                    alt=""
                    style={{
                      userSelect: "none",
                    }}
                    width={13}
                    height={13}
                  />
                )}
                <p
                  className="text-[#000] translate-x-[3px] text-[13px] font-medium tracking-wide text-center"
                  style={{
                    marginBottom: i === arr.length - 1 ? 0 : 10,
                    color: check ? "#304FFD" : "#000",
                  }}
                  onClick={() => {
                    setSelected(i);
                    id == 1 ? setEventFromTime(arr[i]) : setEventToTime(arr[i]);
                    setShow(false);
                  }}
                >
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Date = ({ id, setEventFromDate, setEventToDate }: any) => {
  return (
    <div className="w-[58%] h-[100%] cursor-pointer">
      <div className="w-[100%] h-[100%] overflow-hidden relative py-[7px] pl-[10px] px-[3px] flex items-center justify-center">
        <input
          type="date"
          className="bg-[#fff] pl-[3px] w-[100%] outline-none font-medium text-[#000] text-[14px] cursor-pointer"
          name=""
          id=""
          onChange={(e) => {
            console.log(e.target.value);
            id == 1
              ? setEventFromDate(e.target.value)
              : setEventToDate(e.target.value);
            // dateFunc(e.target.value);
          }}
        />
        <Image
          src={getBasicIcon("Arrow-Down 2")}
          className="absolute right-[8px] pointer-events-none cursor-pointer w-[15px] top-[15px]"
          alt=""
          style={{
            userSelect: "none",
          }}
          width={15}
          height={15}
        />
      </div>
    </div>
  );
};

const DateTime = ({
  id,
  setEventToDate,
  setEventFromDate,
  setEventFromTime,
  setEventToTime,
}: any) => {
  return (
    <div className="w-[45%] border-[#ccc] flex  border-[1px] rounded-2xl h-[44px] ">
      <Time
        id={id}
        setEventFromTime={setEventFromTime}
        setEventToTime={setEventToTime}
      />

      <Date
        id={id}
        setEventFromDate={setEventFromDate}
        setEventToDate={setEventToDate}
      />
    </div>
  );
};

const DateContainer = ({
  setEventFromTime,
  setEventFromDate,
  setEventToDate,
  setEventToTime,
}: any) => {
  return (
    <div className="mt-[15px]">
      <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
        Time and Date{" "}
      </p>
      <div className="w-[100%] mt-[18px] flex justify-between items-center">
        <DateTime
          id={1}
          setEventFromTime={setEventFromTime}
          setEventFromDate={setEventFromDate}
          setEventToDate={setEventToDate}
          setEventToTime={setEventToTime}
          // timeFunc={setEventFromTime}
          // dateFunc={setEventFromDate}
        />
        <div className="w-[30px] h-[1px] bg-[#ccc]" />
        <DateTime
          id={2}
          setEventFromTime={setEventFromTime}
          setEventFromDate={setEventFromDate}
          setEventToDate={setEventToDate}
          setEventToTime={setEventToTime}
          // timeFunc={setEventToTime}
          // dateFunc={setEventToTime}
        />
      </div>
    </div>
  );
};

const AllDay = ({ setEventAllday }: any) => {
  return (
    <div className="w-[100%] flex items-center h-[40px] mt-[30px]">
      <div className={`flex items-center mr-[70px]  h-[20px] shrink-0 `}>
        <input
          type="checkbox"
          onClick={() => setEventAllday("allday")}
          value="allday"
          className="checkbox mr-[8px]"
        />
        <p className="text-[14px] font-medium tracking-wide text-[#000]">
          All Day
        </p>
      </div>
      <div className={`flex items-center  h-[20px] shrink-0 `}>
        <input
          type="checkbox"
          onClick={() => setEventAllday("repeat")}
          value="repeat"
          className="checkbox mr-[8px]"
        />
        <p className="text-[14px] font-medium tracking-wide text-[#000]">
          Repeat
        </p>
      </div>
    </div>
  );
};

const Events = ({ cancel }: any) => {
  // const [eventType1, setEventType1] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventOutcome, setEventOutcome] = useState("");
  const [eventAllday, setEventAllday] = useState("");
  const [eventFromTime, setEventFromTime] = useState("");
  const [eventFromDate, setEventFromDate] = useState("");
  const [eventToTime, setEventToTime] = useState("");
  const [eventToDate, setEventToDate] = useState("");
  const [eventType, setEventType] = useState("");
  const submit = () => {
    // console.log("eventtitle", eventType);
    // console.log("eventtitle", eventTitle);
    // console.log("eventtitle", eventDescription);
    // console.log("eventFromTime", eventFromTime);
    // console.log("eventFromDate", eventFromDate);
    // console.log("eventToTime", eventToTime);
    // console.log("eventToDate", eventToDate);
    // console.log("eventtitle", eventAllday);
    // console.log("eventtitle", eventOutcome);

    const body = {};
    //  need api integration

    cancel();
  };
  return (
    <div className="hide-scrollbar w-[100%]  px-[40px] py-[30px] h-[100%] overflow-y-auto relative ">
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
      <h1 className="text-[30px] text-[#000] tracking-md">New Event</h1>
      <DropItems
        title={"Type"}
        top={20}
        setEventType={setEventType}
        list={[
          {
            title: "Choose Type",
            val: 0,
            selected: true,
          },
          {
            title: "Task",
            val: 0,
            selected: false,
          },
          {
            title: "Meeting",
            val: 0,
            selected: false,
          },
          {
            title: "Reminder",
            val: 0,
            selected: false,
          },
        ]}
      />
      <AddText
        title={"Title"}
        top={20}
        change={(e: any) => {
          setEventTitle(e);
        }}
      />
      <AddTextArea
        title={"Description"}
        top={20}
        change={(e: any) => {
          setEventDescription(e);
        }}
      />
      <DateContainer
        setEventFromTime={setEventFromTime}
        setEventFromDate={setEventFromDate}
        setEventToDate={setEventToDate}
        setEventToTime={setEventToTime}
      />
      <AllDay setEventAllday={setEventAllday} />
      {eventType === "Meeting" && <AddMember title={"Members"} />}
      <DropItems
        title={"Outcome"}
        top={20}
        setEventType={setEventOutcome}
        list={[
          {
            title: "Choose Outcome",
            val: 0,
            selected: true,
          },
          {
            title: "Dummy1",
            val: 0,
            selected: false,
          },
          {
            title: "Dummy2",
            val: 0,
            selected: false,
          },
        ]}
      />
      <div className=" flex justify-end mt-[30px] w-[100%]">
        <SimpleButton
          theme={1}
          text={"Create"}
          left={20}
          right={0}
          click={() => {
            submit();
          }}
        />
      </div>
    </div>
  );
};

export default Events;
