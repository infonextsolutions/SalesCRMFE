import React, { useState } from "react";

const Navigator = ({ list, current, callback }: NavigatorProps) => {
  // console.log(list);
  const [activeTitle, setActiveTitle] = useState(current);
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
              className={` cursor-pointer text-[14px] leading-[21px] font-medium text-[#595F69] text-bold ${
                item.id === activeTitle
                  ? "focus:outline-none text-white bg-[#fe5043ad] hover:bg-[#fe5043ad] font-medium rounded-lg text-md px-5 py-2.5 mt-2 mb-2"
                  : "text-black font-medium text-md hover:bg-[#fe5043ad] hover:text-w hover:rounded-lg hover:py-2.5 hover:px-5 hover:mt-2 hover:mb-2"
              }`}
              key={i}
              onClick={() => handleOnClick(item.id)}
            >
              <p
                className={`text-[13px] tracking-wide ${
                  item.id === activeTitle ? "text-white" : "text-[#000]"
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
