import Call, { CompanyId, CustomerId } from "@/types/Calls";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const CallBox = ({ width }: any) => {
  return (
    <div
      className={`flex items-center justify-center h-[20px] shrink-0 `}
      style={{ width: width, flexShrink: "unset" }}
    >
      <input type="checkbox" className="checkbox" />
    </div>
  );
};

const CallItem = ({
  width,
  text,
  left,
  align,
  textLeft,
  link,
  click,
  route,
  color,
  bold,
  img,
}: any) => {
  const { push } = useRouter();

  return (
    <div
      className={`flex items-center  h-[20px] shrink-0`}
      style={{ width: width, marginLeft: left }}
    >
      {img && <Image src={img} alt="" width={20} height={20} className="w-[20px] mr-[5px] ml-[10px]" />}
      {link ? (
        <a
          className="text-[#8A9099] text-[13px]  tracking-wide "
          style={{
            textAlign: align && "center",
            marginLeft: textLeft && `${textLeft}px`,
          }}
        >
          {text ? text : "-"}
        </a>
      ) : (
        <p
          className="text-[#8A9099] text-[13px] tracking-wide cursor-pointer"
          style={{
            textAlign: align && "center",
            marginLeft: textLeft && `${textLeft}px`,
            fontWeight: bold ? bold : 500,
            color: color ? color : "#8A9099",
          }}
          onClick={() => {
            if (click) {
              push(route);
            }
          }}
        >
          {text ? text : "-"}
        </p>
      )}
    </div>
  );
};

const CallItemMultiple = ({
  width,
  upperText,
  bottomText,
  left,
  bold,
  align,
  click,
  route,
}: any) => {
  const { push } = useRouter();
  return (
    <div
      className={`flex justify-between flex-col h-[34px] shrink-0 cursor-pointer`}
      style={{ width: width, marginLeft: left }}
      onClick={() => {
        if (click) {
          push(route);
        }
      }}
    >
      <p
        className={`text-[12px] tracking-wide font-medium ${
          bold ? "text-[#3F434A]" : "text-[#8A9099]"
        }`}
        style={{
          textAlign: align && "center",
        }}
      >
        {upperText ? upperText : "-"}
      </p>
      <p
        className="text-[#8A9099] text-[12px] flex tracking-wide "
        style={{
          textAlign: align && "center",
        }}
      >
        {bottomText ? bottomText : "-"}
      </p>
    </div>
  );
};

// const QuickActions = ({ width, left }: any) => {
//   return (
//     <div
//       className={`flex  h-[18px] item-center shrink-0`}
//       style={{ width: width, marginLeft: left }}
//     >
//       <img
//         src={getBasicIcon("Phone")}
//         alt=""
//         className="mr-[4px] cursor-pointer"
//       />
//       <img
//         src={getBasicIcon("Mail")}
//         alt=""
//         className="mr-[4px] cursor-pointer"
//       />
//       <img
//         src={getBasicIcon("Calendar")}
//         alt=""
//         className="mr-[4px] cursor-pointer"
//       />
//       <img
//         src={getBasicIcon("Tasks")}
//         alt=""
//         className="mr-[4px] cursor-pointer"
//       />
//       <img
//         src={getBasicIcon("Chat")}
//         alt=""
//         className="mr-[4px] cursor-pointer"
//       />
//     </div>
//   );
// };

const CallContainer = ({
  id,
  company,
  customer,
  leadStage,
  leadStatus,
  custom,
  CallData,
}: CallProps) => {
  const { pathname } = useRouter();
  return (
    <div className="flex">
      <div className=" pl-[10px] h-[50px] flex items-center grow border-[#ccc] border-b-[1px] ">
        <CallBox width={30} />
        <CallItem
          width={130}
          left={20}
          text={"345345354335"}
          color={"#000"}
          click={true}
          route={`${pathname}/${id}/audio-call`}
        />
        <CallItem
          width={130}
          left={20}
          color={"#000"}
          text={"Discussion on PX features"}
          click={true}
          route={`${pathname}/${id}/video-call`}
        />
        <CallItem width={150} left={10} text={"345345354335"} color={"#000"} />
        <CallItem width={120} left={10} text={custom} color={"#000"} />
        <CallItemMultiple
          width={120}
          left={20}
          upperText={"Shraddha P."}
          bottomText={"Sales Manager"}
          bold={true}
        />
        <CallItem width={100} left={20} text={"John C"} />
        <CallItemMultiple
          width={130}
          left={20}
          upperText={"Send Email"}
          bottomText={"on 23 Jan 2023"}
        />
        <CallItem width={120} left={10} text={"30 min."} />
        <CallItem width={110} left={20} text={"80"} />
        <CallItem width={110} left={20} img={"/msg.svg"} text={"3"} />
        <CallItem width={110} left={20} text={"Read Summary"} />
      </div>
    </div>
  );
};

export default CallContainer;

interface CallProps {
  company: CompanyId;
  customer: CustomerId;
  id: String;
  leadStage: String;
  leadStatus: String;
  custom: String;
  CallData: Call;
}
