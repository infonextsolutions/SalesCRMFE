import Backdrop from "@/components/View/Backdrop/Center";
import Notes from "@/components/View/Notes";
import Lead, { CompanyId, CustomerId } from "@/types/Leads";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Events from "@/components/View/Event/Events";
import Root from "@/types/teams";

const LeadBox = ({ width, bool }: any) => {
  const [check, setCheck] = useState(false);
  React.useEffect(() => {
    if (check) {
      if (false) {
        ref.current.checked = true;
      } else {
        ref.current.checked = false;
      }
    }
    setCheck(true);
  }, [bool]);
  const ref: any = useRef();
  return (
    <div
      className={`flex items-center justify-center h-[20px] shrink-0 `}
      style={{ width: width, flexShrink: "unset" }}
    >
      <input type="checkbox" ref={ref} className="checkbox" />
    </div>
  );
};

const LeadItem = ({
  width,
  text,
  left,
  align,
  textLeft,
  link,
  click,
  route,
  onClick,
  color,
  weight,
}: any) => {
  const { push } = useRouter();

  return (
    <div
      className={`flex items-center  h-[20px] shrink-0`}
      style={{ width: width, marginLeft: left }}
    >
      {link ? (
        <a
          className=" text-[13px]  tracking-wide "
          style={{
            textAlign: align && "center",
            marginLeft: textLeft && `${textLeft}px`,
            color: color ? color : "#8A9099",
          }}
        >
          {text ? text : "-"}
        </a>
      ) : (
        <p
          className="text-[13px] tracking-wide cursor-pointer"
          style={{
            textAlign: align && "center",
            marginLeft: textLeft && `${textLeft}px`,
            color: color ? color : "#8A9099",
            fontWeight: weight ? weight : 500,
          }}
          onClick={() => {
            if (click) {
              push(route);
            }
            if (onClick) {
              onClick();
            }
          }}
        >
          {text ? text : "-"}
        </p>
      )}
    </div>
  );
};

const LeadItemMultiple = ({
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
        className="text-[#8A9099] text-[12px]  tracking-wide "
        style={{
          textAlign: align && "center",
        }}
      >
        {bottomText ? bottomText : "-"}
      </p>
    </div>
  );
};

const QuickActions = ({ width, left, notes, events }: any) => {
  return (
    <div
      className={`flex  h-[18px] item-center shrink-0`}
      style={{ width: width, marginLeft: left }}
    >
      <Image
        src={getBasicIcon("Phone")}
        alt=""
        className="mr-[4px] cursor-pointer"
        width={25}
        height={25}
        style={{
          objectFit: "contain",
        }}
      />
      <Image
        src={getBasicIcon("Mail")}
        alt=""
        width={25}
        height={25}
        style={{
          objectFit: "contain",
        }}
        className="mr-[4px] cursor-pointer"
      />
      <Image
        src={getBasicIcon("Calendar")}
        alt=""
        className="mr-[4px] cursor-pointer"
        width={25}
        height={25}
        onClick={() => {
          events();
        }}
        style={{
          objectFit: "contain",
        }}
      />
      <Image
        src={getBasicIcon("Tasks")}
        alt=""
        className="mr-[4px] cursor-pointer"
        width={25}
        height={25}
        onClick={() => {
          notes();
        }}
        style={{
          objectFit: "contain",
        }}
      />
      <Image
        src={getBasicIcon("Chat")}
        alt=""
        className="mr-[4px] cursor-pointer"
        width={25}
        height={25}
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  );
};

const LeadContainer = ({
  index,
  id,
  LeadData,
  selectAll,
  last,
}: LeadProps) => {
  const { pathname } = useRouter();
  const state = useSelector((state: any) => state.auth);

  const [notes, setNotes] = React.useState(false);
  const [events, setEvents] = React.useState(false);
  const [bool, setBool] = React.useState(true);

  const showNotes = () => {
    setNotes(true);
  };

  const showEvents = () => {
    setEvents(true);
  };

  const cancelEvents = () => {
    setBool(false);
    setTimeout(() => {
      setEvents(false);
      setBool(true);
    }, 500);
  };

  const cancelNotes = () => {
    setBool(false);
    setTimeout(() => {
      setNotes(false);
      setBool(true);
    }, 1700);
  };

  const AddLead = (e: any, e1: any) => {
    if (e1 === 0) {
      showNotes();
    } else if (e1 === 1) {
      showEvents();
    }
  };

  function parseDateString(dateString:any) {
    const date = dateString ? new Date(dateString) : new Date();
    const options:any = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <div className="flex">
      <div className="relative pl-[10px] h-[50px] flex items-center grow border-[#ccc] border-b-[1px] ">
        {/*
        <div className="fixed flex items-center left-[1390px] h-[50px] cursor-pointer">
          <Image
              src={getBasicIcon("More")}
              className="rotate-90"
              alt=""
              width={20}
              height={20}
            />
        </div> 
        */}
        {notes && (
          <Backdrop bool={bool}>
            <Notes cancel={cancelNotes} />
          </Backdrop>
        )}
        {events && (
          <Backdrop bool={bool} pad={"50px 0"}>
            <Events cancel={cancelEvents} />
          </Backdrop>
        )}
        <LeadBox
          width={30}
          // bool={selectAll}
          bool={() => {}}
        />
        <LeadItemMultiple
          width={120}
          left={20}
          upperText={LeadData.user[0].name}
          bottomText={LeadData.user[0].designation}
          bold={true}
          click={true}
          route={`${pathname}/leads`}
        />
        <LeadItem
          width={150}
          left={0}
          color={"#000"}
          text={LeadData.openDeals}
          click={true}
        />
        <LeadItem
          width={130}
          left={20}
          text={LeadData.closeDeals}
          bold={true}
          click={true}
        />
        <LeadItem
          width={110}
          left={10}
          text={LeadData.openDealsRs}
          click={true}
        />
        <LeadItem width={150} left={20} text={LeadData.closeDealsRs} />
        <LeadItem width={130} left={20} text={LeadData.dealsWon} />
        <LeadItem width={110} left={10} text={LeadData.dealsLost} />
        <LeadItem width={150} left={20} text={LeadData.dealsDead} />
        <LeadItem
          width={120}
          left={10}
          textLeft={10}
          text={LeadData.stageEnquery}
        />
        <LeadItem
          width={120}
          left={10}
          text={parseDateString(LeadData.lastActivity)}
        />
        <LeadItem
          width={130}
          left={10}
          textLeft={10}
          text={parseDateString(LeadData.lastLeadClose)}
        />
        <LeadItem width={150} left={10} text={LeadData.callReted} />
        <LeadItem
          width={150}
          left={10}
          textLeft={10}
          text={LeadData.totalFeedBacks}
        />
        <LeadItemMultiple
          width={130}
          left={20}
          upperText={"Read Feedback"}
          bottomText={parseDateString(LeadData.lastFeedBack)}
        />
        <LeadItem width={150} left={10} text={LeadData.warningsInOpenLeads} />
      </div>
    </div>
  );
};

export default LeadContainer;

interface LeadProps {
  id: String;
  LeadData: Root;
  index: Number;
  selectAll: any;
  last: any;
}
