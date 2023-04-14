import { getBasicIcon } from "@/utils/AssetsHelper";
import React, { useState } from "react";

const AddText = ({ top, title, width, list }: any) => {
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
          id="countries"
          className="outline-none cursor-pointer capitalize text-gray-900 py-[7px]   text-sm tracking-wide text-[#3F434A] font-medium  block w-full bg-white"
        >
          {list.map((item: any, i: any) => {
            return (
              <option value={item.value} selected={item.selected}>
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
        <div className="w-[45%] relative py-[7px] px-[10px] border-[1px] flex items-center justify-center  rounded-xl border-[#ccc]">
          <img src={getBasicIcon("Calendar")} className="mr-[10px]" alt="" />
          <input
            type="date"
            className="bg-[#fff] outline-none font-medium text-[#000] cursor-pointer"
            name=""
            id=""
          />
          <img
            src={getBasicIcon("Arrow-Down 2")}
            className="absolute right-[10px] pointer-events-none cursor-pointer w-[15px] top-[13px]"
            alt=""
            style={{
              userSelect: "none",
            }}
          />
        </div>
        <div className="w-[45%] relative py-[7px] font-medium px-[10px] border-[1px] cursor-pointer flex items-center justify-center  rounded-xl border-[#ccc]">
          <img src={getBasicIcon("Calendar")} className="mr-[10px]" alt="" />
          <input
            type="date"
            className="bg-[#fff] outline-none font-medium text-[#000] cursor-pointer"
            name=""
            id=""
          />
          <img
            src={getBasicIcon("Arrow-Down 2")}
            className="absolute right-[10px] pointer-events-none cursor-pointer w-[15px] top-[13px]"
            alt=""
            style={{
              userSelect: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const Filter = ({ cancel }: any) => {
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

  return (
    <div
      className="w-[400px] rounded-lg shadow-2xl min-h-[400px] bg-[#fff] py-[10px] px-[20px] absolute top-[60px] right-[0]"
      style={{
        zIndex: 10000,
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
      />
      <AddText
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
      />
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
        title={"Lead inquiry Type"}
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
      <LastActivity />
      <AddText
        top={10}
        title={"Lead inquiry Type"}
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
      <p>Trackball</p>
      <p>Trackball</p>
    </div>
  );
};

export default Filter;
