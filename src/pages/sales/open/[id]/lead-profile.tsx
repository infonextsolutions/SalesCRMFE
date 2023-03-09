import React from "react";
import Navigation from "@/components/app/Navigation";
import ProfilePage from "@/components/Profile/ProfilePage/LeadProfile";
import LeadProfileContainer from "@/components/Profile/LeadProfileContainer";
import dummy from "@/shared/dummy";

//Manya will make this page

const Profile = () => {

  const titles = ["CALL INFO","COMMENTS","NOTES","COACHING"];

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
        <div className="w-[280px] min-h-[70vh] bg-white rounded-xl p-[20px]">
          <ProfilePage />
        </div>
        <LeadProfileContainer titles={titles} current={0} info={dummy.leadInfo}/>
      </div>
      {/* write your code here for profile page manya! */}
    </div>
  );
};

export default Profile;