import { getBasicIcon } from "@/utils/AssetsHelper";
import React, { useEffect, useState } from "react";
import Navigator from "@/utils/customNavigator";
import Image from "next/image";
import Backdrop from "@/components/View/Backdrop/Center";
import Notes from "@/components/View/Notes";
import Notes1 from "@/components/View/NotesSalesView";
import Events from "@/components/View/Event/Events";
import EmailPage from "../View/Email/index";
import Messages from "@/components/View/messages";
import ActiveCall from "@/components/View/active-call-add";
import axios from "axios";

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

const Deals = ({ data }: any) => {
  const [notes, setNotes] = React.useState(false);
  const [events, setEvents] = React.useState(false);
  const [notes1, setNotes1] = React.useState(false);
  const [emails, setEmail] = React.useState(false);
  const [messages, setMessages] = React.useState(false);
  const [bool, setBool] = React.useState(true);
  const [call, setCall] = React.useState(false);
  // const [detailShow, setDetailShow] = useState(false);
  
  

  console.log(data.result._id);

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
  
  const [openDeals, setOpenDeals] = useState<any>(null);
  const [closedDeals, setClosedDeals] = useState<any>(null);
  const [interest, setInterest] = useState<any>(null);


  useEffect(() => {
axios.get(`https://testsalescrm.nextsolutions.in/api/leads/getDeals?userId=${data.result._id}`)
      .then(response => {
        const data = response.data;
        setOpenDeals(data.openDeals);
        setClosedDeals(data.closeDeals);
        setInterest(data.intrest);
        
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

 

  
  return (
    <>
      <Navigator
        callback={() => {}}
        current={0}
        list={[{ id: 0, title: "Deals" }]}
      />

      
     <div className="bg-[#ffffff] my-[40px] overflow-hidden">
        <h5 className="text-[#3F434A] px-[30px] text-[20px] leading-[30px] font-medium">
          Open Deals
        </h5>
        <p className="text-center text-[#000]">-</p>
        <div className="mt-[40px] pl-[35px] pr-[43px] flex text-[#8A9099] text-[14px] leading-[21px] items-center">
          <p className="w-[12%]">Lead Id</p>
          <p className="w-[18%]">Product Service</p>
          <p className="w-[17%]">Lead Stage</p>
          <p className="w-[25%]">Last Activity</p>
          <p>Activity History</p>
        </div>
        
        { openDeals && openDeals.map((deal:any, index:number)=>(<div key={index} className="mt-[10px] mx-[13px] flex flex-col gap-y-2.5">
          <div className="text-[14px] pl-[20px] py-[5px] text-[#8A9099] leading-[21px] flex items-center bg-[#F8F8F8] rounded-xl">
            <div className="w-[15%]">
              <p className="text-[#3F434A]">{deal?.leadData?.leadId}</p>
            </div>
            <div className="w-[18%]">
              <p>{(deal?.leadData?.Product)? (deal?.leadData?.Product): "product A" } </p>
            </div>
            <div className="w-[15%]">
              <p>{(deal?.leadData?.leadStage)? (deal?.leadData?.leadStage): "Won" }</p>
            </div>
            <div className="w-[22%]">
              <p>{(deal?.lastActivity?.subject)? (deal?.leadData?.subject): "Email Sent" }</p>
              <p>{(deal?.lastActivity?.createdAt)? (deal?.leadData?.createdAt): "23 Jan 2023" }</p>
            </div>
            <div className="flex items-start gap-[5px] w-[220px] text-[#3F434A]">
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
            </div>
            <div>
              <Image
                src={getBasicIcon("More")}
                className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                alt=""
                width={17}
                height={17}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          {notes && (
            <Backdrop bool={bool}>
              <Notes
                cancel={cancelNotes}
                //  leadid={id}
              />
            </Backdrop>
          )}
          {events && (
            <Backdrop bool={bool} pad={"50px 0"}>
              <Events
                cancel={cancelEvents}
                // leadid={id}
              />
            </Backdrop>
          )}
          {emails && (
            <Backdrop bool={bool} pad={"50px 0"}>
              <EmailPage
                // refresh={UpdateData}
                //  data={LeadData}
                cancel={cancelEmails}
                refresh={function (e: any) {
                  throw new Error("Function not implemented.");
                }}
              />
            </Backdrop>
          )}
          {notes1 && (
            <Backdrop bool={bool} pad={"50px 0"}>
              {/* note={LeadData?.notes} */}
              <Notes1 cancel={cancelNotes1} />
            </Backdrop>
          )}
          {messages && (
            <Backdrop bool={bool} pad={"50px 0"}>
              <Messages cancel={cancelMessages} />
            </Backdrop>
          )}
          {call && (
            <Backdrop bool={bool} pad={"50px 0"}>
              <ActiveCall
                cancel={cancelCall}
                // id={LeadData._id}
                // lead={LeadData}
                // companyId={LeadData.companyId._id}
                // companyName={LeadData.companyId.company_name}
                // customerId={LeadData.customerId._id}
              />
            </Backdrop>
          )}
        </div>))}
      </div>

    {/* ?close deals */}

    
    <div className="bg-[#ffffff] my-[40px] overflow-hidden">
        <h5 className="text-[#3F434A] px-[30px] text-[20px] leading-[30px] font-medium">
          Close Deals
        </h5>
        <p className="text-center text-[#000]">-</p>
        <div className="mt-[40px] pl-[35px] pr-[43px] flex text-[#8A9099] text-[14px] leading-[21px] items-center">
          <p className="w-[12%]">Lead Id</p>
          <p className="w-[18%]">Product Service</p>
          <p className="w-[17%]">Lead Stage</p>
          <p className="w-[25%]">Last Activity</p>
          <p>Activity History</p>
        </div>
        
        { closedDeals && closedDeals.map((deal:any,index:number)=>(<div key={index} className="mt-[10px] mx-[13px] flex flex-col gap-y-2.5">
          <div className="text-[14px] pl-[20px] py-[5px] text-[#8A9099] leading-[21px] flex items-center bg-[#F8F8F8] rounded-xl">
            <div className="w-[15%]">
              <p className="text-[#3F434A]">{deal?.leadData?.leadId}</p>
            </div>
            <div className="w-[18%]">
              <p>{(deal?.leadData?.Product)? (deal?.leadData?.Product): "product A" } </p>
            </div>
            <div className="w-[15%]">
              <p>{(deal?.leadData?.leadStage)? (deal?.leadData?.leadStage): "close" }</p>
            </div>
            <div className="w-[22%]">
              <p>{(deal?.lastActivity?.subject)? (deal?.leadData?.subject): "Email Sent" }</p>
              <p>{(deal?.lastActivity?.createdAt)? (deal?.leadData?.createdAt): "23 Jan 2023" }</p>
            </div>
            <div className="flex items-start gap-[5px] w-[220px] text-[#3F434A]">
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
            </div>
            <div>
              <Image
                src={getBasicIcon("More")}
                className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                alt=""
                width={17}
                height={17}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          {notes && (
            <Backdrop bool={bool}>
              <Notes
                cancel={cancelNotes}
                //  leadid={id}
              />
            </Backdrop>
          )}
          {events && (
            <Backdrop bool={bool} pad={"50px 0"}>
              <Events
                cancel={cancelEvents}
                // leadid={id}
              />
            </Backdrop>
          )}
          {emails && (
            <Backdrop bool={bool} pad={"50px 0"}>
              <EmailPage
                // refresh={UpdateData}
                //  data={LeadData}
                cancel={cancelEmails}
                refresh={function (e: any) {
                  throw new Error("Function not implemented.");
                }}
              />
            </Backdrop>
          )}
          {notes1 && (
            <Backdrop bool={bool} pad={"50px 0"}>
              {/* note={LeadData?.notes} */}
              <Notes1 cancel={cancelNotes1} />
            </Backdrop>
          )}
          {messages && (
            <Backdrop bool={bool} pad={"50px 0"}>
              <Messages cancel={cancelMessages} />
            </Backdrop>
          )}
          {call && (
            <Backdrop bool={bool} pad={"50px 0"}>
              <ActiveCall
                cancel={cancelCall}
                // id={LeadData._id}
                // lead={LeadData}
                // companyId={LeadData.companyId._id}
                // companyName={LeadData.companyId.company_name}
                // customerId={LeadData.customerId._id}
              />
            </Backdrop>
          )}
        </div>))}
      </div>


      
    
      <div className="bg-[#ffffff] my-[50px] mt-[80px]">
        <h5 className="text-[#3F434A] px-[30px] text-[20px] leading-[30px] font-medium">
          Interest History
        </h5>
        <p className="text-center text-[#000]">-</p>
        <div className="mt-[40px] pl-[35px] pr-[43px] flex text-[#8A9099] text-[14px] leading-[21px] items-center">
          <p className="w-[22%]">Product Service</p>
          <p className="w-[22%]">Lead Id</p>
          <p>Last Activity</p>
        </div>

        
        { interest && interest.map((deal:any,index:number )=>( <div key={index} className="mt-[10px] mx-[13px] flex flex-col gap-y-2.5">
          <div className="text-[14px] pl-[20px] py-[5px] text-[#8A9099] leading-[21px] flex items-center bg-[#F8F8F8] rounded-xl">
            <div className="w-[22%]">
              <p className="ml-2">{deal?.companyData?.company_product_category}</p>
            </div>
            <div className="w-[22%]">
              <p>{deal?.leadData?.leadId}</p>
            </div>
            <div className="w-[15%]">
              <p>Email Sent</p>
              <p>23 Jan 2023</p>
            </div>
            <div className="w-[45%] flex justify-end">
              <Image
                src={getBasicIcon("More")}
                className={`w-[19px] rotate-90 cursor-pointer opacity-80`}
                alt=""
                width={19}
                height={19}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
         
         
        </div>))}
      </div>
    </>
  );
};

export default Deals;
