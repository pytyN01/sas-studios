import { Typography, Grid, Button } from "@material-ui/core";
import Navbar from "../src/Navbar";
import Iframe from "react-iframe";
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

      <div>
        <section className="section parallax greeting">
          <div
            style={{
              background: "rgba(0,0,0,0.5)",
              padding: "6%",
              borderRadius: "40px",
            }}
          >
            <Typography align="center" variant="h1">
              SAS MOVIE STUDIOS
            </Typography>
            <Typography align="center" variant="h2" gutterBottom>
              CALL US 24/7!
            </Typography>
            <Typography align="center" variant="h4">
              (949) 250-9999
            </Typography>
            <div style={{ marginTop: "40px", textAlign: "center" }}>
              <Button
                variant="contained"
                href="#footer"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  fontSize: "2rem",
                }}
              >
                Contact Us Now
              </Button>
            </div>
          </div>
        </section>
        <section className="section2 parallax Tennessee">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.578024608965!2d-86.89030908486039!3d36.540173489993464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864556e9147cadf%3A0xa4c7d529747b6eaa!2s210%20Charles%20Ralph%20Dr%2C%20Springfield%2C%20TN%2037172!5e0!3m2!1sen!2sus!4v1607120035266!5m2!1sen!2sus"
                width="100%"
                height="775px"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                background: "url(/T.jpg) no-repeat center center fixed",
                backgroundSize: "cover",
              }}
              className="center-text"
            >
              <div
                style={{
                  color: "white",
                  background: "rgba(0,0,0,0.7)",
                  padding: "6%",
                  borderRadius: "25px",
                }}
              >
                <Typography align="center" variant="h2" gutterBottom>
                  Tennessee
                </Typography>
                <Typography align="center" variant="h6">
                  Fully renovated with film studios, our Tennessee base is home
                  to the next film studios on the east coast!
                </Typography>
              </div>
            </Grid>
          </Grid>
        </section>
        <section className="section2 parallax Kentucky">
          <Grid container spacing={0}>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                background: "url(/K.jpg) no-repeat center center fixed",
                backgroundSize: "cover",
              }}
              className="center-text"
            >
              <div
                style={{
                  color: "white",
                  background: "rgba(0,0,0,0.7)",
                  padding: "6%",
                  borderRadius: "25px",
                }}
              >
                <Typography align="center" variant="h3" gutterBottom>
                  Kentucky
                </Typography>
                <Typography align="center" variant="h6">
                  SAS owns natural filming locations in Kentucky that include a
                  full scale town, restaurants, and a magnificent cave.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25434.201752583594!2d-85.9293050568692!3d37.16992990917649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886621b4a78bb443%3A0x391d89602eb7e652!2sHorse%20Cave%2C%20KY%2042749!5e0!3m2!1sen!2sus!4v1607128754476!5m2!1sen!2sus"
                width="100%"
                height="775px"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              />
            </Grid>
          </Grid>
        </section>
        <section className="section2 parallax Los-Angeles">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.080230355274!2d-118.22390488492094!3d34.067457524375804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6646c68be15%3A0xfb25f66d521d7960!2s501%20S%20Avenue%2017%2C%20Los%20Angeles%2C%20CA%2090031!5e0!3m2!1sen!2sus!4v1607128869748!5m2!1sen!2sus"
                width="100%"
                height="775px"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                background: "url(/LA.jpg) no-repeat center center fixed",
                backgroundSize: "cover",
              }}
              className="center-text"
            >
              <div
                style={{
                  color: "white",
                  background: "rgba(0,0,0,0.7)",
                  padding: "6%",
                  borderRadius: "25px",
                }}
              >
                <Typography align="center" variant="h3" gutterBottom>
                  Los Angeles
                </Typography>
                <Typography align="center" variant="h6">
                  Located in Downtown, LA, the LA division operates with film
                  production, offering rental services for film equipment,
                  locations, crew, and other resources for your production
                  needs!
                </Typography>
              </div>
            </Grid>
          </Grid>
        </section>
        <section className="section footer" id="footer">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography align="center" variant="h6" gutterBottom>
                If you have any questions please reach out to us using the form
                below:
              </Typography>
              <Email />
            </Grid>
          </Grid>
        </section>
      </div>
    </React.Fragment>
  );
}
