import { getBasicIcon } from "@/utils/AssetsHelper";
import DualRange from "@/utils/dualRange";
import Image from "next/image";
import React, { useState } from "react";

const AddText = ({ top, title, width, list, change }: any) => {
  return (
    <div
      style={{
        width: width ? width : "100%",
        marginTop: top ? top : "10px",
      }}
    >
      <p className="block mb-2 text-sm font-medium text-[#8a9099] tracking-wide">
        {title}
      </p>
      <div className="w-[100%] px-[10px] border-[1px]   rounded-xl border-[#ccc]">
        <select
          onChange={(e) => {
            change(e.target.value);
          }}
          id="countries"
          className="outline-none cursor-pointer capitalize text-gray-900 py-[7px]   text-sm tracking-wide text-[#3F434A] font-medium  block w-full bg-white"
        >
          {list.map((item: any, i: any) => {
            return (
              <option value={item.value} key={i} selected={item.selected}>
                {item.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

const LastActivity = ({}) => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "15px",
      }}
    >
      <p className="block mb-2 text-sm font-medium text-[#8a9099] tracking-wide">
        LastActivity
      </p>
      <div className="w-[100%] flex justify-between">
        <div className="w-[48%] relative py-[7px] px-[10px] border-[1px] flex items-center justify-center  rounded-xl border-[#ccc]">
          <Image src={getBasicIcon("Calendar")} width={20} height={20} alt="" />
          <input
            type="date"
            className="bg-[#fff] pl-[3px] outline-none font-medium text-[#000] cursor-pointer"
            name=""
            id=""
          />
          <Image
            src={getBasicIcon("Arrow-Down 2")}
            className="absolute right-[10px] pointer-events-none cursor-pointer w-[15px] top-[13px]"
            alt=""
            style={{
              userSelect: "none",
            }}
            width={15}
            height={15}
          />
        </div>
        <div className="w-[48%] relative py-[7px] px-[10px] border-[1px] flex items-center justify-center  rounded-xl border-[#ccc]">
          <Image src={getBasicIcon("Calendar")} width={20} height={20} alt="" />
          <input
            type="date"
            className="bg-[#fff] pl-[3px] outline-none font-medium text-[#000] cursor-pointer"
            name=""
            id=""
          />
          <Image
            src={getBasicIcon("Arrow-Down 2")}
            className="absolute right-[10px] pointer-events-none cursor-pointer w-[15px] top-[13px]"
            alt=""
            style={{
              userSelect: "none",
            }}
            width={15}
            height={15}
          />
        </div>
      </div>
    </div>
  );
};

const Filter = ({ cancel, left, top }: any) => {
  const [hover, setHover] = useState(false);
  React.useEffect(() => {
    const onpointerdown = () => {
      if (!hover) {
        cancel();
      }
    };
    document.addEventListener("pointerdown", onpointerdown, false);
    return () => {
      document.removeEventListener("pointerdown", onpointerdown, false);
    };
  });

  const [content, setContent] = useState<any>({});

  return (
    <div
      className="w-[400px] rounded-lg shadow-2xl min-h-[400px] bg-[#fff] py-[10px] px-[20px] absolute"
      style={{
        zIndex: 99999999999,
        top: top,
        left: left,
      }}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <AddText
        top={10}
        title={"Stage"}
        list={[
          {
            title: "enquiry",
            selected: true,
            value: 0,
          },
          {
            title: "Demo Enquiry",
            selected: false,
            value: 1,
          },
          {
            title: "Trial Enquiry",
            selected: false,
            value: 2,
          },
          {
            title: "Product Enquiry",
            selected: false,
            value: 3,
          },
          {
            title: "Referral Enquiry",
            selected: false,
            value: 4,
          },
        ]}
      />
      {/* <AddText
        top={10}
        title={"Status"}
        list={[
          {
            title: "open",
            selected: true,
            value: 0,
          },
          {
            title: "state",
            selected: false,
            value: 1,
          },
          {
            title: "checked",
            selected: false,
            value: 2,
          },
        ]}
      /> */}
      {/* <AddText
        top={10}
        title={"Product/Service"}
        list={[
          {
            title: "Product A",
            selected: true,
            value: 0,
          },
          {
            title: "state",
            selected: false,
            value: 1,
          },
          {
            title: "checked",
            selected: false,
            value: 2,
          },
        ]}
      /> */}
      <AddText
        top={10}
        title={"Lead source"}
        list={[
          {
            title: "Website",
            selected: true,
            value: 0,
          },
          {
            title: "state",
            selected: false,
            value: 1,
          },
          {
            title: "checked",
            selected: false,
            value: 2,
          },
        ]}
      />
      <AddText
        top={10}
        title={"Lead enquiry Type"}
        list={[
          {
            title: "Demo Requested",
            selected: true,
            value: 0,
          },
          {
            title: "state",
            selected: false,
            value: 1,
          },
          {
            title: "checked",
            selected: false,
            value: 2,
          },
        ]}
      />
      {/* <LastActivity /> */}
      <AddText
        top={10}
        title={"Lead enquiry Type"}
        list={[
          {
            title: "Demo Requested",
            selected: true,
            value: 0,
          },
          {
            title: "state",
            selected: false,
            value: 1,
          },
          {
            title: "checked",
            selected: false,
            value: 2,
          },
        ]}
      />
      <AddText
        top={10}
        title={"Win Probability"}
        list={[
          {
            title: "more than 80%",
            selected: true,
            value: 0,
          },
          {
            title: "state",
            selected: false,
            value: 1,
          },
          {
            title: "checked",
            selected: false,
            value: 2,
          },
        ]}
      />
      {/* <DualRange title={"Deal Size"} />
      <DualRange title={"Existing"} /> */}
    </div>
  );
};

export default Filter;
