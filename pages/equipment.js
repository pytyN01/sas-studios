import { Typography } from "@material-ui/core";
import Layout from "../src/Layout";
import Head from "next/head";
import React from "react";

import Office from "../src/Office";
import Outdoor from "../src/Outdoor";
import Popular from "../src/Popular";
import Set from "../src/Set";
import Grip from "../src/Grip";
import All from "../src/All";

export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Head>
        <title>SAS: Rental Equipment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography align="left" variant="h4" gutterBottom>
        Most Popular Rental Equipment
      </Typography>
      <Popular />

      <Typography align="left" variant="h4" gutterBottom>
        Office Equipment
      </Typography>
      <Office />

      <Typography align="left" variant="h4" gutterBottom>
        Outdoor Equipment
      </Typography>
      <Outdoor />

      <Typography align="left" variant="h4" gutterBottom>
        Set Design Equipment
      </Typography>
      <Set />

      <Typography align="left" variant="h4" gutterBottom>
        Grip Equipment
      </Typography>
      <Grip />

      <Typography align="left" variant="h4" gutterBottom>
        All Equipment
      </Typography>
      <All />
    </Layout>
  );
}
