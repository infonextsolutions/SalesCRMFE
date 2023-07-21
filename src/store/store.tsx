import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import auth from "./auth";
import UI from "./UI";
import Ai from "./ai";

export const store = configureStore({
  reducer: { ui: UI, auth: auth, ai: Ai },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
