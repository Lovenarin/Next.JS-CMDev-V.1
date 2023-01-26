import React from "react";
import App from "next/app";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/index.css";

export default class CMApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <div>
        <Head>
          <title>Page Title</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
            crossOrigin="anonymous"
          />

          {/* <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
            integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
            integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD"
            crossorigin="anonymous"
          ></script> */}
        </Head>

        <Nav />
        <div className="index-content">
          <Component />
        </div>

        <Footer />
      </div>
    );
  }
}
