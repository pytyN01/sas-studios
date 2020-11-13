import Layout from "../src/Layout";
import Card from "../src/card";
import Head from "next/head";
import React from "react";
import { Container, Typography } from "@material-ui/core";

export default function Equipment() {
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <Layout>
      <Head>
        <title>SAS: Rental Equipment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}

      <Typography align="center" variant="h1" gutterBottom>
        Rental Equipment
      </Typography>
      <Card />
    </Layout>
  );
}
