import Navigation from "@/components/app/Navigation";
import Deals from "@/components/Profile/DealsContainer";
import ProfilePage from "@/components/Profile/ProfilePage/CompanyProfile";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/app/Navbar/Navbar";
import { useRouter } from "next/router";

const CompanyProfile = () => {
  const [data, setData] = useState({});
  const [accessToken, setAccessToken] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = React.useState(
    data?.result?.companyId?.company_name
  );

  useEffect(() => {
    if (window !== undefined) {
      setAccessToken(localStorage.getItem("access-token"));
    }
  }, []);

  useEffect(() => {
    axios
      .get(`https://sales365.trainright.fit/api/leads/find-by-id?id=${id}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {});
  }, [accessToken]);

  return (
    <div className="bg-white">
      <Navbar mainTitle="Manage Leads" title={title} src="manageLeadsIcon" />
      <div className="w-[100%] min-h-[90vh] pl-[20px] pr-[20px] pt-6">
        <div className="w-[100%] flex gap-[25px] mb-[100px] ">
          <div className="w-[450px] shrink-0 min-h-[70vh] bg-[#ffe3e170] rounded-xl p-[20px]">
            <ProfilePage
              refresh={(e) => {
                setTitle(e);
              }}
              data1={data}
            />
          </div>
          <div className="bg-[#F7F7F7] rounded-xl w-[100%] px-[25px]">
            <Deals data={data} type="company" />
          </div>
        </div>
        {/* write your code here for profile page manya! */}
      </div>
    </div>
  );
};

export default CompanyProfile;

export async function getServerSideProps({ query, params }) {
  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data: {},
    }, // will be passed to the page component as props
  };
}
