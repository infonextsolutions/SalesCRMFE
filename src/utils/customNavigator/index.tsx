import React, { useState } from "react";

const Navigator = ({ list, current, callback }: NavigatorProps) => {
  // console.log(list);
  const [activeTitle, setActiveTitle] = useState(0);
  const handleOnClick = (id: any) => {
    setActiveTitle(id);
    callback(id);
  };

  return (
    <>
      <div className="w-[100%] flex justify-between items-center text-black border-b-2 px-[30px] pt-[20px]">
        {list.map((item: any, i: any) => {
          return (
            <div
              className={`pb-[20px] px-[5px] cursor-pointer text-[14px] leading-[21px] font-medium text-[#595F69] text-bold border-b-[2px] ${
                item.id === activeTitle
                  ? "border-b-[#304FFD]"
                  : "border-b-[#fff]"
              }`}
              key={i}
              onClick={() => handleOnClick(item.id)}
            >
              <p
                className={`text-[13px] tracking-wide ${
                  item.id === activeTitle ? "text-[#304FFD]" : "text-[#000]"
                }`}
              >
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Navigator;

interface NavigatorProps {
  list: any[] | any;
  current: Number;
  callback: Function;
}
