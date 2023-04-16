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

const HeaderItem = ({ width, text, left, align, sub }: any) => {
  return (
    <div
      className={`flex justify-center flex-col items-center h-[20px] shrink-0`}
      style={{ width: width, marginLeft: left }}
    >
      <p
        className="text-[#8A9099] relative uppercase text-[12px] font-medium tracking-wider w-[100%]"
        style={{
          textAlign: align && "center",
          marginTop: sub && "-11px ",
        }}
      >
        <span className="relative">
          {text}
          {sub && (
            <div className="w-[100%] whitespace-nowrap text-[9px] absolute top-[16px] text-center">
              {"("}
              {sub}
              {")"}
            </div>
          )}
        </span>
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
            // selectAll();
          }}
        />
        <HeaderItem width={120} left={20} text={"Team member"} />
        <HeaderItem width={150} left={0} text={"open deals"} sub={"Volume"} />
        <HeaderItem width={130} left={20} text={"close deals"} sub={"volume"} />
        <HeaderItem
          width={110}
          left={10}
          text={"open deals"}
          sub={"value in rupees"}
        />
        <HeaderItem
          width={150}
          left={20}
          text={"close deals"}
          sub={"value in rupees"}
        />
        <HeaderItem width={130} left={20} text={"Deals won"} sub={"Volume"} />
        <HeaderItem width={120} text={"deals lost"} sub={"Volume"} />
        <HeaderItem width={150} left={20} text={"Deals dead"} sub={"Volume"} />
        <HeaderItem width={120} left={10} text={"stage-enquiry"} />
        <HeaderItem width={120} left={10} text={"Last activity"} />
        <HeaderItem width={120} left={20} text={"last lead close"} />
        <HeaderItem width={150} left={10} text={"calls rated"} />
        <HeaderItem width={150} left={10} text={"total feedbacks"} />
        <HeaderItem width={130} left={20} text={"last feedback"} />
        <HeaderItem
          width={150}
          left={10}
          text={"warnings"}
          sub={"in open leads"}
        />
      </div>
    </div>
  );
};

export default Header;
