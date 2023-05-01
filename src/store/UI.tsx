import { createSlice } from "@reduxjs/toolkit";

const menuOptions = [
  {
    title: "Dashboard",
    route: "dashboard",
    icon: "Grid",
    list: [],
  },
  {
    title: "Sales",
    route: "sales",
    list: [
      { title: "Open", route: "open" },
      { title: "Closed", route: "closed" },
      { title: "Estimates and Insights", route: "estimates-and-insights" },
    ],
    icon: "Sort",
  },
  {
    title: "Calling",
    route: "calls",
    list: [
      { title: "Recorded Calls", route: "recorded-calls" },
      { title: "Call Library", route: "call-library" },
      { title: "Active Calls", route: "active-calls" },
    ],
    icon: "Phone",
  },
  {
    title: "Team",
    route: "team",
    list: [
      { title: "Team Performence", route: "team-performence" },
      { title: "Coaching", route: "coaching" },
    ],
    icon: "Tasks",
  },
  {
    title: "Indicator",
    route: "indicator",
    list: [
      { title: "Indicator-basic", route: "basic" },
    ],
    icon: "Zap",
  },
];

const UISlice = createSlice({
  name: "UI",
  initialState: {
    menuOpen: false,
    menuOptions: menuOptions,
  },
  reducers: {
    openMenu: (state) => {
      state.menuOpen = true;
    },
    closeMenu: (state) => {
      state.menuOpen = true;
    },
    triggerMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { openMenu, closeMenu, triggerMenu } = UISlice.actions;

export default UISlice.reducer;
