import { Typography } from "@material-ui/core";
import Navbar from "../src/Navbar";
import Email from "../src/Email";
import Head from "next/head";
import React from "react";

export default function Home() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>SAS: Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="parallax">
        <div className="parallax-text">
          <Typography align="center" variant="h6" gutterBottom>
            BEST SERVICE IN TOWN
          </Typography>
          <Typography align="center" variant="h2" gutterBottom>
            CALL US 24/7!
          </Typography>
          <Typography align="center" variant="h4" gutterBottom>
            (949) 250-9999
          </Typography>
        </div>
      </div>
      <div className="parallax-subtext">
        <Typography align="center" variant="h4" gutterBottom>
          SAS MOVIE STUDIOS LOS ANGELES DIVISION
        </Typography>
        <Typography align="center" variant="h6" gutterBottom>
          If you have any questions please reach out to us using the form below:
        </Typography>

        <Email />
      </div>
    </React.Fragment>
  );
}
