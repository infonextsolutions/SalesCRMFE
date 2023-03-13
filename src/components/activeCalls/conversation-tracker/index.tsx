import React from "react";

const Tracker = ({ color, title, list }: any) => {
  return (
    <div className="w-full px-[38px] my-[24px]">
      <h1
        className={` text-[14px] font-medium`}
        style={{
          color: color,
        }}
      >
        {title}
      </h1>
      <div className="w-[100%] bg-[#efefef] h-[11px] mt-[5px] relative ">
        {list.map((item: any,i:any) => {
          return (
            <div
              className="h-[11px] absolute"
              key={i}
              style={{
                width: item.duration,
                backgroundColor: color,
                top: 0,
                left: item.at,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Tracker;
