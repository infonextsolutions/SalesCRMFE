import React, { useState } from "react";

const Navigator = ({
  list,
  current,
  callback,
  width,
  justifyAround,
  borderBottom,
}: any) => {
  const [activeTitle, setActiveTitle] = useState(current);
  const handleOnClick = (id: any) => {
    setActiveTitle(id);
    callback(id);
  };

  return (
    <>
      <div className={`${borderBottom == false ? "" : "border-b-2"}`}>
        <div
          className={`${width ? "w-[80%]" : "w-[100%]"}  flex ${
            justifyAround ? "justify-around" : "justify-between"
          } items-center text-black  px-[30px] pt-[20px]`}
        >
          {list?.map((item: any, i: any) => {
            return (
              <div
                className={` cursor-pointer text-[14px] leading-[21px] font-medium text-[#595F69] text-bold ${
                  item?.id === activeTitle
                    ? "focus:outline-none text-white bg-[#fe5043ad] hover:bg-[#fe5043ad] font-medium rounded-lg text-md px-6 py-2 mt-2 mb-2"
                    : "text-black font-medium text-md hover:bg-[#fe5043ad] hover:text-w hover:rounded-lg hover:py-2.5 hover:px-5 hover:mt-2 hover:mb-2"
                }`}
                key={i}
                onClick={() => handleOnClick(item?.id)}
              >
                <p
                  className={`text-[13px] tracking-wide ${
                    item?.id === activeTitle ? "text-[#fff]" : "text-[#000]"
                  }`}
                >
                  {item?.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navigator;
