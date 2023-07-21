import { createSlice } from "@reduxjs/toolkit";

const AISlice = createSlice({
  name: "Model",
  initialState: {
    error: "Error",
    errorShow: false,
    success: "Success",
    successShow: false,
  },
  reducers: {
    setError: (state, action) => {
      if (action.payload.show) {
        state.error = action.payload.error;
        state.errorShow = true;
      } else {
        state.errorShow = false;
      }
    },
    setSuccess: (state, action) => {
      if (action.payload.show) {
        state.success = action.payload.success;
        state.successShow = true;
      } else {
        state.successShow = false;
      }
    },
  },
});

export const { setError, setSuccess } = AISlice.actions;

export default AISlice.reducer;
