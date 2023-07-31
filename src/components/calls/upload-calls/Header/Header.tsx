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
  )
};

const HeaderItem = ({ width, text, left, align, bold, color }: any) => {
  return (
    <div
      className={`flex items-center  h-[20px] shrink-0`}
      style={{ width: width, marginLeft: left }}
    >
      <p
        className="text-[#8A9099] uppercase text-[12px] font-medium tracking-wider w-[100%]"
        style={{
          textAlign: align && "center",
          fontWeight: bold ? bold : 500,
          color: color ? color : "#8A9099",
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
        <HeaderCheckBox width={30} click={() => {
          selectAll();
        }} />
        <HeaderItem width={200} left={70} text={"RECORD ID"} />
        <HeaderItem width={130} left={20} text={"RECORDING title"} />
        <HeaderItem width={200} left={10} text={"CALL DURATION"} />
        <HeaderItem width={110} left={-55} text={"UPLOAD DATE"} />
        <HeaderItem width={200} left={20} text={"UPLOADED BY"} />
      </div>
    </div>
  );
};

export default Header;
