import { getBasicIcon } from "@/utils/AssetsHelper";
import Button from "@/utils/Button/Button";
import Image from "next/image";
import React, { useState } from "react";
import Filter from "./Filter";

const Search = ({ change,view }: any) => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-[60%] h-[40px] relative border-[#ccc] border-[1px] rounded-[12px]  flex items-center">
      <div className="h-[100%] w-[40px] px-[12px] flex items-center justify-center cursor-pointer ">
        <Image
          className="w-[100%]"
          src={getBasicIcon("Search")}
          alt=""
          // fill={true}
          width={30}
          height={30}
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="grow h-[32px] ">
        <input
          type="text"
          onChange={change}
          className="w-[100%] h-[32px] bg-white outline-0 text-black "
          placeholder="Search contact..."
        />
      </div>
      <div className="h-[100%] w-[40px] px-[12px] flex items-center justify-center cursor-pointer " onClick={()=>{
        setShow(true);
      }}>
        <Image
          className="w-[100%]"
          src={getBasicIcon("Filter")}
          alt=""
          // fill={true}
          width={30}
          height={30}
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      {show && (
        <Filter
          cancel={() => {
            setShow(false);
          }}
        />
      )}
    </div>
  );
};

export default Search;
