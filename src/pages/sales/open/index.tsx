import axios from "axios";
import { useRouter } from "next/router";
import React, { Suspense, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInStatus, setUser1 } from "@/store/auth";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import BigSpinner from "@/components/loader/BigSpinner";

const SalesOpen = React.lazy(() => import("@/views/sales/open"));

export default function Open({ data }: any) {
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
          router.replace("/login");
        }
        if (id && name && role) {
          if (
            id !== "not-loaded" &&
            name !== "not-loaded" &&
            role !== "not-loaded"
          ) {
            console.log(id, name, role, "only check her");
            dispatch(setUser1({ _id: id, User: name, Role: role }));
            dispatch(setLoggedInStatus(true));
          }
        }
      } else if (logged === null) {
        router.replace("/login");
      }
    }
  }, [id, name, role, logged]);

  React.useEffect(()=>{
    if(!state.isLoggedIn){
      if(logged===null){
        router.replace("/login");
      }
    }
  },[state.isLoggedIn,logged])
  console.log(id, name, role, logged);

  return (
    <>
      <Suspense fallback={<BigSpinner />}>
        {!state.isLoggedIn || logged === null ? (
          <BigSpinner />
        ) : (
          <Suspense fallback={<BigSpinner />}>
            <SalesOpen data={data} />
          </Suspense>
        )}
      </Suspense>
    </>
  );
}

export async function getServerSideProps({ query, ...params }: any) {
  console.log(params.limit, params.page);
  const response = await axios.get(
    "https://testsalescrm.nextsolutions.in/api/leads/find-all"
  );
  console.log(response.data, "only check this!");
  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data: response.data || {},
    }, // will be passed to the page component as props
  };
}
