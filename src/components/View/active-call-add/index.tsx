import { setError, setSuccess } from "@/store/ai";
import { useAppDispatch } from "@/store/store";
import { getBasicIcon } from "@/utils/AssetsHelper";
import SimpleButton from "@/utils/Button/SimpleButton";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const DropItems = ({ title, list, top, change, customerId }: any) => {
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
        id="countries"
        onChange={(e: any) => {
          title === "Call Participants"
            ? change(customerId)
            : change(e.target.value);
        }}
        className=" border border-gray-300 text-gray-900 text-sm rounded-2xl tracking-wide text-[#3F434A] font-medium  block w-full p-2.5 bg-white"
      >
        {list.map((item: any, i: any) => {
          return (
            <option
              key={i}
              onClick={() => {
                change(item.value);
              }}
              value={item.value}
              selected={item.selected}
            >
              {item.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const DropItemsNew = ({ title, list, top, change, customerId }: any) => {
  return (
    <div
      className="w-[100%] flex items-center gap-1"
      // style={{
      //   marginTop: top,
      // }}
    >
      <p className="block text-sm font-medium text-[#8a9099] tracking-wide">
        {title}
      </p>

      <select
        id="countries"
        onChange={(e: any) => {
          title === "Call Participants"
            ? change(customerId)
            : change(e.target.value);
        }}
        className=" border border-gray-300 text-sm rounded-2xl tracking-wide text-[#3F434A] font-medium  block w-[100px] p-2 bg-white"
      >
        {list.map((item: any, i: any) => {
          return (
            <option
              key={i}
              onClick={() => {
                change(item.value);
              }}
              value={item.value}
              selected={item.selected}
            >
              {item.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const AddText = ({ title, place, change }: any) => {
  return (
    <div className="w-[100%] mb-[15px]">
      <p className="w-[100%] text-[#8A9099] font-medium tracking-wide mb-[8px]">
        {title}
      </p>
      <input
        onChange={(e: any) => {
          change(e.target.value);
        }}
        // className="w-[100%] h-[41px] rounded-[14px]  text-[#3F434A] px-[14px] outline-none text-[14px] font-medium tracking-wide"
        className="w-[100%] bg-white text-[#3f434a] border-[#e8e9eb] border-[2px] mt-[10px] rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
        type="text"
        name=""
        placeholder={place}
        id=""
      />
    </div>
  );
};

const AddTextNew = ({ title, place, change }: any) => {
  return (
    <div className="w-[100%] gap-4  flex items-center ">
      <p className=" text-[#8A9099] font-medium tracking-wide ">{title}</p>
      <input
        onChange={(e: any) => {
          change(e.target.value);
        }}
        // className="w-[100%] h-[41px] rounded-[14px]  text-[#3F434A] px-[14px] outline-none text-[14px] font-medium tracking-wide"
        className="w-[100%] flex-1 bg-white text-[#3f434a] border-[#e8e9eb] border-[2px]  rounded-[13px] py-[10px] tracking-wide text-[14px] font-medium px-[14px] h-[38px] outline-none"
        type="text"
        name=""
        placeholder={place}
        id=""
      />
    </div>
  );
};
const DisabledAddText = ({ title, place }: any) => {
  return (
    <div className="w-[100%] mb-[15px]">
      <p className="w-[100%] text-[#8A9099] font-medium tracking-wide mb-[8px]">
        {title}
      </p>
      <input
        disabled
        className="cursor-not-allowed w-[100%] h-[41px] rounded-[14px] bg-[#D9D9D954] text-[#3F434A] px-[14px] outline-none text-[14px] font-medium tracking-wide"
        type="text"
        name=""
        placeholder={place}
        value={place}
        id=""
      />
    </div>
  );
};

const TextBox = ({ title, place, change }: any) => {
  return (
    <div className="w-[100%]">
      <p className="w-[100%] text-[#8A9099] font-medium tracking-wide mb-[8px]">
        {title}
      </p>
      <textarea
        name=""
        id=""
        placeholder={place}
        onChange={(e: any) => {
          change(e.target.value);
        }}
        className="w-[100%] h-[170px] rounded-[14px] bg-[#fff] border-[2px] py-[10px] border-[#d9d9d9] text-[#3F434A] px-[14px] outline-none text-[14px] font-medium tracking-wide"
      ></textarea>
    </div>
  );
};

const Time = ({ date, setDate }: any) => {
  const [show, setShow] = React.useState(false);
  const [hover, setHover] = React.useState(false);

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

  const [selected, setSelected] = React.useState(0);

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
        className="text-gray-900 h-[100%] cursor-pointer tracking-wider text-sm rounded-2xl tracking-wide text-[#3F434A] flex items-center justify-center font-medium px-[5px] w-full p-0 bg-white"
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
                    className="absolute left-[0px] top-[5px] cursor-pointer w-[13px] svg-bg-red"
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
                    setDate(arr[i]);
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

const DatePage = ({ date, setDate }: any) => {
  return (
    <div className="w-[58%] h-[100%] cursor-pointer">
      <div className="w-[100%] h-[100%] overflow-hidden relative py-[7px] pl-[10px] px-[3px] flex items-center justify-center">
        <input
          type="date"
          className="bg-[#fff] pl-[3px] w-[100%] outline-none font-medium text-[#000] text-[14px] cursor-pointer"
          name=""
          id=""
          onChange={(e) => {
            setDate(e.target.value);
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

const DateTime = ({ date, setDate }: any) => {
  return (
    <div className="w-[45%] border-[#ccc] flex  border-[1px] rounded-2xl h-[44px] ">
      <Time
        data={date.time}
        setDate={(e: any) => {
          setDate({ ...date, time: e });
        }}
      />
      <DatePage
        data={date.date}
        setDate={(e: any) => {
          setDate({ ...date, date: e });
        }}
      />
    </div>
  );
};

const DateContainer = ({ date, setDate }: any) => {
  return (
    <div className="mt-[15px]">
      <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
        Time and Date{" "}
      </p>
      <div className="w-[100%] mt-[18px] flex justify-between items-center">
        <DateTime date={date} setDate={setDate} />
      </div>
    </div>
  );
};

const ActiveCall = ({
  cancel,
  id,
  companyId,
  customerId,
  companyName,
  refresh,
  lead,
  clientPOCName,
}: any) => {
  function generateUniqueId() {
    const timestamp: any = Date.now().toString(36); // Convert timestamp to base36 string
    const randomNum = Math.random().toString(36).substr(2, 5); // Generate random number and take 5 characters starting from index 2
    return `${timestamp}-${randomNum}`;
  }
  const [data, setData] = React.useState<any>({
    callId: generateUniqueId(),
    call_title: "",
    call_discription: "",
    leadId: id,
    companyId: companyId,
    customerId: customerId,
    call_date: "",
    call_start_time: getCurrentTimeInHours(),
    // company_name: companyName,
    call_type: "",
    call_new_participant_number: "",
    call_new_participant_title: "",
    call_new_participant_name: "",
    call_new_participant_designation: "",
  });

  function getCurrentTimeInHours() {
    const date = new Date();
    const hours = date.getHours();
    return hours;
  }

  const [date, setDateData] = useState<any>({
    time: "",
    date: "",
  });
  console.log(date, "kewddgwkegwe");

  function combineDateTimeStrings(timeString: any, dateString: any) {
    // Check if the time string is empty
    const isTimeStringEmpty = timeString.trim() === "";

    // If the time string is empty, use the current time
    const currentDate = new Date();
    const givenDate = isTimeStringEmpty
      ? currentDate
      : new Date(`${dateString}T${timeString}:00`);

    // Check if the given date is today's date
    const givenYear = givenDate.getFullYear();
    const givenMonth = givenDate.getMonth();
    const givenDay = givenDate.getDate();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    if (
      givenYear === currentYear &&
      givenMonth === currentMonth &&
      givenDay === currentDay &&
      givenDate < currentDate
    ) {
      // If the given time is before the current time and it's today's date, use the current time and date instead
      givenDate.setHours(currentDate.getHours());
      givenDate.setMinutes(currentDate.getMinutes());
      givenDate.setSeconds(currentDate.getSeconds());
      givenDate.setMilliseconds(currentDate.getMilliseconds());
    }

    const formattedDate = givenDate.toISOString();

    return formattedDate;
  }

  const dispatch = useAppDispatch();

  const submit = () => {
    // console.log("Caling data",data)
    let timee = null;
    // if (date.date) {
    //   timee = combineDateTimeStrings(date.time, date.date);
    // }
    // console.log(
    //   "asddafdfa",
    //   {
    //     ...data,

    //     call_date: date.date,
    //     call_start_time: date.time,
    //     // call_start_time:  timee ? timee : getCurrentTimeInHours(),
    //     participants: data?.participants,
    //     owner: data?.owner,
    //   },
    //   "ch1231",
    //   date
    // );
    // const owner = localStorage.getItem("")

    const ownerId = localStorage.getItem("user-id");

    const finalPayload = {
      ...data,
      owner: ownerId,
      call_date: date.date,
      call_start_time: date.time,
      // call_start_time: timee ? timee : getCurrentTimeInHours(),
    };
    console.log("payload", finalPayload);
    axios
      .post(
        "https://sales365.trainright.fit/api/active-call/create",
        finalPayload
      )
      .then((e: any) => {
        cancel();
        dispatch(
          setSuccess({
            show: true,
            success: "Call Added Successfully!",
          })
        );
        if (refresh) {
          refresh();
        }
      })
      .catch((e) => {
        dispatch(
          setError({
            show: true,
            error: "Error Occured!",
          })
        );
      });
  };

  const list = lead
    ? lead.owners.map((i: any) => {
        console.log(i);
        return {
          title: i.name,
          value: i._id,
          selected: false,
          _id: i._id,
        };
      })
    : [];
  const state = useSelector((state: any) => state.auth);
  const loggedInUser = localStorage.getItem("user-name")?.split("@")[0];

  return (
    <div className="w-[100%] h-[100%] py-[30px] pl-[40px] pr-[40px]  relative">
      <h1 className="text-[#3f434a] text-[31px] font-medium mb-[24px] tracking-[1px]">
        Setup Call Page
      </h1>
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
      {/* <AddText
        title="Company Name*"
        place={"ABC Corp."}
        change={(e: any) => {
          setData({ ...data, });
        }}
      /> */}
      <DisabledAddText title="Company Name" place={companyName} />
      <AddText
        title="Call Title"
        place={"Call Title"}
        change={(e: any) => {
          setData({ ...data, call_title: e });
        }}
      />
      <AddText
        title="Call Description"
        place="Description"
        change={(e: any) => {
          setData({ ...data, call_discription: e });
        }}
      />
      <DropItems
        title="Call Type"
        top={20}
        list={[
          {
            title: "Call Type",
            val: 0,
            selected: true,
          },
          {
            title: "Discovery",
            val: 0,
            selected: false,
          },
          {
            title: "Product Demo",
            val: 0,
            selected: false,
          },
          {
            title: "Solution Design",
            val: 0,
            selected: false,
          },
          {
            title: "Consultation",
            val: 0,
            selected: false,
          },
          {
            title: "Pricing Discussion",
            val: 0,
            selected: false,
          },
          {
            title: "Negotiation",
            val: 0,
            selected: false,
          },
          {
            title: "Follow-up",
            val: 0,
            selected: false,
          },
          ...list,
        ]}
        change={(e: any) => {
          setData({ ...data, call_type: e });
        }}
      />
      <DateContainer date={date} setDate={setDateData} />
      <DropItems
        title="Allocate Call Owner"
        top={20}
        list={[
          {
            title: "Choose Call Owner",
            val: 0,
            selected: true,
          },
          {
            // title: `${state?.user.name.split("@")[0]}`,
            title: loggedInUser,
            val: 0,
            selected: false,
          },
          ...list,
        ]}
        change={(e: any) => {
          setData({ ...data, owner: e });
        }}
      />

      <DropItems
        title="Call Participants"
        top={20}
        customerId={customerId}
        list={[
          {
            title: "Choose Participants",
            val: 0,
            selected: true,
          },
          {
            title: clientPOCName,
            val: "0",
            selected: false,
          },
          ...list,
        ]}
        change={(e: any) => {
          setData({ ...data, participants: e });
        }}
      />

      <div className="flex flex-col gap-4">
        <p className="font-semibold mt-4">Call New Participant</p>
        <AddTextNew
          title="Landline/Mobile Number"
          change={(e: any) => {
            setData({ ...data, call_new_participant_number: e });
          }}
        />
        <div className="flex items-center">
          <DropItemsNew
            title="Title"
            top={20}
            list={[
              {
                title: "Choose",
                val: 0,
                selected: true,
              },
              {
                title: "Mr",
                val: 0,
                selected: false,
              },
              {
                title: "Mrs",
                val: 0,
                selected: false,
              },
              {
                title: "Miss",
                val: 0,
                selected: false,
              },
              ...list,
            ]}
            change={(e: any) => {
              setData({ ...data, call_new_participant_title: e });
            }}
          />

          <AddTextNew
            title="Name"
            change={(e: any) => {
              setData({ ...data, call_new_participant_name: e });
            }}
          />
        </div>
        <AddTextNew
          title="Designation"
          change={(e: any) => {
            setData({ ...data, call_new_participant_designation: e });
          }}
        />
      </div>
      <div className="w-[100%] flex justify-end mt-[20px]">
        <SimpleButton theme={2} text={"Call Now"} left={20} right={0} />
        <SimpleButton
          theme={1}
          click={submit}
          text={"Schedule Call"}
          left={20}
          right={0}
        />
      </div>
    </div>
  );
};

export default ActiveCall;
