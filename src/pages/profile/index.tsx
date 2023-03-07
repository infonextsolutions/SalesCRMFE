import React from "react";
import Navigation from "@/components/app/Navigation";
import ProfilePage from "@/components/Profile/ProfilePage";
import axios from "axios";
//Manya will make this page

const Profile = () => {
  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
      <Navigation
        buttons={[
          {
            text: "Take Action",
            dropdown: false,
            id: 1,
            icon: "Plus",
            light: false,
          },
        ]}
      />
      <ProfilePage/>
      {/* write your code here for profile page manya! */}
      
      </div>
      
  );
};

export default Profile;