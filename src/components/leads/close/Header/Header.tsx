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

const HeaderItem = ({ width, text, left, align }: any) => {
  return (
    <div
      className={`flex items-center  h-[20px] shrink-0`}
      style={{ width: width, marginLeft: left }}
    >
      <p
        className="text-[#8A9099] uppercase text-[12px] font-medium tracking-wider w-[100%]"
        style={{
          textAlign: align && "center",
        }}
      >
        {text}
      </p>
    </div>
  );
};

const Header = ({ selectAll }: any) => {
  return (
    <div className="flex">
      <div className=" pl-[10px] h-[40px] flex items-center grow border-[#ccc] border-b-[1px]  ">
        <HeaderCheckBox
          width={30}
          click={() => {
            selectAll();
          }}
        />
        <HeaderItem width={120} left={20} text={"LEAD ID"} />
        <HeaderItem width={150} left={0} text={"Custom name"} />
        <HeaderItem width={130} left={20} text={"COMPANY NAME"} />
        <HeaderItem width={110} left={10} text={"CLIENT POC"} />
        <HeaderItem width={150} left={20} text={"EMAIL"} />
        <HeaderItem width={130} left={20} text={"PHONE"} />
        <HeaderItem width={120} text={"Quick Actions"} />
        <HeaderItem width={150} left={20} text={"more contacts"} />
        <HeaderItem width={120} left={10} text={"lead stage"} />
        <HeaderItem width={120} left={10} text={"lead status"} />
        <HeaderItem width={120} left={20} text={"owner"} />
        <HeaderItem width={150} left={10} text={"lead inquiry"} />
        <HeaderItem width={150} left={10} text={"product/service"} />
        <HeaderItem width={180} left={0} text={"activity history"} align={true} />
        <HeaderItem width={130} left={20} text={"last activity"} />
        <HeaderItem width={150} left={10} text={"next action/date"} />
        <HeaderItem width={150} left={10} text={"win probability"} />
        <HeaderItem width={140} left={20} text={"deal size"} />
        <HeaderItem width={150} left={10} text={"existing budget"} />
        <HeaderItem width={150} left={10} text={"lead source"} />
        {/* <HeaderItem width={150} left={10} text={"close date"} /> */}
        <HeaderItem width={150} left={20} text={"notes"} />
        <HeaderItem width={150} left={10} text={"close date"} />
      </div>
    </div>
  );
};

export default Header;
