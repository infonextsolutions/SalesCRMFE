import React from "react";
import { useAppDispatch } from "@/store/store";
import { useRouter } from "next/router";

const SideItem = ({ img, title, open, id,list,route }: any) => {
  const {pathname,push} = useRouter();
  let currentRoute:any;
  if(list.length!==0){
    for(let i =0;i<list.length;i++){
      const curr = `/${route}/${list[i].route}`
      if(curr===pathname){
        currentRoute = curr;
        break;
      }
    }
  }else{
    currentRoute = `/${route}`;
  }
  const check = pathname===currentRoute;

  return (
    <div
      className="cursor-pointer flex items-center mt-[12px] h-[40px] relative "
      onClick={() => {
        push(currentRoute);
      }}
    >
      {check && (
        <>
          <div
            className={`absolute left-[7.5px] bg-[#e8e9eb] duration-300 z-10 ease-out  ${
              !open ? "w-[40px] h-[40px] rounded-xl" : "w-[100%] h-[100%]"
            }`}
          />
          <div
            className={` bg-[#e8e9eb] h-[40px] absolute duration-100 z-10 ease-out
                ${
                  open
                    ? "left-0  w-[7.5px] border-l-[4px] border-[#304ffd]"
                    : " w-[0]"
                }
              `}
          />
        </>
      )}
      <div className={`flex items-center z-40 `}>
        <img
          src={img}
          alt=""
          className={`w-[30px] p-[6px] ml-[12px] mr-[12px] ${
            check ? "svg-selected" : "svg-not-selected"
          }`}
        />
        <p className="tracking-wider text-[#3F434A] ml-[10px] font-medium text-[14px] poppins">
          {title}
        </p>
      </div>
    </div>
  );
};

export default SideItem;