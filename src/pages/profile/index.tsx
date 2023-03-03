import React from "react";
import Navigation from "@/components/app/Navigation";

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
      {/* write your code here for profile page manya! */}
    </div>
  );
};

export default Profile;