import { createSlice } from "@reduxjs/toolkit";

const menuOptions=[
  {
    title: "Dashboard",
    icon: "Grid",
    list: [],
  },
  {
    title: "Sales",
    list: [
      { title: "Open" },
      { title: "Closed" },
      { title: "Estimates and Insights" },
    ],
    icon: "Sort",
  },
  {
    title: "Calling",
    icon: "Phone",
  },
  {
    title: "Coaching",
    icon: "Tasks",
  },
]

const UISlice = createSlice({
  name: "UI",
  initialState: {
    menuOpen: false,
    menuOptions:menuOptions ,
    menuSelected:{i:1,list:1}
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
    selectMenuClick:(state,action)=>{
      state.menuSelected=action.payload;
    }
  },
});

export const { openMenu, closeMenu, triggerMenu,selectMenuClick } = UISlice.actions;

export default UISlice.reducer;
