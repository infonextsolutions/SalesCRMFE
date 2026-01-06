import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const callApi = createAsyncThunk(
  "api/callApi",
  async (options, thunkAPI) => {
    try {
      const response = await axios(options);
      return response.data;
    } catch (error) {
      // Log error for debugging
      console.error("API Error:", {
        url: options.url,
        method: options.method,
        error: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      
      // Show user-friendly error message
      const errorMessage = error.response?.data?.message || error.message || "An error occurred";
      toast.error(errorMessage);
      
      // Re-throw to let Redux Toolkit handle it properly
      throw error;
    }
  }
);
