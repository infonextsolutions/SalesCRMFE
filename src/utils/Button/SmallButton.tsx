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
  click
}: ButtonProps) => {
  const Theme =
    theme === 1
      ? "bg-renal-blue"
      : theme === 2
      ? "bg-[#f5f5f5]"
      : theme === 3
      ? "bg-white"
      : "bg-[#e8ebfd]";
  return (
    <div
      className={`h-[40px] w-[40px] ${Theme} rounded-xl ml-[${
        left ? left : 0
      }px] mr-[${right ? right : 0}px] flex items-center justify-center cursor-pointer`}
      onClick={click}
    >
      {icon && <img src={getBasicIcon(icon)} alt="" />}
      {text && <p className={`${theme===1?"":"text-[#3F434A]"}`} >{text}</p>}
      {leftDblIcon && <LeftDoubleArrow />}
      {leftIcon && <LeftArrow />}
      {RightDblIcon && <RightArrow renal={true} />}
      {RightIcon && <RightDoubleArrow renal={true} />}
    </div>
  );
};

export default SmallButton;

interface ButtonProps {
  icon?: String;
  width?: Number;
  text?: String;
  id?: Number;
  theme: Number;
  height?: Number;
  left?: Number;
  right?: Number;
  border?: Boolean;
  leftIcon?: Boolean;
  leftDblIcon?: Boolean;
  RightIcon?: Boolean;
  RightDblIcon?: Boolean;
  click?:()=>{}
}
