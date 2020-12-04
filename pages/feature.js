import Feed from "react-instagram-authless-feed";
import FeatureFilms from "../src/FeatureFilms";
import Navbar from "../src/Navbar";
import Head from "next/head";
import React from "react";

import { Typography } from "@material-ui/core";

export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>SAS: Feature Films</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="feature-html">
        <div className="feature-body">
          <FeatureFilms />
        </div>
      </div>
      <div className="feature-main">
        <Typography align="center" variant="h2" style={{ color: "white" }}>
          Follow us on Instagram
        </Typography>
        <div className="feature-text">
          <Feed
            userName="sasmoviestudio"
            className="Feed"
            classNameLoading="Loading"
            limit="15"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
