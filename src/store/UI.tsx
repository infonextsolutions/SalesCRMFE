import { createSlice } from "@reduxjs/toolkit";

const menuOptions=[
  {
    title: "Dashboard",
    route:"dashboard",
    icon: "Grid",
    list: [],
  },
  {
    title: "Sales",
    route:"sales/open",
    list: [
      // { title: "Open",route:"open" },
      // { title: "Closed",route:"closed" },
      // { title: "Estimates and Insights",route:"estimates-and-insights" },
    ],
    icon: "Sort",
  },
  {
    title: "Calling",
    route:"calls",
    list:[],
    icon: "Phone",
  },
  {
    title: "Coaching",
    route:"coaching",
    list:[],
    icon: "Tasks",
  },
]

const UISlice = createSlice({
  name: "UI",
  initialState: {
    menuOpen: false,
    menuOptions:menuOptions
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
    }
  },
});

export const { openMenu, closeMenu, triggerMenu } = UISlice.actions;

export default UISlice.reducer;
