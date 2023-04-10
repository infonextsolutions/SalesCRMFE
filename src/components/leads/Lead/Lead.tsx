import Backdrop from "@/components/View/Backdrop/Center";
import Notes from "@/components/View/Notes";
import Lead, { CompanyId, CustomerId } from "@/types/Leads";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const LeadBox = ({ width }: any) => {
  return (
    <div
      className={`flex items-center justify-center h-[20px] shrink-0 `}
      style={{ width: width, flexShrink: "unset" }}
    >
      <input type="checkbox" className="checkbox" />
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
}: any) => {
  const { push } = useRouter();

  return (
    <div
      className={`flex items-center  h-[20px] shrink-0`}
      style={{ width: width, marginLeft: left }}
    >
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

const QuickActions = ({ width, left }: any) => {
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
  company,
  customer,
  leadStage,
  leadStatus,
  custom,
  LeadData,
}: LeadProps) => {
  const { pathname } = useRouter();
  const state = useSelector((state: any) => state.auth);

  const [notes, setNotes] = React.useState(false);
  const [imports, setImports] = React.useState(false);
  const [bool, setBool] = React.useState(true);

  const showNotes = () => {
    setNotes(true);
  };

  const showImports = () => {
    setImports(true);
  };
  
  const cancelImports = () => {
    setBool(false);
    setTimeout(() => {
      setImports(false);
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
    console.log(e, e1);
    if (e1 === 0) {
      showNotes();
    } else if (e1 === 1) {
      showImports();
    }
  };

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
        <LeadBox width={30} />
        <LeadItem width={120} left={10} textLeft={10} text={"12XXXX"} />
        <LeadItem
          width={150}
          left={10}
          text={custom}
          click={state.admin}
          route={`${pathname}/${id}/lead-profile`}
        />
        <LeadItemMultiple
          width={130}
          left={20}
          upperText={company.company_name}
          bottomText={company.company_location}
          bold={true}
          click={true}
          route={`${pathname}/${id}/company-profile`}
        />
        <LeadItem
          width={110}
          left={10}
          text={customer.name}
          click={true}
          route={`${pathname}/${id}/client-poc-profile`}
        />
        <LeadItem width={150} left={20} text={customer.email} />
        <LeadItem width={130} left={20} text={customer.contact} />
        <QuickActions width={120} />
        <LeadItem width={150} left={20} text={"Anil L, Paul G, Rekha"} />
        <LeadItem width={120} left={10} textLeft={10} text={leadStage} />
        <LeadItem width={120} left={10} text={leadStatus} textLeft={5} />
        <LeadItem width={150} left={10} textLeft={10} text={"John C."} />
        <LeadItem width={150} left={10} text={LeadData.inquiry} />
        <LeadItem width={150} left={10} textLeft={10} text={"Product A"} />
        <LeadItem width={150} left={10} text={LeadData.activity_history} />
        <LeadItemMultiple
          width={130}
          left={10}
          upperText={"Email Sent"}
          bottomText={LeadData.last_activity}
        />
        <LeadItemMultiple
          width={150}
          left={10}
          upperText={"Send Email"}
          bottomText={"on 23 Jan 2023"}
        />
        <LeadItem
          width={150}
          textLeft={20}
          left={10}
          text={LeadData.win_probability}
        />
        <LeadItem width={140} left={10} text={LeadData.potential_deal_size} />
        <LeadItem
          width={150}
          left={10}
          textLeft={15}
          text={LeadData.existing_budget}
        />
        <LeadItem
          link={true}
          width={150}
          left={10}
          text={company.company_website_url}
        />
        {/* <LeadItem width={150} textLeft={20} left={10} text={"-"} /> */}
        {/* <LeadItem width={150} left={10} text={LeadData.close_date} /> */}
        <LeadItem
          width={150}
          left={10}
          text={"Read Notes"}
          onClick={() => {
            AddLead(1, 0);
          }}
        />
      </div>
    </div>
  );
};

export default LeadContainer;

interface LeadProps {
  company: CompanyId;
  customer: CustomerId;
  id: String;
  leadStage: String;
  leadStatus: String;
  custom: String;
  LeadData: Lead;
  index: Number;
}
