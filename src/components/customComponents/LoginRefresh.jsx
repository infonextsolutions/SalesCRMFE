import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderComponent from "./ComponentRenderer.jsx";
import { useRouter } from "next/navigation.js";
import { setLoggedInStatus, setUser1 } from "@/store/auth";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const LoginRefresh = ({ component }) => {
  const router = useRouter();
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [logged] = useLocalStorage("logged", "loading");
  const [id] = useLocalStorage("user-id", "not-loaded");
  const [name] = useLocalStorage("user-name", "not-loaded");
  const [role] = useLocalStorage("user-role", "not-loaded");

  const [check, setCheck] = useState(false);
  useEffect(() => {
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

  useEffect(() => {
    if (!state.isLoggedIn) {
      if (logged === null) {
        router.push("/login");
      }
    }
  }, [state.isLoggedIn, logged]);
  return <>{<RenderComponent jsonToRender={component} />}</>;
};

export default LoginRefresh;
