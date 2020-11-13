import Navbar from "../src/Navbar";
import Head from "next/head";
import React from "react";

export default function Contact() {
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <React.Fragment>
      <Head>
        <title>SAS: Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </React.Fragment>
  );
}
