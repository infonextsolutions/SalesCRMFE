import BigSpinner from "@/components/loader/BigSpinner";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { setLoggedInStatus, setUser1 } from "@/store/auth";
import { useRouter } from "next/router";
import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = React.lazy(() => import("@/views/Dashboard/index"));

const DashboardPage = () => {
  const state = useSelector((state: any) => state.auth);
  const router = useRouter();
  console.log("running");


  const dispatch = useDispatch();

  const [logged] = useLocalStorage("logged", "loading");
  const [id] = useLocalStorage("user-id", "not-loaded");
  const [name] = useLocalStorage("user-name", "not-loaded");
  const [role] = useLocalStorage("user-role", "not-loaded");

  React.useEffect(() => {
    if (!state.isLoggedIn) {
      if (logged === "loading" || logged === "loggedIn") {
        if (id === null || name === null || role === null) {
          router.replace("/login");
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
        router.replace("/login");
      }
    }
  }, [id, name, role, logged]);

  React.useEffect(() => {
    if (!state.isLoggedIn) {
      if (logged === null) {
        router.replace("/login");
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
            <Dashboard />
          </Suspense>
        )}
      </Suspense>
    </>
  );
};

export default DashboardPage;
