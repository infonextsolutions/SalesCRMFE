import { getBasicIcon } from "@/utils/AssetsHelper";
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

const DashItem = ({ width, text, left,align ,textLeft}: any) => {
  return (
    <div
      className={`flex items-center  h-[20px] shrink-0`}
      style={{ width: width, marginLeft: left }}
    >
      <p className="text-[#8A9099] text-[13px]  tracking-wide "
      style={{
        textAlign: align && "center",
        marginLeft:textLeft&&`${textLeft}px`
      }}
      >
        {text}
      </p>
    </div>
  );
};

const DashItemMultiple = ({ width, upperText,bottomText, left,bold,align}: any) => {
  return (
    <div
      className={`flex justify-between flex-col h-[34px] shrink-0`}
      style={{ width: width, marginLeft: left }}
    >
      <p className={`text-[12px] tracking-wide font-medium ${bold?"text-[#3F434A]":"text-[#8A9099]"}`}
        style={{
          textAlign: align && "center",
        }}
      >
        {upperText}
      </p>
      <p className="text-[#8A9099] text-[12px]  tracking-wide "
        style={{
          textAlign: align && "center",
        }}
      >
        {bottomText}
      </p>
    </div>
  );
};

const QuickActions=({width,left}:any)=>{

  return(
    <div
      className={`flex  h-[18px] item-center shrink-0`}
      style={{ width: width, marginLeft: left }}
    >
      <img src={getBasicIcon("Phone")} alt="" className="mr-[4px] cursor-pointer"   />
      <img src={getBasicIcon("Mail")} alt="" className="mr-[4px] cursor-pointer" />
      <img src={getBasicIcon("Calendar")} alt="" className="mr-[4px] cursor-pointer" />
      <img src={getBasicIcon("Tasks")} alt="" className="mr-[4px] cursor-pointer" />
      <img src={getBasicIcon("Chat")} alt="" className="mr-[4px] cursor-pointer" />
    </div>
  )
}

const Dashboard = () => {
  return (
    <div className="flex" >

    <div className=" pl-[10px] h-[50px] flex items-center grow border-[#ccc] border-b-[1px] ">
      <DashBox width={30} />
      <DashItemMultiple width={130} left={20} upperText={"ABC Group"} bottomText={"Noida, UP"} bold={true} />
      <DashItem width={110} left={10} text={"Shraddha .P"} />
      <QuickActions width={120} />
      <DashItem width={150} left={20} text={"shraddha@example.com"} />
      <DashItem width={150} left={30} text={"+91 78XXXXXXXX"} />
      <DashItem width={120} left={10} textLeft={10} text={"New"} />
      <DashItem width={120} left={10} text={"Contracted"} textLeft={5} />
      <DashItem width={150} left={10} text={"Lead - XYZ info"} />
      <DashItem width={150} left={10} textLeft={20} text={"Product A"} />
      <DashItem width={150} left={10} text={"Write sequence"} />
      <DashItemMultiple width={130} left={10} upperText={"Email Sent"} bottomText={"23 Jan 2023"}/>
      <DashItem width={130} left={10} textLeft={5} text={"$11000"} />
      <DashItem width={150} textLeft={20} left={10} text={"60%"} />
      <DashItem width={150} left={10} text={"Demo Requested"} />
      <DashItem width={150} left={10} textLeft={15} text={"$8500"} />
      <DashItem width={150} left={10} text={"Anil L, Paul G, Rekha"} />
      <DashItemMultiple width={150} left={10} upperText={"Send Email"} bottomText={"on 23 Jan 2023"}/>
      <DashItem width={150} textLeft={20} left={10} text={"-"} />
      <DashItem width={150} left={10} text={"Read Notes"} />
      <DashItem width={150} left={10} textLeft={20} text={"Website"} />
    </div>
    </div>
  );
};

export default Dashboard;
