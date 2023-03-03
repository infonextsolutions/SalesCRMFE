import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    user: {
      name: '',
      role: '',
    },
    _id: '',
    rights: [],
  },
  reducers: {
    setUser: (state, action) => {
      state._id = action.payload._id;
      state.user = action.payload.User ?? action.payload;
    },
    setRights: (state, action) => {
      state.rights = action.payload.rights;
    },
    setLoggedInStatus: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const {setUser, setLoggedInStatus, setRights} = authSlice.actions;

export default authSlice.reducer;