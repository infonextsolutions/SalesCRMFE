import Image from "next/image";
import React from "react";
import { getBasicIcon } from "../AssetsHelper";

const DropDown = ({ list, direction, value, onClick }: any) => {
  const [mouseOver, setMouseOver] = React.useState(false);
  return (
    <div
      className={`px-[8px] pt-[10px] pb-[3px] flex flex-col min-h-[30px] rounded-[10px] bg-white absolute drop-shadow-2xl z-10 right-0 ${
        direction ? "bottom-[50px]" : "top-[50px]"
      }
      max-h-[200px]
      overflow-y-auto
      hide-scrollbar
      `}
    >
      {list.map((item: any, i: any) => {
        return (
          <div
            className={`mb-[4px] ${
              item.Icon ? "pr-[15px] pl-[5px]" : "justify-center"
            } box-content flex items-center h-[40px] rounded-[10px] hover:bg-[#e8e9eb] `}
            onClick={() => {
              onClick(value, i);
            }}
            onMouseOver={() => {
              setMouseOver(true);
            }}
            onMouseLeave={() => {
              setMouseOver(false);
            }}
            key={i}
          >
            {item.Icon && (
              <Image
                src={getBasicIcon(item.Icon)}
                alt=""
                className={`mt-[2px] h-[17px] ${
                  mouseOver ? "svg-selected" : "svg-not-selected"
                }`}
                width={17}
                height={17}
                style={{
                  objectFit: "contain",
                }}
              />
            )}
            <p
              className={` text-[13px] whitespace-nowrap tracking-wider pl-[10px] pr-[10px] font-medium ${
                mouseOver ? "text-black" : "text-[#595f69]"
              }`}
            >
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default DropDown;
