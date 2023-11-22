import BigSpinner from "@/components/loader/BigSpinner";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { setLoggedInStatus, setUser1 } from "@/store/auth";
import axios from "axios";
import { useRouter } from "next/router";
import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = React.lazy(() => import("@/views/Dashboard/index"));

const DashboardPage = ({ data1, data2, data3 }: any) => {
  const state = useSelector((state: any) => state.auth);
  const router = useRouter();

  const dispatch = useDispatch();

  const [logged] = useLocalStorage("logged", "loading");
  const [id] = useLocalStorage("user-id", "not-loaded");
  const [name] = useLocalStorage("user-name", "not-loaded");
  const [role] = useLocalStorage("user-role", "not-loaded");

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

  return (
    <>
      <Suspense fallback={<BigSpinner />}>
        {!state.isLoggedIn || logged === null ? (
          <BigSpinner />
        ) : (
          <Suspense fallback={<BigSpinner />}>
            <Dashboard data={{ first: data1, second: data2, third: data3 }} />
          </Suspense>
        )}
      </Suspense>
    </>
  );
};

export default DashboardPage;

// https://testsalescrm.nextsolutions.in/api/pitch-analysis/find-one

export async function getServerSideProps({ query, ...params }: any) {
  const date = {
    from: "2023-07-19",
    to: "2023-07-26",
  };
  const response1 = await axios.post(
    "https://testsalescrm.nextsolutions.in/api/pitch-analysis/find-one",
    date
  );
  const response2 = await axios.post(
    "https://testsalescrm.nextsolutions.in/api/script-analysis/find-one",
    date
  );
  const response3 = await axios.post(
    "https://testsalescrm.nextsolutions.in/api/selling-analysis/find-one",
    date
  );

  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data1: response1.data || {},
      data2: response2.data || {},
      data3: response3.data || {},
    }, // will be passed to the page component as props
  };
}
