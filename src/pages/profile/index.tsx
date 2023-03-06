import React from "react";
import Navigation from "@/components/app/Navigation";
import ProfilePage from "@/components/Profile/ProfilePage";

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
      <h1>hello
      </h1>
    </div>
  );
};

export default Profile;