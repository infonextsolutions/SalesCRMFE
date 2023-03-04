import React from "react";

const DashBox = ({ width }: any) => {
  return (
    <div
      className={`flex items-center justify-center h-[20px] shrink-0 `}
      style={{ width: width, flexShrink: "unset" }}
    >
      <input type="checkbox" className="checkbox" />
    </div>
  );
};

const DashItem = ({ width, text, left }: any) => {
  return (
    <div
      className={`flex items-center  h-[20px] shrink-0`}
      style={{ width: width, marginLeft: left }}
    >
      <p className="text-black text-[12px] font-medium tracking-wide ">
        {text}
      </p>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex" >

    <div className=" pl-[10px] h-[40px] flex items-center grow border-[#ccc] border-b-[1px] ">
      <DashBox width={30} />
      <DashItem width={150} left={10} text={"ABC Group"} />
      <DashItem width={150} left={10} text={"Shraddha .P"} />
      <DashItem width={150} left={10} text={"CLIENT POC"} />
      <DashItem width={150} left={10} text={"CLIENT POC"} />
      <DashItem width={150} left={10} text={"CLIENT POC"} />
      <DashItem width={150} left={10} text={"CLIENT POC"} />
      <DashItem width={150} left={10} text={"CLIENT POC"} />
      <DashItem width={150} left={10} text={"CLIENT POC"} />
      <DashItem width={150} left={10} text={"CLIENT POC"} />
      <DashItem width={150} left={10} text={"CLIENT POC"} />
      <DashItem width={150} left={10} text={"CLIENT POC"} />
      <DashItem width={150} left={10} text={"CLIENT POC"} />
      <DashItem width={150} left={10} text={"CLIENT POC"} />
      <DashItem width={150} left={10} text={"CLIENT POC"} />
      <DashItem width={150} left={10} text={"CLIENT POC"} />
      <DashItem width={150} left={10} text={"CLIENT POC"} />
      <DashItem width={150} left={10} text={"CLIENT POC"} />
      <DashItem width={150} left={10} text={"CLIENT POC"} />
      <DashItem width={150} left={10} text={"CLIENT POC"} />
    </div>
    </div>
  );
};

export default Dashboard;
