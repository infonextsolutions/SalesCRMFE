import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import React from "react";

const Cross = ({ cancel }: any) => {
  return (
    <div
      className="w-[30px] h-[30px] cursor-pointer rounded-xl absolute top-[30px] right-[30px] flex items-center justify-center bg-[#f8f8f8]"
      onClick={() => {
        cancel();
      }}
    >
      <Image
        className="w-[15px] h-[15px]"
        src={getBasicIcon("Cross")}
        width={15}
        height={15}
        alt=""
      />
    </div>
  );
};

const EmailPage = ({ cancel }: any) => {
  return (
    <div>
      <Cross cancel={cancel} />
    </div>
  );
};

export default EmailPage;
