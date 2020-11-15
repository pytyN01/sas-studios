import IntroVideo from "../src/IntroVideo";
import Navbar from "../src/Navbar";
import Head from "next/head";
import React from "react";

export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>SAS: Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <IntroVideo />
    </React.Fragment>
  );
}
