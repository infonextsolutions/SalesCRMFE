import axios from "axios";
import { useRouter } from "next/router";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInStatus, setUser1 } from "@/store/auth";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import BigSpinner from "@/components/loader/BigSpinner";
import { ExotelKey, ExotelToken } from "@/utils/urlHelper";
import Navbar from "@/components/app/Navbar/Navbar";

const SalesOpen = React.lazy(() => import("@/views/sales/allocated"));

export default function Open() {
  const [data, setData] = useState<any>({});
  const [mastersData, setMastersData] = useState<any>({});
  const [tmData, setTmData] = useState<any>({});
  const [sdrBdmData, setSdrBdmData] = useState<any>({});
  const state = useSelector((state: any) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  const [logged] = useLocalStorage("logged", "loading");
  const [id] = useLocalStorage("user-id", "not-loaded");
  const [name] = useLocalStorage("user-name", "not-loaded");
  const [role] = useLocalStorage("user-role", "not-loaded");
  const [accessToken, setAccessToken] = useState<any>("");

  useEffect(() => {
    if (window !== undefined) {
      setAccessToken(localStorage.getItem("access-token"));
    }
  }, []);

  useEffect(() => {
    axios.get(
      "https://sales365.trainright.fit/api/master-users/find-all", {
      headers: { Authorization: accessToken }
    }
    )
      .then((res: any) => {
        setMastersData(res.data);
      }).catch((e: any) => { });
    axios.get(
      "https://sales365.trainright.fit/api/master-users/getTeamManagerList", {
      headers: {
        Authorization: accessToken
      }
    }
    ).then((res: any) => {
      setTmData(res.data);
    }).catch((e: any) => { });
    axios.get(
      "https://sales365.trainright.fit/api/master-users/getTeamSDRAndBDMList", {
      headers: {
        Authorization: accessToken
      }
    }
    ).then((res: any) => {
      setSdrBdmData(res.data);
    }).catch((e: any) => { });
  }, [accessToken]);

  React.useEffect(() => {
    const userId = window !== undefined ? localStorage.getItem("user-id") : ""
    axios.get(`https://sales365.trainright.fit/api/leads/allocatedLeads?qaStatus=allocated&qaId=${userId}`, { headers: { Authorization: accessToken } })
      .then((res: any) => {
        setData(res?.data);
      })
      .catch((err: any) => {

      });
  }, [accessToken]);

  React.useEffect(() => {
    if (!state.isLoggedIn) {
      if (logged === "loading" || logged === "loggedIn") {
        if (id === null || name === null || role === null) {
          router.push("/login");
        }
        if (id && name && role) {
          if (
            id !== "not-loaded" &&
            name !== "not-loaded" &&
            role !== "not-loaded"
          ) {
            dispatch(setUser1({ _id: id, User: name, Role: role }));
            dispatch(setLoggedInStatus(true));
          }
        }
      } else if (logged === null) {
        router.push("/login");
      }
    }
  }, [id, name, role, logged]);

  React.useEffect(() => {
    if (!state.isLoggedIn) {
      if (logged === null) {
        router.push("/login");
      }
    }
  }, [state.isLoggedIn, logged]);

  // 

  return (
    <>
      <Navbar mainTitle="Sales" title="Allocated Leads" src="salesIcon" />
      <Suspense fallback={<BigSpinner />}>
        {!state.isLoggedIn || logged === null ? (
          <BigSpinner />
        ) : (
          <Suspense fallback={<BigSpinner />}>
            <SalesOpen data={data} mastersData={mastersData} teamManagersData={tmData} sdrBdmData={sdrBdmData} />
          </Suspense>
        )}
      </Suspense>
    </>
  );
}

// export async function getServerSideProps({ query, ...params }: any) {
//   try {
//     const response = await axios.get(
//       "https://sales365.trainright.fit/api/leads/find-all?leadStatus=Open"
//     );
//     const response2 = await axios.get(
//       "https://sales365.trainright.fit/api/master-users/find-all"
//     );
//     return {
//       props: {
//         // TODO: Can do better error handling here by passing another property error in the component
//         data: response.data || {},
//         mastersData: response2.data || {}
//       }, // will be passed to the page component as props
//     };
//   } catch (error) {
//     return {
//       props: {
//         // TODO: Can do better error handling here by passing another property error in the component
//         data: {},
//         mastersData: {}
//       }, // will be passed to the page component as props
//     };
//   }
// }
