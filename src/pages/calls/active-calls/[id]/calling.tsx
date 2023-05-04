import React from "react";
import Navigation from "@/components/app/Navigation";
import ProfilePage from "@/components/Profile/ProfilePage/LeadProfile";
import AudioProfileContainer from "@/components/Profile/AudioProfileContainer";
import dummy from "@/shared/dummy";
import Script from "@/components/activeCalls/Script/index.";
import RecordProfile from "@/components/Profile/RecordProfile";
import axios from "axios";

//Manya will make this page

const AudioProfile = () => {
  const titles = ["LEAD INFO", "ACTIVITY HISTORY", "NOTES", "QUESTIONNAIRE"];
  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
      <Navigation
        title="Calls>Active Calls>Discussion on PX features"
        buttons={[
          {
            text: "Make Call",
            dropdown: true,
            id: 1,
            light: false,
            list: [],
            onClick1: async () => {
              const response = await axios.post(
                "https://testsalescrm.nextsolutions.in/api/calling/make-call",{
                  callTo:"7669481778"
                }
              );
              console.log(response.data);
            },
          },
          {
            text: "Take Action",
            dropdown: true,
            id: 1,
            icon: "Plus",
            light: false,
            list: [
              { title: "Call", Icon: "Phone" },
              { title: "Email", Icon: "Mail" },
              { title: "Meeting", Icon: "Calendar" },
              { title: "Task", Icon: "Tasks" },
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
          <Script />
        </div>
      </div>
      {/* write your code here for profile page manya! */}
    </div>
  );
};

export default AudioProfile;
