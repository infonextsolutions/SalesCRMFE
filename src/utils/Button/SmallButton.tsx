import Image from "next/image";
import React from "react";
import {
  getBasicIcon,
  LeftArrow,
  LeftDoubleArrow,
  RightArrow,
  RightDoubleArrow,
} from "../AssetsHelper";

const SmallButton = ({
  theme,
  icon,
  text,
  left,
  right,
  leftDblIcon,
  leftIcon,
  RightDblIcon,
  RightIcon,
  click,
}: any) => {
  const Theme =
    theme === 1
      ? "bg-bg-red"
      : theme === 2
      ? "bg-[#f5f5f5]"
      : theme === 3
      ? "bg-white"
      : "bg-[#e8ebfd]";
  return (
    <div
      className={`h-[40px] w-[40px] ${Theme} rounded-xl ml-[${
        left ? left : 0
      }px] mr-[${
        right ? right : 0
      }px] flex items-center justify-center cursor-pointer`}
      onClick={click}
    >
      {icon && (
        <Image
          src={getBasicIcon(icon)}
          alt=""
          width={18}
          height={16}
          style={{
            objectFit: "contain",
          }}
        />
      )}
      {text && (
        <p className={`${theme === 1 ? "" : "text-[#3F434A]"}`}>{text}</p>
      )}
      {leftDblIcon && <LeftDoubleArrow />}
      {leftIcon && <LeftArrow />}
      {RightDblIcon && <RightArrow renal={true} />}
      {RightIcon && <RightDoubleArrow renal={true} />}
    </div>
  );
};

export default SmallButton;