import Navbar from "../src/Navbar";
import Head from "next/head";
import React from "react";

export default function Locations() {
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <React.Fragment>
      <Head>
        <title>SAS: Rental Locations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </React.Fragment>
  );
}
