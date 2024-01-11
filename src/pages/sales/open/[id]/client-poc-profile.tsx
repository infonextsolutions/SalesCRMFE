import Deals from "@/components/Profile/DealsContainer";
import ProfilePage from "@/components/Profile/ProfilePage/ClientPocProfile";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarWithButton from "@/components/app/Navbar/NavbarWithButton";
import { useRouter } from "next/router";

const ClientProfile = () => {
  const [data, setData] = useState<any>({});
  const [activeTitle, setActiveTitle] = useState(0);
  const router = useRouter();
  const { id } = router.query;
  const [accessToken, setAccessToken] = useState<any>("");

  useEffect(() => {
    if (window !== undefined) {
      setAccessToken(localStorage.getItem("access-token"));
    }
  }, []);

  useEffect(() => {
    axios.get(
      `https://sales365.trainright.fit/api/leads/find-by-id?id=${id}`, {
      headers: {
        Authorization: accessToken
      }
    }
    ).then((res: any) => {
      setData(res.data);
    }).catch((e: any) => { });
  }, [accessToken]);

  function CallBack(childData: any) {
    setActiveTitle(childData);
  }
  const titles = ["Deals"];
  const list = titles.map((title: any, i: any) => ({ id: i, title: title }));

  const [ttitle, setTitle] = useState(data?.result?.customerId?.customer_name);
  return (
    <div className="bg-white">
      <NavbarWithButton
        buttons={[]}
        mainTitle="Manage Leads"
        title={ttitle}
        src="manageLeadsIcon"
      />
      <div className="w-[100%] min-h-[90vh] pl-[20px] pr-[20px]">
        {/* <Navigation
          title={`Manage Leads > ${ttitle}`}
          buttons={
            [
              // {
              //   text: "Take Action",
              //   dropdown: true,
              //   id: 1,
              //   icon: "Plus",
              //   light: false,
              //   list: [
              //     // { title: "Call", Icon: "Phone" },
              //     { title: "Email", Icon: "Mail" },
              //     { title: "Meeting", Icon: "Calendar" },
              //     { title: "Task", Icon: "Tasks" },
              //     { title: "Message", Icon: "Chat" },
              //   ],
              // },
            ]
          }
        /> */}
        <div className="w-[100%] pl-4 flex gap-[25px] mb-[100px] mt-6">
          <div className="w-[32%] min-h-[70vh] bg-[#ffe3e170] rounded-xl p-[20px]">
            <ProfilePage
              refresh={(e: any) => {
                setTitle(e);
              }}
              data1={data}
            />
          </div>
          <div className="bg-[#F7F7F7] rounded-xl w-[70%] px-[25px]">
            <Deals data={data} type="customer" />
          </div>
        </div>
        {/* write your code here for profile page manya! */}
      </div>
    </div>
  );
};

export default ClientProfile;

export async function getServerSideProps({ query, params }: any) {
  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data: {},
    }, // will be passed to the page component as props
  };
}
