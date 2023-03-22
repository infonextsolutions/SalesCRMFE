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
  },
  reducers: {
    setUser1: (state, action) => {
      state._id = action.payload._id;
      state.user.name = action.payload.User;
      state.user.role=action.payload.Role;
    },
    setRights: (state, action) => {
      state.rights = action.payload.rights;
    },
    setLoggedInStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    logout:(state)=>{
      state._id ="";
      state.user.name ="";
      state.user.role="";
    }
  },
});

export const { setUser1, setLoggedInStatus, setRights,logout } = authSlice.actions;

export default authSlice.reducer;
