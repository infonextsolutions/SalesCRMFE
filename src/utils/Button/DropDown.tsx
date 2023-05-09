import Image from "next/image";
import React from "react";
import { getBasicIcon } from "../AssetsHelper";

const DropItem = ({ item, value, onClick, i }: any) => {
  const [mouseOver, setMouseOver] = React.useState(false);
  const Wrapper = item?.wrapper;
  return (
    <div
      className={`mb-[4px] ${
        item.Icon ? "pr-[15px] pl-[5px]" : "justify-center"
      } box-content flex items-center h-[35px] rounded-[10px] hover:bg-[#e8e9eb] `}
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
      {Wrapper ? (
        <div
          className={` text-[13px] whitespace-nowrap tracking-wider pl-[10px] pr-[10px] font-medium ${
            mouseOver ? "text-black" : "text-[#595f69]"
          }`}
        >
          {item.wrapper}
        </div>
      ) : (
        <p
          className={` text-[13px] whitespace-nowrap tracking-wider pl-[10px] pr-[10px] font-medium ${
            mouseOver ? "text-black" : "text-[#595f69]"
          }`}
        >
          {item.title}
        </p>
      )}
    </div>
  );
};

const DropDown = ({ list, direction, value, onClick, close }: any) => {
  return (
    <div
      className={`px-[8px] pt-[8px] pb-[3px] flex flex-col min-h-[30px] rounded-[10px] bg-white absolute drop-shadow-2xl z-10 right-0 ${
        direction ? "bottom-[50px]" : "top-[50px]"
      }
      max-h-[200px]
      overflow-y-auto
      hide-scrollbar
      `}
      style={{
        zIndex: 100000000000,
      }}
    >
      {list.map((item: any, i: any) => {
        return (
          <DropItem
            item={item}
            value={value}
            onClick={onClick}
            close={close}
            i={i}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default DropDown;
