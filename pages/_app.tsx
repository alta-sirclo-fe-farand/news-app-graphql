import Head from "next/head";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.css";
import client from "../utils/apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="#3c1742" />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </React.Fragment>
  );
}

export default MyApp;
