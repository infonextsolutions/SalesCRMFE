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
  dark,
  height,
  tight,
  list,
  dropdown,
  click,
  onClick1,
  value,
  width,
  dropDirection,
}: ButtonProps) => {
  const [clicked, setclicked] = React.useState(false);
  const [mouseOver, setMouseOver] = React.useState(false);
  const [curr, setCurr] = React.useState<Number | undefined>(value);
  const onPointerDown = () => {
    if (!mouseOver) {
      setclicked(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener("pointerdown", onPointerDown, false);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, false);
    };
  });

  const onClick = (prev: Number, current: Number) => {
    setTimeout(() => {
      setclicked(false);
    }, 100);
    document.removeEventListener("pointerdown", onPointerDown, false);
    if (click) {
      setTimeout(() => {
        click(prev, current);
      }, 200);
    }
    setCurr(current);
  };

  return (
    <div
      data-dropdown-toggle="dropdown"
      className={`${icon ? "pl-[32px]" : ""} ${
        border ? "border-[1px] border-[#ccc]" : ""
      } ${
        light
          ? "bg-white hover:bg-gray-200"
          : dark
          ? "bg-[#757372] hover:bg-[#999999]"
          : "bg-bg-red hover:bg-[#ff7d6d]"
      } rounded-xl flex items-center justify-center cursor-pointer ml-[30px] pr-[32px]  p-[10px] relative`}
      onMouseOver={() => {
        setMouseOver(true);
      }}
      onMouseOut={() => {
        setMouseOver(false);
      }}
      onClick={() => {
        if (onClick1) {
          onClick1();
        }
        if (mouseOver) setclicked(true);
      }}
      style={{
        height: height ? `${height}px` : "40px",
        width: width ? `${width}px` : "initial",
      }}
    >
      {dropdown ? (
        list.length !== 0 ? (
          clicked && (
            <DropDown
              value={curr}
              onClick={onClick}
              close={() => {
                setclicked(false);
              }}
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
      {text.length > 0 && (
        <p
          className={`whitespace-nowrap tracking-wider font-medium text-[14px] ${
            tight ? "pl-[4px] pr-[4px]" : "pl-[20px] pr-[10px]"
          } ${light ? "text-[#3F434A]" : "text-[#ffffff]"} `}
        >
          {text}
        </p>
      )}
      {list?.length !== 0 && (
        <div
          className={`absolute ${
            tight ? "right-3 w-[16px]" : "right-2 w-[24px]"
          } `}
        >
          <div
            className={`w-[100%] ${tight ? "p-[1px]" : "p-[3px]"} rounded-md ${
              clicked && (light ? "bg-[#eeeeee]" : "")
            } `}
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
      )}
    </div>
  );
};

export default ButtonDropDown;

export interface ButtonProps {
  icon?: String;
  dropdown?: Boolean | {};
  width?: Number;
  text: String;
  id: Number;
  light?: Boolean;
  dark?: Boolean;
  height?: Number;
  border?: Boolean;
  onClick1?: any;
  pl?: Number;
  tight?: Boolean;
  list?: [] | any;
  dropDirection?: Boolean;
  click?: (prev: Number, current: Number) => void | undefined;
  value?: Number;
}
