import HomeLayout from "@/layouts/home";
import { store } from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import React,{Suspense} from 'react';
import Spinner from "@/components/loader/spinner";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <HomeLayout>
        <Suspense fallback={<Spinner/>}>
        <Component {...pageProps} />
        </Suspense>
      </HomeLayout>
    </Provider>
  );
}