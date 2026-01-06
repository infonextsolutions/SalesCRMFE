import Navbar from "@/components/app/Navbar/Navbar";
import BigSpinner from "@/components/loader/BigSpinner";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { setLoggedInStatus, setUser1 } from "@/store/auth";
import { baseUrl } from "@/utils/baseUrl";
import axios from "axios";
import { useRouter } from "next/router";
import React, { Suspense, useEffect, useState, startTransition } from "react";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = React.lazy(() => import("@/views/Dashboard/index"));

const DashboardPage = () => {
  const state = useSelector((state) => state.auth);
  const router = useRouter();
  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});
  const [accessToken, setAccessToken] = useState("");
  const [isClient, setIsClient] = useState(false);

  const dispatch = useDispatch();

  const [logged] = useLocalStorage("logged", "loading");
  const [id] = useLocalStorage("user-id", "not-loaded");
  const [name] = useLocalStorage("user-name", "not-loaded");
  const [role] = useLocalStorage("user-role", "not-loaded");

  const date = {
    from: "2023-07-19",
    to: "2023-07-26",
  };

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      setAccessToken(localStorage.getItem("access-token") || "");
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const token = localStorage.getItem("access-token");
    console.log('Token from localStorage:', token);
    
    if (token && token !== "null" && token !== "undefined") {
      setAccessToken(token);
    } else {
      console.log('No valid token found, redirecting to login');
      router.push("/login");
    }
  }, [isClient, router]);

  useEffect(() => {
    if (!isClient) return;

    if (!state.isLoggedIn) {
      if (logged === "loading" || logged === "loggedIn") {
        if (id === null || name === null || role === null) {
          router.push("/login");
          return;
        }
        if (id && name && role) {
          if (
            id !== "not-loaded" &&
            name !== "not-loaded" &&
            role !== "not-loaded"
          ) {
            startTransition(() => {
              dispatch(setLoggedInStatus(true));
              dispatch(setUser1({ _id: id, User: name, Role: role }));
            });
          }
        }
      } else if (logged === null) {
        router.push("/login");
      }
    }
  }, [id, name, role, logged, isClient, state.isLoggedIn, dispatch, router]);

  useEffect(() => {
    if (!isClient) return;

    if (!state.isLoggedIn || logged === null) {
      router.push("/login");
    }
  }, [state.isLoggedIn, logged, isClient, router]);

  if (!isClient) {
    return <BigSpinner />;
  }

  return (
    <>
      <Navbar mainTitle="Dashboard" src="Grid" />
      {!state.isLoggedIn || logged === null || logged !== "loggedIn" ? (
        <BigSpinner />
      ) : (
        <Suspense fallback={<BigSpinner />}>
          <Dashboard data={{ first: data1, second: data2, third: data3 }} />
        </Suspense>
      )}
    </>
  );
};

export default DashboardPage;
