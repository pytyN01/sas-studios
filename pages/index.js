import IntroVideo from "../src/IntroVideo";
import Navbar from "../src/Navbar";
import Head from "next/head";
import React from "react";
import { Hidden, Typography } from "@material-ui/core";

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
      <Hidden smDown>
        <Navbar />

        <IntroVideo />
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
