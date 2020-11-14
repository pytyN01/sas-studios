import { Typography } from "@material-ui/core";
import Card from "../src/Loc-Card";
import Layout from "../src/Layout";
import Head from "next/head";
import React from "react";

export default function Locations() {
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <Layout>
      <Head>
        <title>SAS: Rental Locations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography align="center" variant="h1" gutterBottom>
        Rental Locations
      </Typography>
      <Card />
    </Layout>
  );
}
