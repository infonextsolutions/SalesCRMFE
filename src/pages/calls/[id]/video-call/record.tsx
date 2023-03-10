import React from "react";
import Navigation from "@/components/app/Navigation";
import ProfilePage from "@/components/Profile/ProfilePage/LeadProfile";
import AudioProfileContainer from "@/components/Profile/AudioProfileContainer";
import dummy from "@/shared/dummy";

//Manya will make this page

const VideoProfile = () => {
  const titles = ["LEAD INFO","ACTIVITY HISTORY","NOTES"];
  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
      <Navigation
      title="Profile"
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
        <div className="bg-white rounded-xl px-[12px] pt-[18px] w-[100%]">
          <div className="h-[440px] bg-[#EDEDED] flex justify-center items-center text-[#000000]">
            <p className="text-[40px] leading-[60px] font-medium">LIVE VIDEO MEETING</p>
          </div>
          <AudioProfileContainer width={"50%"} titles={titles} check={false} current={0} info={dummy.audioCallDetails}/>
        </div>
        <div className="w-[50%] min-h-[50vh] bg-white rounded-xl" >

        </div>
      </div>
      {/* write your code here for profile page manya! */}
    </div>
  );
};

export default VideoProfile;