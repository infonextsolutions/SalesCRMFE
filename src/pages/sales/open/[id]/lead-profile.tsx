import React from "react";
import Navigation from "@/components/app/Navigation";
import ProfilePage from "@/components/Profile/ProfilePage/LeadProfile";
import LeadProfileContainer from "@/components/Profile/LeadProfileContainer";
import dummy from "@/shared/dummy";
import axios from "axios";
import {useState} from 'react';

const Profile = ({ data }: any) => {
  console.log("data10",data)
  

  const [data1,setData] = useState(data);

  const UpdateData = async () => {
    const response = await axios
      .get(
        `https://testsalescrm.nextsolutions.in/api/leads/find-by-id?id=${data._id}`
      )
      .then((e) => {
        setData(e.data);
      });
  };
  const titles = ["DEAL INFO", "ACTIVITY HISTORY", "ATTACHMENTS", "COACHING"];
  return (
    <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
      <Navigation
        title={`Manage Leads>${data.result.lead_title}`}
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
              { title: "Event", Icon: "Calendar" },
              { title: "Task", Icon: "Tasks" },
              { title: "Message", Icon: "Chat" },
            ],
          },
        ]}
      />
      <div className="w-[100%] flex gap-[25px] mb-[100px] ">
        <div className="w-[340px] min-h-[70vh] bg-white rounded-xl shrink-0 p-[20px]">
          <ProfilePage updated={UpdateData} data1={data.result} />
        </div>
        <LeadProfileContainer
          data={data1.result}
          titles={titles}
          current={0}
          info={dummy.leadInfo}
        />
      </div>
      {/* write your code here for profile page manya! */}
    </div>
  );
};

export default Profile;

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