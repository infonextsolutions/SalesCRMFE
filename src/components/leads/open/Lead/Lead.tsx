import Backdrop from "@/components/View/Backdrop/Center";
import Notes from "@/components/View/Notes";
import Lead, { CompanyId, CustomerId, Owner } from "@/types/Leads";
import { getBasicIcon } from "@/utils/AssetsHelper";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import ActivityHistory from "../../genUtils/Activity";
import Events from "@/components/View/Event/Events";
import Notes1 from "@/components/View/NotesSalesView";
import EmailPage from "../../../View/Email/index";
import Messages from "@/components/View/messages";
import ActiveCall from "@/components/View/active-call-add";
import ButtonDropDown from "@/utils/Button/Button";

const LeadBox = ({ width, bool }: any) => {
  const [check, setCheck] = useState(false);
  React.useEffect(() => {
    if (check) {
      if (bool) {
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
      className={`flex relative justify-between flex-col h-[34px] shrink-0 cursor-pointer`}
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

const QuickActions = ({
  width,
  left,
  notes,
  events,
  emails,
  messages,
  call,
}: any) => {
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
        onClick={() => {
          call();
        }}
        style={{
          objectFit: "contain",
        }}
      />
      <Image
        src={getBasicIcon("Mail")}
        alt=""
        width={25}
        onClick={() => {
          emails();
        }}
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
        onClick={() => {
          messages();
        }}
      />
    </div>
  );
};

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

const ExpandableRow = ({
  leadDesc,
  companyDesc,
  companyWebsite,
  LeadOwners,
  otherContacts,
}: any) => {
  return (
    <div className="w-[100%] h-[100%] flex px-[110px] py-[10px] ">
      <div className="w-[300px]">
        <p className="text-[16px] text-[#000] font-medium">Lead Description</p>
        <p className="text-[#8A9099] font-medium mt-[5px] text-[14px] tracking-wide">
          {leadDesc}
        </p>
      </div>
      <div className="w-[350px] ml-[30px]">
        <p className="text-[16px] text-[#000] font-medium">
          Company Description
        </p>
        <p className="text-[#8A9099] font-medium mt-[5px] text-[14px] tracking-wide">
          {companyDesc}
        </p>
      </div>
      <div className="flex flex-col ml-[30px]">
        <div className="w-[100%]">
          <p className="text-[16px] text-[#000] font-medium">Company Website</p>
          <p className="text-[#8A9099] font-medium mt-[0px] text-[14px] tracking-wide">
            <a href={`https://${companyWebsite}`} target="_blank">{companyWebsite}</a>
          </p>
        </div>
        <div className="w-[100%] mt-[10px]">
          <p className="text-[16px] text-[#000] font-medium">Social Media</p>
          <div className="flex mt-[2px]">
            <Image
              src={getBasicIcon("Twitter")}
              className="mr-[8px] cursor-pointer"
              height={20}
              width={20}
              alt=""
            />
            <Image
              src={getBasicIcon("Linked")}
              className=" cursor-pointer"
              height={20}
              width={20}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-[100px] ml-[50px]">
        <p className="text-[16px] text-[#000] font-medium">Lead Owners</p>
        {LeadOwners.map((item: Owner, i: any) => {
          return (
            <p
              key={i}
              className="text-[#8A9099] font-medium mt-[2px] text-[14px] tracking-wide"
            >
              {item.name}
            </p>
          );
        })}
      </div>
      <div className="w-[280px] ml-[50px]">
        <p className="text-[16px] text-[#000] font-medium">Other Contacts</p>
        {otherContacts.map((item: any, i: any) => {
          return (
            <p
              key={i}
              className="text-[#8A9099] font-medium mt-[5px] text-[14px] tracking-wider"
            >
              <span className="text-[#000] text-[15px]"> {item.name}</span>,
              {item.position}
            </p>
          );
        })}
      </div>
    </div>
  );
};
const MidPath = () => {
  return (
    <div className="w-[31px] flex items-center justify-between">
      <div className="w-[4px] h-[4px] rounded-[50%] bg-[#B656EB]"></div>
      <div className="w-[19px] h-[4px] rounded-[12px] bg-[#B656EB]"></div>
      <div className="w-[4px] h-[4px] rounded-[50%] bg-[#B656EB]"></div>
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
  selectAll,
  owners,
  last,
}: LeadProps) => {
  const { pathname } = useRouter();
  const state = useSelector((state: any) => state.auth);

  const [notes, setNotes] = React.useState(false);
  const [events, setEvents] = React.useState(false);
  const [notes1, setNotes1] = React.useState(false);
  const [emails, setEmail] = React.useState(false);
  const [messages, setMessages] = React.useState(false);
  const [bool, setBool] = React.useState(true);
  const [detailShow, setDetailShow] = useState(false);
  const [call, setCall] = React.useState(false);

  
  const num= Math.floor(Math.random() * 4);
  const showNotes = () => {
    setNotes(true);
  };
  const showEmail = () => {
    setEmail(true);
  };
  const showNotes1 = () => {
    setNotes1(true);
  };
  const showEvents = () => {
    setEvents(true);
  };
  const showMessages = () => {
    setMessages(true);
  };
  const showCall = () => {
    setCall(true);
  };

  const cancelEvents = () => {
    setBool(false);
    setTimeout(() => {
      setEvents(false);
      setBool(true);
    }, 500);
  };

  const cancelEmails = () => {
    setBool(false);
    setTimeout(() => {
      setEmail(false);
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

  const cancelNotes1 = () => {
    setBool(false);
    setTimeout(() => {
      setNotes1(false);
      setBool(true);
    }, 1700);
  };
  const cancelMessages = () => {
    setBool(false);
    setTimeout(() => {
      setMessages(false);
      setBool(true);
    }, 1700);
  };
  const cancelCall = () => {
    setBool(false);
    setTimeout(() => {
      setCall(false);
      setBool(true);
    }, 1700);
  };

  const AddLead = (e: any, e1: any) => {
    if (e1 === 0) {
      showNotes();
    } else if (e1 === 1) {
      showEvents();
    } else if (e1 === 2) {
      showNotes1();
    } else if (e1 === 3) {
      showEmail();
    } else if (e1 === 5) {
      showMessages();
    } else if (e1 === 6) {
      showCall();
    }
  };


  const [w, setW] = useState(0);
  const wRef: any = useRef();

  React.useEffect(() => {
    if (wRef.current) {
      setW(wRef.current.offsetWidth);
    }
  });

  const [hover, setHover] = useState(false);
  const [bounding, setBounding] = useState({ top: 0, left: 0 });
  const ref: any = useRef();
  return (
    <>
      <div
        className="flex relative h-[50px]"
        style={{
          zIndex: 1000,
        }}
      >
        <div
          className="relative pl-[10px] h-[50px] flex items-center grow border-[#ccc] border-b-[1px] "
          ref={wRef}
        >
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

          <LeadBox width={30} bool={selectAll} />
          <ExpandingIcon
            change={(e: any) => {
              setDetailShow(e);
            }}
          />
          <LeadItem
            width={150}
            left={20}
            textLeft={0}
            weight={500}
            color={"#000"}
            text={LeadData.leadId}
            click={true}
            route={`${pathname}/${id}/lead-profile`}
          />
          <LeadItem
            width={250}
            left={0}
            color={"#000"}
            text={LeadData.lead_title}
            click={true}
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
          <LeadItem width={190} left={20} text={customer.email} />
          <LeadItem width={130} left={20} text={customer.contact} />
          <QuickActions
            width={120}
            notes={() => {
              AddLead(1, 0);
            }}
            events={() => {
              AddLead(1, 1);
            }}
            emails={() => {
              AddLead(1, 3);
            }}
            messages={() => {
              AddLead(1, 5);
            }}
            call={() => {
              AddLead(1, 6);
            }}
          />
          <LeadItem width={150} left={20} text={"Anil L, Paul G, Rekha"} />
          <LeadItem width={120} left={10} textLeft={10} text={leadStage} />
          <LeadItem width={120} left={10} text={leadStatus} textLeft={5} /> 
          <LeadItem width={130} left={10} textLeft={10} text={LeadData?.owners[0]?.name} />
          <LeadItem width={150} left={10} text={LeadData.inquiry} />
          <LeadItem width={150} left={10} textLeft={10} text={company.company_product_category} />
          {/* <LeadItem width={150} left={10} textLeft={10} text={company.company_product_category} /> */}

          {/* activity history starts here*/}
          {/* <div
            className={`flex items-center justify-between h-[20px] relative shrink-0 cursor-pointer`}
            style={{ width: 180, marginLeft: 0 }}
            ref={ref}
            onMouseOver={() => {
              const box = ref.current.getBoundingClientRect();
              setBounding({ left: box.x, top: box.y });
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <Image src={getBasicIcon("Phone")} alt="" width={15} height={15} />
            <MidPath />
            <Image
              src={getBasicIcon("Calendar")}
              alt=""
              width={15}
              height={15}
            />
            <MidPath />
            <Image src={getBasicIcon("Mail")} alt="" width={15} height={15} />
            <MidPath />
            <Image src={getBasicIcon("Phone")} alt="" width={15} height={15} />
          </div>  */}

          <ActivityHistory width={180} left={0} random={num}/>

          {/* activity history ends here*/} 

          <LeadItemMultiple
            width={130}
            left={20}
            upperText={"Email Sent"}
            bottomText={""}
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
          <LeadItem width={140} left={20} text={LeadData.potential_deal_size} />
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
              AddLead(1, 2);
            }}
          />
        </div>
      </div>
      <div
        className="duration-300 bg-[#f7f7f7]"
        style={{
          width: w,
          height: detailShow ? 150 : 0,
          zIndex: -1,
          clipPath: detailShow
            ? "inset(0px 0px 0 1px)"
            : "inset(0px 0px 150px 1px)",
        }}
      >
        {detailShow && (
          <ExpandableRow
            // leadDesc={
            //   "Need a mix of Product A and Product B.  Additional features required. Need pricing revised for 50+ users."
            // }
            leadDesc={
              LeadData.lead_description
            }
            // companyDesc={
            //   "ABC Corp. is a IT company serving industry such as Finance and Edtech. Company has 10+ existing clients and also works with individual people."
            // }
            companyDesc={
              LeadData.companyId.company_description
            }
            companyWebsite={LeadData.companyId.company_website_url}
            // LeadOwners={["John C.", "Aarti S", "Raghav V.", "Ajay P."]}
            LeadOwners={LeadData.owners}
            otherContacts={[
              { name: "Regina Cooper", position: "Project Manager" },
              { name: "Suman A.", position: "Sales Manager" },
              { name: "Judith Black", position: "Creative Director" },
            ]}
          />
        )}
      </div>
      {/* {hover && (
        <div
          className="bg-[#E8E9EB] max-w-[180px] flex flex-col items-center rounded-[15px] fixed py-[8px] px-[15px]  right-[10px] drop-shadow-sm"
          style={{
            zIndex: 10000000000000,
            // top: !last ? "30px" : "",
            // right: "10px",
            // bottom: last ? "30px" : "",
            top: last ? bounding.top - 50 : bounding.top + 20,
            left: bounding.left,
          }}
        >
          <p className="text-[#B656EB] w-[100%] text-[13px] font-medium">
            Demo Call with Shraddha
          </p>
          <p className="text-[#000] text-[9px] w-[100%] font-medium">
            | 23 Jan 2023 | 4:00 PM | 30 Min |
          </p>
        </div>
      )} */}
      {notes && (
        <Backdrop bool={bool}>
          <Notes cancel={cancelNotes} leadid={id} />
        </Backdrop>
      )}
      {events && (
        <Backdrop bool={bool} pad={"50px 0"}>
          <Events cancel={cancelEvents} />
        </Backdrop>
      )}
      {emails && (
        <Backdrop bool={bool} pad={"50px 0"}>
          <EmailPage cancel={cancelEmails} />
        </Backdrop>
      )}
      {notes1 && (
        <Backdrop bool={bool} pad={"50px 0"}>
          <Notes1 cancel={cancelNotes1} note={LeadData?.notes} />
        </Backdrop>
      )}
      {messages && (
        <Backdrop bool={bool} pad={"50px 0"}>
          <Messages cancel={cancelMessages} />
        </Backdrop>
      )}
      {call && (
        <Backdrop bool={bool} pad={"50px 0"}>
          <ActiveCall cancel={cancelCall} id={LeadData._id} companyId={LeadData.companyId._id} customerId={LeadData.customerId._id} />
        </Backdrop>
      )}
    </>
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
  selectAll: any;
  last: any;
  owners:any;
}