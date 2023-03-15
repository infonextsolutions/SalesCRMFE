import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: {
      name: "",
      role: "",
    },
    _id: "",
    rights: [],
    admin: false,
  },
  reducers: {
    setUser1: (state, action) => {
      state._id = action.payload._id;
      state.user = action.payload.User ?? action.payload;
      state.admin = action.payload.admin;
    },
    setRights: (state, action) => {
      state.rights = action.payload.rights;
    },
    setLoggedInStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setUser1, setLoggedInStatus, setRights } = authSlice.actions;

export default authSlice.reducer;
