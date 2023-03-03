import { colors } from "@/constants/colors";
import React from "react";
import { getBasicIcon } from "../AssetsHelper";

const ButtonDropDown = ({ width, text }: ButtonProps) => {

    const [clicked,setclicked] = React.useState(false);
  return (
    <div
      className={`w-[100px] h-[40px] bg-renal-blue rounded-2xl flex items-center justify-around cursor-pointer `}
    //   onMouseOver={()=>{
    //     setHover(true);
    //   }}
    //   onMouseOut={()=>{
    //     setHover(false);
    //   }}
      onClick={()=>{
        setclicked(true);
      }}
    >
      <p className="tracking-wider font-medium text-[16px] ml-[20px] ">{text}</p>
      <div className={` ml-[7px] mr-[14px] mt-[2px] w-[32px] p-[3px] rounded-md ${clicked&&"bg-[#263fca]"}`} >
      <img src={getBasicIcon("Arrow-Down 2")} className=" w-[24px]   svg-white rounded-xl  " alt="" />
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
}
