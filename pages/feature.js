import FeatureFilms from "../src/FeatureFilms";
import Navbar from "../src/Navbar";
import Head from "next/head";
import React from "react";

export default function Feature() {
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
        <div className="feature-text">Instagram Feed will be here</div>
      </div>
    </React.Fragment>
  );
}
