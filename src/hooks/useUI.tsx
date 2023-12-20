import { useSelector } from "react-redux";

function useUI() {
  const ui = useSelector((state: any) => state.ui);
  const auth = useSelector((state: any) => state.auth);
  console.log('>>>>>>>>>>>>>>>>>>>>>> UI & AUTH <<<<<<<<<<<<<<<<<<<<<', ui, auth);

  let menuOptions = ui.menuOptions;

  switch (auth.user.role) {
    case "TM":
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
          list: [
            { title: "Active Calls", route: "active-calls" },
            { title: "Recorded Calls", route: "recorded-calls" },
          ],
          icon: "fluent_call-end-16-regular",
        },
        {
          title: "Sales",
          route: "sales",
          list: [
            { title: "Open", route: "open" },
            { title: "Closed", route: "closed" },
          ],
          icon: "salesIcon",
        },
        {
          title: "Indicator",
          route: "indicator",
          list: [{ title: "Indicator-basic", route: "basic" }],
          icon: "Zap",
        },
        {
          title: "Teams",
          route: "teams",
          icon: "Teams",
          list: [],
        },
      ];
      break;
    case "QAE":
      menuOptions = [
        {
          title: "Dashboard",
          route: "dashboard",
          icon: "Grid",
          list: [],
        },
        {
          title: "Active Calls",
          route: "/qae/active-calls",
          list: [
            { title: "Allocated Calls", route: "allocated-calls" },
            { title: "Feedback Call Reviews", route: "feedback-call-reviews" },
          ],
          icon: "ActiveCalls",
        },
        {
          title: "Closed Calls",
          route: "closed-calls",
          list: [
            { title: "Allocated Calls", route: "allocated-calls" },
            { title: "Feedback Call Reviews", route: "feedback-call-reviews" },
          ],
          icon: "ClosedCalls",
        },
        {
          title: "Indicator",
          route: "indicator",
          list: [{ title: "Indicator-basic", route: "basic" }],
          icon: "Zap",
        },
        {
          title: "Teams",
          route: "teams",
          icon: "Teams",
          list: [],
        },
      ];
      break;
    case "QAM":
      menuOptions = [
        {
          title: "Insights",
          route: "dashboard",
          icon: "Insights",
          list: [],
        },
        {
          title: "Calls",
          route: "calls",
          list: [],
          icon: "fluent_call-end-16-regular",
        },
        {
          title: "Indicator",
          route: "indicator",
          list: [{ title: "Indicator-basic", route: "basic" }],
          icon: "Zap",
        },
      ];
      break;
    default:
      menuOptions = [
        {
          title: "Dashboard",
          route: "dashboard",
          icon: "Grid",
          list: [],
        },
        {
          title: "Calls",
          route: "calls",
          list: [
            { title: "Active Calls", route: "active-calls" },
            { title: "Recorded Calls", route: "recorded-calls" },
          ],
          icon: "fluent_call-end-16-regular",
        },
        {
          title: "Sales",
          route: "sales",
          list: [
            { title: "Open", route: "open" },
            { title: "Closed", route: "closed" },
          ],
          icon: "salesIcon",
        },
        {
          title: "Indicator",
          route: "indicator",
          list: [{ title: "Indicator-basic", route: "basic" }],
          icon: "Zap",
        },
      ];
  }

  return {
    menuOpen: ui.menuOpen,
    menuOptions: menuOptions,
    loading: auth.isLoggedIn,
  };
}

export default useUI;
