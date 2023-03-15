import { colors } from "@/constants/colors";
import Image from "next/image";
import React from "react";
import { getBasicIcon } from "../AssetsHelper";
import DropDown from "./DropDown";

const ButtonDropDown = ({
  text,
  icon,
  border,
  light,
  height,
  tight,
  list,
  dropdown,
  click,
  value,
  dropDirection,
}: ButtonProps) => {
  const [clicked, setclicked] = React.useState(false);
  const [mouseOver, setMouseOver] = React.useState(false);
  const [curr, setCurr] = React.useState<Number | undefined>(value);
  React.useEffect(() => {
    const onPointerDown = () => {
      if (!mouseOver) {
        setclicked(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown, false);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, false);
    };
  });

  const onClick = (prev: Number, current: Number) => {
    if (click) {
      click(prev, current);
    }
    setCurr(current);
  };

  return (
    <div
      data-dropdown-toggle="dropdown"
      className={`${icon ? "pl-[32px]" : ""} ${
        border ? "border-[1px] border-[#ccc]" : ""
      } ${
        light ? "bg-white" : "bg-renal-blue"
      } rounded-xl flex items-center justify-center cursor-pointer ml-[30px] pr-[32px] relative p-[10px] relative`}
      onMouseOver={() => {
        setMouseOver(true);
      }}
      onMouseOut={() => {
        setMouseOver(false);
      }}
      onClick={() => {
        if (mouseOver) setclicked(true);
      }}
      style={{
        height: height ? `${height}px` : "40px",
      }}
    >
      {dropdown ? (
        list.length !== 0 ? (
          clicked && (
            <DropDown
              value={curr}
              onClick={onClick}
              direction={dropDirection}
              list={list}
            />
          )
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
      {icon && (
        <div className="absolute left-3  w-[28px]">
          <div className={`w-[100%] p-[3px] rounded-md }`}>
            <Image
              src={getBasicIcon(icon)}
              className={`w-[24px] ${light ? "svg-dark" : "svg-white"}`}
              alt=""
              width={24}
              height={24}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      )}
      <p
        className={`whitespace-nowrap tracking-wider font-medium text-[14px] ${
          tight ? "pl-[4px] pr-[4px]" : "pl-[20px] pr-[10px]"
        } ${light ? "text-[#3F434A]" : "text-[#fff ]"} `}
      >
        {text}
      </p>
      <div
        className={`absolute ${
          tight ? "right-3 w-[16px]" : "right-2 w-[24px]"
        } `}
      >
        <div
          className={`w-[100%] ${tight ? "p-[1px]" : "p-[3px]"} rounded-md ${
            clicked && (light ? "bg-[#eeeeee]" : "bg-[#263fca]")
          }`}
        >
          <Image
            src={getBasicIcon("Arrow-Down 2")}
            className={`w-[24px] ${light ? "svg-dark" : "svg-white"}`}
            alt=""
            width={24}
            height={24}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ButtonDropDown;

export interface ButtonProps {
  icon?: String;
  dropdown: Boolean | {};
  width?: Number;
  text: String;
  id: Number;
  light: Boolean;
  height?: Number;
  border?: Boolean;
  pl?: Number;
  tight?: Boolean;
  list?: [] | any;
  dropDirection?: Boolean;
  click?: (prev: Number, current: Number) => void | undefined;
  value?: Number;
}
