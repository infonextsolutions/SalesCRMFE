import Navigation from "@/components/app/Navigation";
import Deals from "@/components/Profile/DealsContainer";
import ProfilePage from "@/components/Profile/ProfilePage/CompanyProfile";
import React from "react";
import axios from "axios";
import Navbar from "@/components/app/Navbar/Navbar";

const CompanyProfile = ({ data }: any) => {
  const [title, setTitle] = React.useState(data?.result?.companyId?.company_name);

  return (
    <>
      <Navbar title="Manage Leads" src="manageLeadsIcon" />
      <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
        <Navigation
          title={`Manage Leads>${title}`}
          buttons={
            [
              //   {
              //     text: "Take Action",
              //     dropdown: true,
              //     id: 1,
              //     icon: "Plus",
              //     light: false,
              //     list: [
              //       { title: "Call", Icon: "Phone" },
              //       { title: "Email", Icon: "Mail" },
              //       { title: "Event", Icon: "Calendar" },
              //       { title: "Task", Icon: "Tasks" },
              //       { title: "Message", Icon: "Chat" },
              //     ],
              //   },
            ]
          }
        />
        <div className="w-[100%] flex gap-[25px] mb-[100px] ">
          <div className="w-[320px] shrink-0 min-h-[70vh] bg-white rounded-xl p-[20px]">
            <ProfilePage
              refresh={(e: any) => {
                setTitle(e);
              }}
              data1={data}
            />
          </div>
          <div className="bg-white rounded-xl w-[100%] px-[25px]">
            <Deals />
          </div>
        </div>
        {/* write your code here for profile page manya! */}
      </div>
    </>
  );
};

export default CompanyProfile;

export async function getServerSideProps({ query, params }: any) {
  const response = await axios.get(
    `https://salescrmbe.onrender.com/api/leads/find-by-id?id=${params.id}`
  );
  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data: response.data || {},
    }, // will be passed to the page component as props
  };
}
