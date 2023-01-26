import React from "react";
import App from "next/app";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/index.css";

export default function CMApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Next.js</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        />
      </Head>

      <Nav />
      <div className="index-content">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  );
}
