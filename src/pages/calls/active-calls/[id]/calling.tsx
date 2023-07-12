import React, { useState } from "react";
import Navigation from "@/components/app/Navigation";
import ProfilePage from "@/components/Profile/ProfilePage/LeadProfile";
import AudioProfileContainer from "@/components/Profile/AudioProfileContainer";
import dummy from "@/shared/dummy";
import Script from "@/components/activeCalls/Script/index.";
import RecordProfile from "@/components/Profile/RecordProfile";
import axios from "axios";
import Backdrop from "@/components/View/Backdrop/Center";
import MakeCall from "@/components/View/makeCall/index";
//Manya will make this page

const AudioProfile = ({ data, scripts }: any) => {
  const titles = ["LEAD INFO", "ACTIVITY HISTORY", "NOTES", "QUESTIONNAIRE"];

  const [make, setCall] = useState(false);
  const [bool, setBool] = useState(true);

  const cancelCall = () => {
    setBool(false);
    setTimeout(() => {
      setCall(false);
      setBool(true);
    }, 500);
  };

  const takeAction = (e: any, e1: any) => {
    if (e1 === 0) {
      console.log("email");
    } else if (e1 === 1) {
      console.log("meeting");
    } else if (e1 === 2) {
      console.log("task");
    }
    if (e1 === 3) {
      console.log("message");
    }
  };

  console.log(data);

  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
      {make && (
        <Backdrop bool={bool}>
          <MakeCall cancel={cancelCall} data={data.result} />
        </Backdrop>
      )}
      <Navigation
        title="Calls>Active Calls>Discussion on PX features"
        buttons={[
          // {
          //   text: "Refresh",
          //   dropdown: true,
          //   id: 1,
          //   light: false,
          //   list: [],
          //   onClick1: async () => {
          //     const url =
          //       "https://testsalescrm.nextsolutions.in/api/calling/call-status";
          //     axios.post(url, {
          //       sid: "8af470ce2b4befc3f0e8292d237e175b",
          //     }).then((e)=>{
          //       console.log(e.data);
          //     })
          //   },
          // },
          {
            text: "Make Call",
            dropdown: true,
            id: 1,
            light: false,
            list: [],
            onClick1: async () => {
              // const response = await axios.post(
              //   "https://testsalescrm.nextsolutions.in/api/calling/make-call",
              //   {
              //     callTo: "7669481778",
              //   }
              // );
              setCall(true);
            },
          },

          {
            text: "Take Action ",
            click: takeAction,
            dropdown: true,
            id: 1,
            icon: "Plus",
            light: false,
            list: [
              { title: "Email", Icon: "Mail" },
              { title: "Meeting", Icon: "Calendar" },
              { title: "Notes", Icon: "Tasks" },
              { title: "Message", Icon: "Chat" },
            ],
          },
        ]}
      />
      <div className="w-[100%] flex gap-[25px] mb-[100px] ">
        {/* <AudioProfileContainer
          width={"50%"}
          titles={titles}
          check={false}
          current={0}
          info={dummy.audioCallDetails}
        /> */}
        <RecordProfile
          width={"50%"}
          titles={titles}
          check={false}
          current={0}
          info={dummy.audioCallDetails}
        />
        <div className="w-[50%] min-h-[50vh] bg-white rounded-xl">
          <Script data={data.result} scripts={scripts} />
        </div>
      </div>
      {/* write your code here for profile page manya! */}
    </div>
  );
};

export default AudioProfile;

export async function getServerSideProps({ query, params }: any) {
  // "https://testsalescrm.nextsolutions.in/api/active-call/find-all"
  const response = await axios.get(
    `https://testsalescrm.nextsolutions.in/api/active-call/find-by-id?id=${params.id}`
  );
  const another = await axios.get(
    `https://testsalescrm.nextsolutions.in/api/call-script/active-call?activeCallId=${response.data.result._id}`
  );
  console.log(another);
  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data: response.data || {},
      scripts: another.data || {},
    }, // will be passed to the page component as props
  };
}
