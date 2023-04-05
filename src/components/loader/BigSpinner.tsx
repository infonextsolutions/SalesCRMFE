import React from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import classes from "./spinner.module.css";
const BigSpinner = () => {
  const router = useRouter();

  const [logged] = useLocalStorage("logged", "loading");
  const [id] = useLocalStorage("user-id", "not-loaded");
  const [name] = useLocalStorage("user-name", "not-loaded");
  const [role] = useLocalStorage("user-role", "not-loaded");

  const state = useSelector((state: any) => state.auth);

  React.useEffect(() => {
    if (!state.isLoggedIn) {
      if (logged === null) {
        router.replace("/login");
      }
    }
  }, [id, name, role, logged,router]);

  return (
    <div
      className="w-[100vw] h-[100vh] bg-white fixed top-0 left-0 z-10 flex items-center justify-center "
      style={{
        zIndex: 100,
      }}
    >
      <div className={classes.loader}>
        <span className={classes.dot}></span>
        <span className={classes.dot}></span>
        <span className={classes.dot}></span>
      </div>
    </div>
  );
};

export default BigSpinner;
