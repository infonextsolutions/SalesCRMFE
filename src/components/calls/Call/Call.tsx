import Call, { CompanyId, CustomerId } from "@/types/Calls";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

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
  const router = useRouter();

  return (
    <div
      className={`flex items-center  h-[20px] shrink-0`}
      style={{ width: width, marginLeft: left }}
    >
      {img && (
        <Image
          src={img}
          alt=""
          width={20}
          height={20}
          className="w-[20px] mr-[5px] ml-[10px]"
        />
      )}
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
          className="text-[#8A9099] overflow-hidden text-[13px] tracking-wide cursor-pointer"
          style={{
            textAlign: align && "center",
            marginLeft: textLeft && `${textLeft}px`,
            fontWeight: bold ? bold : 500,
            color: color ? color : "#8A9099",
          }}
          onClick={() => {
            if (click) {
              console.log(route);
              router.replace(route);
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

const ExpandingIcon = ({ change }: any) => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-[50px] flex items-center justify-center cursor-pointer">
      {!show ? (
        <Image
          onClick={() => {
            change(!show);
            setShow(!show);
          }}
          src={"/plus-circle.svg"}
          alt=""
          width={15}
          height={15}
        />
      ) : (
        <Image
          onClick={() => {
            change(!show);
            setShow(!show);
          }}
          src={"/minus-circle.svg"}
          alt=""
          width={15}
          height={15}
        />
      )}
    </div>
  );
};

const CallHolder = () => {
  return (
    <div className="w-[25px]  h-[25px] flex shrink-0 drop-shadow-md  absolute items-center cursor-pointer justify-center  top-[-10px] right-[-10px] ">
      <Image
        src={getBasicIcon("CallPlay")}
        style={{
          zIndex: 10,
        }}
        alt=""
        width={25}
        height={25}
      />
    </div>
  );
};

const CallPlayer = () => {
  return (
    <div className="w-[400px] h-[100px] mt-[20px] ml-[70px]">
      <p className="text-[15px] font-medium tracking-wide text-[#000]">
        Call Player
      </p>
      <div className="w-[100%]  h-[4px] mt-[10px] flex bg-[#fff] relative rounded-[3px]">
        <div className="h-[100%] w-[40%] bg-renal-blue rounded-l-[3px] relative">
          <CallHolder />
        </div>
        <div className="absolute text-[#8A9099] top-[10px] right-[3px] text-[11px] tracking-wide font-medium ">
          15:53/30:00
        </div>
      </div>
      <div className="w-[100%] mt-[15px] flex justify-center items-center">
        <Image
          src={getBasicIcon("playRev")}
          style={{
            zIndex: 10,
          }}
          alt=""
          width={13}
          height={13}
          className="mr-[9px] cursor-pointer"
        />
        <Image
          src={getBasicIcon("playBtn")}
          style={{
            zIndex: 10,
          }}
          className="translate-y-[1px] cursor-pointer"
          alt=""
          width={40}
          height={40}
        />
        <Image
          src={getBasicIcon("playFor")}
          style={{
            zIndex: 10,
          }}
          className="ml-[8px] cursor-pointer"
          alt=""
          width={13}
          height={13}
        />
      </div>
    </div>
  );
};

const ExpandableRow = ({
  CallDesc,
  callMatrics,
  engagingQuestions,
  height,
}: any) => {
  return (
    <div
      className="w-[100%] h-[100%] flex px-[110px] py-[10px] duration-300"
      style={{ height: height }}
    >
      <div className="w-[300px]">
        <p className="text-[16px] text-[#000] font-medium">Call Description</p>
        <p className="text-[#8A9099] font-medium mt-[5px] text-[14px] tracking-wide">
          {CallDesc}
        </p>
      </div>
      <div className="w-[180px] ml-[50px]">
        <p className="text-[16px] text-[#000] font-medium">Call Metrics</p>
        {callMatrics.map((item: any, i: any) => {
          return (
            <div className="flex justify-between items-center mt-[3px]" key={i}>
              <p className="text-[#000] font-medium mt-[2px] text-[13px] tracking-wide">
                {item.title}
              </p>
              <p
                key={i}
                className="text-[#8A9099] font-medium mt-[2px] text-[13px] tracking-wide"
              >
                {item.data}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex h-[20px]  justify-between items-center w-[200px] mt-[40px] ml-[60px]">
        <p className="text-[#000] font-medium mt-[2px] text-[13px] tracking-wide">
          Engaging Questions
        </p>
        <p className="text-[#8A9099] font-medium mt-[2px] text-[13px] tracking-wide">
          {engagingQuestions}
        </p>
      </div>
      <CallPlayer />
    </div>
  );
};

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
  const [detailShow, setDetailShow] = useState(false);

  const [w, setW] = useState(0);
  const wRef: any = useRef();

  React.useEffect(() => {
    if (wRef.current) {
      setW(wRef.current.offsetWidth);
    }
  });
  console.log(CallData, "Call-data");
  return (
    <>
      <div className="flex">
        <div
          className=" pl-[10px] h-[50px] flex items-center grow border-[#ccc] border-b-[1px] "
          ref={wRef}
        >
          <CallBox width={30} />
          <ExpandingIcon
            change={(e: any) => {
              setDetailShow(e);
            }}
          />
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
          <CallItem
            width={200}
            left={10}
            text={CallData._id}
            click={true}
            route={`/sales/open/${CallData._id}/lead-profile`}
            color={"#000"}
          />
          <CallItem width={120} left={10} text={custom} color={"#000"} />
          <CallItemMultiple
            width={200}
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
          <CallItem
            width={110}
            left={20}
            img={"/msg.svg"}
            click={true}
            route={`${pathname}/${id}/video-call`}
            text={"3"}
          />
          <CallItem width={110} left={20} text={"Read Summary"} />
        </div>
      </div>
      <div
        className="duration-300 bg-[#f7f7f7]"
        style={{
          width: w,
          height: detailShow ? 150 : 0,
          clipPath: detailShow
            ? "inset(0px 0px 0 1px)"
            : "inset(0px 0px 150px 1px)",
        }}
      >
        <ExpandableRow
          height={detailShow ? 150 : 0}
          CallDesc={
            "ABC Corp. is a IT company serving industry such as Finance and Edtech. Company has 10+ existing clients and also works with individual people."
          }
          callMatrics={[
            {
              title: "Talk/Listen Ratio ",
              data: "26%",
            },
            {
              title: "Longest Monologue",
              data: "03:53",
            },
            {
              title: "Filler words per minute",
              data: "7",
            },
          ]}
          engagingQuestions={3}
        />
      </div>
    </>
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
