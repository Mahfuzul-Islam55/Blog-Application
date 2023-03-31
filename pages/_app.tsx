import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Navbar from "./component/Navbar";
import { Provider } from "react-redux";
import store from "../Redux/store";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}
