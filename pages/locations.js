import { Typography, Hidden } from "@material-ui/core";
import Card from "../src/Loc-Card";
import Layout from "../src/Layout";
import Head from "next/head";
import React from "react";

export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>SAS: Rental Locations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hidden smDown>
        <Layout>
          <Typography align="left" variant="h4" gutterBottom>
            Rental Locations
          </Typography>
          <Card />
        </Layout>
      </Hidden>

      <Hidden mdUp>
        <div
          style={{
            height: "100vh",
            width: "100vw",
            color: "white",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography align="center" variant="h6">
            Currently working on mobile site. <br />
            Please use on your desktop.
          </Typography>
        </div>
      </Hidden>
    </React.Fragment>
  );
}
