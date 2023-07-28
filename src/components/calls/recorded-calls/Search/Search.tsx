import { getBasicIcon } from "@/utils/AssetsHelper";
import Button from "@/utils/Button/Button";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Filter from "@/components/leads/genUtils/Filter";

const Search = ({ change }: any) => {
  const [show, setShow] = useState(false);
  const ref: any = useRef();
  const [bounding, setBounding] = useState({ left: 0, top: 0 });
  return (
    <>
      <div
        className="w-[60%] h-[40px] relative border-[#ccc] border-[1px] rounded-[12px] overflow-hidden  flex items-center"
        ref={ref}
      >
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
            placeholder="Search Recorded Call..."
          />
        </div>
        {/* <div
          className="h-[100%] w-[40px] px-[12px] flex items-center justify-center cursor-pointer "
          onClick={() => {
            const box = ref.current.getBoundingClientRect();
            setBounding({ left: box.width + 20, top: 10 });
            setShow(true);
          }}
        >
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
        </div> */}
      </div>
       {show && (
        <Filter
          top={bounding.top}
          left={bounding.left}
          cancel={() => {
            setShow(false);
          }}
        />
      )}
    </>
  );
};

export default Search;
