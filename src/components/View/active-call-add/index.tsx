import { getBasicIcon } from "@/utils/AssetsHelper";
import SimpleButton from "@/utils/Button/SimpleButton";
import axios from "axios";
import Image from "next/image";
import React from "react";

const DropItems = ({ title, list, top, change }: any) => {
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
          change(e.target.value);
        }}
        className=" border border-gray-300 text-gray-900 text-sm rounded-2xl tracking-wide text-[#3F434A] font-medium  block w-full p-2.5 bg-white"
      >
        {list.map((item: any, i: any) => {
          return (
            <option key={i} value={item.value} selected={item.selected}>
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
        className="w-[100%] h-[41px] rounded-[14px] bg-[#D9D9D954] text-[#3F434A] px-[14px] outline-none text-[14px] font-medium tracking-wide"
        type="text"
        name=""
        placeholder={place}
        id=""
      />
    </div>
  );
};

const TextBox = ({ title, place }: any) => {
  return (
    <div className="w-[100%]">
      <p className="w-[100%] text-[#8A9099] font-medium tracking-wide mb-[8px]">
        {title}
      </p>
      <textarea
        name=""
        id=""
        placeholder={place}
        className="w-[100%] h-[170px] rounded-[14px] bg-[#fff] border-[2px] py-[10px] border-[#d9d9d9] text-[#3F434A] px-[14px] outline-none text-[14px] font-medium tracking-wide"
      ></textarea>
    </div>
  );
};

const Time = () => {
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

const DatePage = () => {
  return (
    <div className="w-[58%] h-[100%] cursor-pointer">
      <div className="w-[100%] h-[100%] overflow-hidden relative py-[7px] pl-[10px] px-[3px] flex items-center justify-center">
        <input
          type="date"
          className="bg-[#fff] pl-[3px] w-[100%] outline-none font-medium text-[#000] text-[14px] cursor-pointer"
          name=""
          id=""
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

const DateTime = () => {
  return (
    <div className="w-[45%] border-[#ccc] flex  border-[1px] rounded-2xl h-[44px] ">
      <Time />

      <DatePage />
    </div>
  );
};

const DateContainer = () => {
  return (
    <div className="mt-[15px]">
      <p className="text-[14px] font-medium tracking-wide text-[#8a9099]">
        Time and Date{" "}
      </p>
      <div className="w-[100%] mt-[18px] flex justify-between items-center">
        <DateTime />
      </div>
    </div>
  );
};

const ActiveCall = ({ cancel, id, companyId, customerId }: any) => {
  console.log(id);
  function generateUniqueId() {
    const timestamp: any = Date.now().toString(36); // Convert timestamp to base36 string
    const randomNum = Math.random().toString(36).substr(2, 5); // Generate random number and take 5 characters starting from index 2
    return `${timestamp}-${randomNum}`;
  }
  const [data, setData] = React.useState<any>({
    callId: generateUniqueId(),
    call_title: "Shraddha P.",
    leadId: id,
    companyId: companyId,
    customerId: customerId,
    call_date: Date,
    call_start_time: getCurrentTimeInHours(),
  });

  function getCurrentTimeInHours() {
    const date = new Date();
    const hours = date.getHours();
    return hours;
  }

  const submit = () => {
    axios.post("https://testsalescrm.nextsolutions.in/api/active-call/create", {
      ...data,
      call_date: Date,
      call_start_time: getCurrentTimeInHours(),
    }).then((e:any)=>{
      cancel()
    })
  };

  console.log(data);

  return (
    <div className="w-[100%] h-[100%]  py-[30px] pl-[40px] pr-[40px]  relative">
      <h1 className="text-[#3f434a] text-[31px] font-medium  mb-[24px] tracking-[1px]">
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
      <AddText
        title="Call Title"
        place={"Shraddha P."}
        change={(e: any) => {
          setData({ ...data, call_title: e });
        }}
      />
      <DateContainer />
      <DropItems
        title="Call Owner"
        top={20}
        list={[
          {
            title: "Choose Outcome",
            val: 0,
            selected: true,
          },
          {
            title: "Shradha .P",
            val: "Shradha .P",
            selected: false,
          },
          {
            title: "John. C",
            val: "John .C",
            selected: false,
          },
          {
            title: "karla. C",
            val: "karla. C",
            selected: false,
          },
        ]}
        change={(e: any) => {
          setData({ ...data });
        }}
      />
      <DropItems
        title="Call  Participants"
        top={20}
        list={[
          {
            title: "Choose Outcome",
            val: 0,
            selected: true,
          },
          {
            title: "Shradha .P",
            val: "Shradha .P",
            selected: false,
          },
          {
            title: "John. C",
            val: "John .C",
            selected: false,
          },
          {
            title: "karla. C",
            val: "karla. C",
            selected: false,
          },
        ]}
        change={(e: any) => {
          setData({ ...data });
        }}
      />
      <div className="w-[100%] flex justify-end mt-[20px]">
        <SimpleButton
          theme={1}
          click={submit}
          text={"Send"}
          left={20}
          right={0}
        />
      </div>
    </div>
  );
};

export default ActiveCall;
