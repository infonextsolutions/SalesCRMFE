import Navigation from "@/components/app/Navigation";
import Deals from "@/components/Profile/DealsContainer";
import ProfilePage from "@/components/Profile/ProfilePage/CompanyProfile";
import React from "react";
import axios from "axios";
const CompanyProfile = ({ data }: any) => {
  return (<div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
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
    <div className="w-[35%] min-h-[70vh] bg-white rounded-xl p-[20px]">
      <ProfilePage data={data}/>
    </div>
    <div className="bg-white rounded-xl w-[100%] px-[25px]">
            <Deals/>
        </div>
  </div>
  {/* write your code here for profile page manya! */}
</div>)
};

export default CompanyProfile;

export async function getServerSideProps({ query, params }: any) {
  const response = await axios.get(
    `https://testsalescrm.nextsolutions.in/api/leads/find-by-id?id=${params.id}`
  );
  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data: response.data || {},
    }, // will be passed to the page component as props
  };
}
