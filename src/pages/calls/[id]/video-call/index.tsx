import React from "react";
import Navigation from "@/components/app/Navigation";
import ProfilePage from "@/components/Profile/ProfilePage/LeadProfile";
import AudioProfileContainer from "@/components/Profile/AudioProfileContainer";
import dummy from "@/shared/dummy";
import Video from "@/components/activeCalls/video";

//Manya will make this page

const CallProfile = () => {
  const titles = ["CALL INFO","COMMENTS","NOTES","COACHING"];
  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
      <Navigation
      title="Calls>Recorided Calls>Discussion on PX features"
        buttons={[
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
        <div className="w-[50%] min-h-[50vh] bg-white rounded-xl " >
            <Video/>
        </div>
        <AudioProfileContainer width={"50%"} titles={titles} check={true} current={0} info={dummy.audioCallDetails}/>
      </div>
      {/* write your code here for profile page manya! */}
    </div>
  );
};

export default CallProfile;