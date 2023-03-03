import HomeLayout from "@/layouts/home";
import { store } from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </Provider>
  );
}