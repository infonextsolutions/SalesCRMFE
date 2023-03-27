import React from "react";

const SimpleButton = ({ theme, text, left, right, click }: ButtonProps) => {
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
      className={`h-[40px] w-[110px] ${Theme} rounded-2xl ml-[${
        left ? left : 0
      }px] mr-[${
        right ? right : 0
      }px] flex items-center justify-center cursor-pointer`}
      onClick={click}
    >
      {text && (
        <p className={`${theme === 1 ? "" : "text-[#3F434A] font-medium text-[15px] tracking-wide"}`}>{text}</p>
      )}
    </div>
  );
};

export default SimpleButton;

interface ButtonProps {
  width?: Number;
  text?: String;
  id?: Number;
  theme: Number;
  height?: Number;
  left?: Number;
  right?: Number;
  border?: Boolean;
  click?: () => void;
}
