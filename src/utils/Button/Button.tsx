import { colors } from "@/constants/colors";
import React from "react";
import { getBasicIcon } from "../AssetsHelper";

const ButtonDropDown = ({ width, text,pl, icon,border, light,height }: ButtonProps) => {
  const [clicked, setclicked] = React.useState(false);
  const [mouseOver,setMouseOver] = React.useState(false);

  React.useEffect(()=>{
    const onPointerDown=()=>{
      if(!mouseOver){
        setclicked(false);
      }
    }
    document.addEventListener("pointerdown",onPointerDown,false);
    return()=>{
      document.removeEventListener("pointerdown",onPointerDown,false);
    }
  })

  return (
    <div
      className={`${(
        icon ? "pl-[32px]" : ""
      )}   h-[${height?height:40}px] ${border?"border-[1px] border-[#ccc]":""} ${light?"bg-white":"bg-renal-blue"} rounded-xl flex items-center justify-center cursor-pointer ml-[30px] pr-[32px] relative p-[10px]`}
        onMouseOver={()=>{
          setMouseOver(true);
        }}
        onMouseOut={()=>{
          setMouseOver(false);
        }}

      onClick={() => {
        if(mouseOver)
        setclicked(true);
      }}
    >
      {icon && (
        <div className="absolute left-3  w-[28px]">
          <div className={`w-[100%] p-[3px] rounded-md }`}>
            <img
              src={getBasicIcon(icon)}
              className={`w-[24px] ${light?"svg-dark":"svg-white"}`}
              alt=""
            />
          </div>
        </div>
      )}
      <p className={`tracking-wider font-medium text-[14px] pl-[20px] pr-[10px] ${light?"text-[#3F434A]":""} `}>
        {text}
      </p>
      <div className="absolute right-2  w-[24px]">
        <div
          className={`w-[100%] p-[3px] rounded-md ${clicked && (light?"bg-[#eeeeee]":"bg-[#263fca]")}`}
        >
          <img
            src={getBasicIcon("Arrow-Down 2")}
            className={`w-[24px] ${light?"svg-dark":"svg-white"}`}
            alt=""
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
  height?:Number;
  border?:Boolean;
  pl?:Number
}