import React from "react";

const SimpleButton = ({
  theme,
  text,
  left,
  right,
  width,
  height,
  click,
  type,
  disabled,
}: ButtonProps) => {
  const Theme =
    theme === 1
      ? "bg-bg-red hover:bg-[#ff7d6d]"
      : theme === 2
        ? "bg-[#f5f5f5] hover:bg-gray-200"
        : theme === 3
          ? "bg-white"
          : "bg-[#e8ebfd]";
  return (
    <div
      className={`${Theme}  rounded-2xl ml-[${left ? left : 0}px] mr-[${right ? right : 0
        }px] flex items-center justify-center cursor-pointer ${disabled ? "opacity-50" : "opacity-100"}`}
      onClick={!disabled ? click : () => { }}
      style={{
        width: width ? width : 140,
        height: height ? height : 40,
      }}
    >
      {text && (
        <p
          className={`${theme === 1
            ? "text-[#fff] font-medium text-[15px] tracking-wide"
            : "text-[#3F434A] font-medium text-[15px] tracking-wide"
            }`}
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default SimpleButton;

interface ButtonProps {
  width?: any;
  text?: String;
  id?: Number;
  theme: Number;
  height?: any;
  left?: Number;
  right?: Number;
  border?: Boolean;
  type?: string;
  disabled?: boolean;
  click?: () => void;
}
