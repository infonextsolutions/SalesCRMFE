import React from "react";

const HeaderCheckBox = ({ width, click }: any) => {
  return (
    <div
      className={`flex items-center justify-center h-[20px] shrink-0 `}
      style={{ width: width, flexShrink: "unset" }}
    >
      <input
        onChange={() => {
          click();
        }}
        type="checkbox"
        className="checkbox"
      />
    </div>
  );
};

const HeaderItem = ({ width, text, left, align, bold, color }: any) => {
  return (
    <div
      className={`flex items-center  h-[20px] shrink-0`}
      style={{ width: width, marginLeft: left }}
    >
      <p
        className="uppercase text-[12px] font-medium tracking-wider w-[100%]"
        style={{
          textAlign: align && "center",
          fontWeight: bold ? bold : 700,
          color: color ? color : "black",
        }}
      >
        {text}
      </p>
    </div>
  );
};

const Header = ({ selectAll, win, deal, budget }: any) => {
  return (
    <div className="flex">
      <div className=" pl-[10px] h-[40px] flex items-center grow border-[#ccc] border-b-[1px]  ">
        <HeaderCheckBox
          width={30}
          click={() => {
            selectAll();
          }}
        />

        <HeaderItem width={240} left={70} text={"Meeting ID"} />
        <HeaderItem width={150} left={10} text={"Meeting title"} />
        <HeaderItem width={150} left={10} text={"lead id"} />
        <HeaderItem width={150} left={10} text={"lead title"} />
        <HeaderItem width={150} left={10} text={"Company Name"} />
        <HeaderItem width={200} left={10} text={"Product/Services"} />

        <HeaderItem width={200} left={20} text={"participants"} />
        <HeaderItem width={150} left={20} text={"Meeting owner"} />
        <HeaderItem width={150} left={20} text={"Meeting type"} />

        <HeaderItem width={150} left={20} text={"Meeting date-time"} />
        <HeaderItem width={150} left={20} text={"Duration"} />
        <HeaderItem width={150} left={20} text={"location"} />
        <HeaderItem width={150} left={20} text={"join info"} />
        {/* <HeaderItem width={120} left={10} text={"call duration"} /> */}
      </div>
    </div>
  );
};

export default Header;
