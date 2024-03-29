import React, { useEffect } from "react";
import Navigation from "@/components/app/Navigation";
import ProfilePage from "@/components/Profile/ProfilePage/LeadProfile";
import LeadProfileContainer from "@/components/Profile/LeadProfileContainer";
import dummy from "@/shared/dummy";
import axios from "axios";
import { useState } from "react";
import Backdrop from "@/components/View/Backdrop/Center";
import Events from "@/components/View/Event/Events";
import EmailPage from "@/components/View/Email/index";
import Notes from "@/components/View/Notes";
import Messages from "@/components/View/messages";
import ActiveCall from "@/components/View/active-call-add";
import Navbar from "@/components/app/Navbar/Navbar";
import { useRouter } from "next/router";
import { baseUrl } from "@/utils/baseUrl";

const Profile = () => {
  const [data, setData1] = useState({});
  const [data1, setData] = useState({});
  const [accessToken, setAccessToken] = useState("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (window !== undefined) {
      setAccessToken(localStorage.getItem("access-token"));
    }
  }, []);

  useEffect(() => {
    axios
      .get(`${baseUrl}api/leads/find-by-id?id=${id}`, {
        headers: { Authorization: accessToken },
      })
      .then((res) => {
        setData1(res.data);
        setData(res.data);
      })
      .catch((e) => {});
  }, [accessToken]);

  const UpdateData = async () => {
    const response = await axios
      .get(`${baseUrl}api/leads/find-by-id?id=${data?.result?._id}`, {
        headers: { Authorization: accessToken },
      })
      .then((e) => {
        setData(e.data);
      })
      .catch(() => {});
  };
  const titles = ["DEAL INFO", "ACTIVITY HISTORY", "ATTACHMENTS"];

  const [notes, setNotes] = React.useState(false);
  const [events, setEvents] = React.useState(false);
  const [notes1, setNotes1] = React.useState(false);
  const [emails, setEmail] = React.useState(false);
  const [messages, setMessages] = React.useState(false);
  const [bool, setBool] = React.useState(true);
  const [call, setCall] = React.useState(false);

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

  const AddLead = (e, e1) => {
    if (e1 === 0) {
      showCall();
    } else if (e1 === 1) {
      showEmail();
    } else if (e1 === 2) {
      showEvents();
    } else if (e1 === 3) {
      showNotes();
    } else if (e1 === 4) {
      showMessages();
    }
  };

  return (
    <>
      <Navbar mainTitle="Sales" title="Close" src="manageLeadsIcon" />
      <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
        {notes && (
          <Backdrop bool={bool}>
            <Notes
              cancel={cancelNotes}
              update={UpdateData}
              leadid={data.result._id}
            />
          </Backdrop>
        )}
        {events && (
          <Backdrop bool={bool} pad={"50px 0"}>
            <Events cancel={cancelEvents} />
          </Backdrop>
        )}
        {emails && (
          <Backdrop bool={bool} pad={"50px 0"}>
            <EmailPage
              refresh={(e) => {
                UpdateData();
              }}
              cancel={cancelEmails}
              data={data1.result}
              leadIdResult={data.result._id}
            />
          </Backdrop>
        )}
        {messages && (
          <Backdrop bool={bool} pad={"50px 0"}>
            <Messages
              cancel={cancelMessages}
              companyName={data1?.result?.companyId?.company_name}
            />
          </Backdrop>
        )}
        {call && (
          <Backdrop bool={bool} pad={"50px 0"}>
            <ActiveCall
              cancel={cancelCall}
              id={data1.result._id}
              refresh={() => {
                UpdateData();
              }}
              companyId={data1.result.companyId._id}
              companyName={data1?.result?.companyId?.company_name}
              lead={data1.result}
              customerId={data1.result.customerId._id}
            />
          </Backdrop>
        )}
        <Navigation
          title={`${data1?.result?.lead_title} - Info`}
          buttons={[
            {
              text: "Take Action",
              dropdown: true,
              id: 1,
              icon: "Plus",
              click: AddLead,
              light: false,
              dark: true,
              list: [
                { title: "Call", Icon: "Phone" },
                { title: "Email", Icon: "Mail" },
                { title: "Event", Icon: "Calendar" },
                { title: "Add note", Icon: "Tasks" },
                { title: "Message", Icon: "Chat" },
              ],
            },
          ]}
        />
        <div className="w-[100%] flex gap-[25px] mb-[100px] ">
          <div className="w-[340px] min-h-[70vh] bg-white rounded-xl shrink-0 p-[20px]">
            <ProfilePage updated={UpdateData} data1={data?.result} />
          </div>
          <LeadProfileContainer
            data={data1?.result}
            titles={titles}
            current={0}
            info={dummy.leadInfo}
          />
        </div>
        {/* write your code here for profile page manya! */}
      </div>
    </>
  );
};

export default Profile;

export async function getServerSideProps({ query, params }) {
  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data: {},
    }, // will be passed to the page component as props
  };
}
