import { useSelector } from "react-redux";

function useUI() {
  const ui = useSelector((state: any) => state.ui);
  const auth = useSelector((state: any) => state.auth);

  let menuOptions = ui.menuOptions;
  if (auth._id === "2") {
    menuOptions = [
      {
        title: "Dashboard",
        route: "dashboard",
        icon: "Grid",
        list: [],
      },
      {
        title: "Calling",
        route: "calls",
        list: [{ title: "Upload Calls", route: "upload-calls" }],
        icon: "Phone",
      },
      {
        title: "Indicator",
        route: "indicator",
        list: [{ title: "Indicator-basic", route: "basic" }],
        icon: "Zap",
      },
    ];
  }

  console.log(auth, 97261391);
  return {
    menuOpen: ui.menuOpen,
    menuOptions: menuOptions,
    loading: auth.isLoggedIn,
  };
}

export default useUI;
