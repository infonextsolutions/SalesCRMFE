import React from "react";

const HeaderCheckBox = ({ width }: any) => {
  return (
    <div
      className={`flex items-center justify-center h-[20px] shrink-0 `}
      style={{ width: width, flexShrink: "unset" }}
    >
      <input type="checkbox" className="checkbox" />
    </div>
  );
};

const HeaderItem = ({ width, text, left }: any) => {
  return (
    <div
      className={`flex items-center  h-[20px] shrink-0`}
      style={{ width: width, marginLeft: left }}
    >
      <p className="text-[#8A9099] text-[12px] font-medium tracking-wide ">
        {text}
      </p>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex" >

    <div className=" pl-[10px] h-[40px] flex items-center grow border-[#ccc] border-b-[1px]  ">
      <HeaderCheckBox width={30} />
      <HeaderItem width={150} left={10} text={"COMPANY NAME"} />
      <HeaderItem width={150} left={10} text={"CLIENT POC"} />
      <HeaderItem width={150} left={10} text={"Quick Actions"} />
      <HeaderItem width={150} left={10} text={"CLIENT POC"} />
      <HeaderItem width={150} left={10} text={"CLIENT POC"} />
      <HeaderItem width={150} left={10} text={"CLIENT POC"} />
      <HeaderItem width={150} left={10} text={"CLIENT POC"} />
      <HeaderItem width={150} left={10} text={"CLIENT POC"} />
      <HeaderItem width={150} left={10} text={"CLIENT POC"} />
      <HeaderItem width={150} left={10} text={"CLIENT POC"} />
      <HeaderItem width={150} left={10} text={"CLIENT POC"} />
      <HeaderItem width={150} left={10} text={"CLIENT POC"} />
    </div>
    </div>
  );
};

export default Header;
