import React from "react";
import App from "next/app";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default class CMApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <div>
        <Head>
          <title>Page Title</title>
        </Head>
        <Nav />

        <Component />

        <Footer />
      </div>
    );
  }
}
