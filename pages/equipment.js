import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import Fab from "@material-ui/core/Fab";
import Head from "next/head";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Hidden } from "@material-ui/core";

import Set from "../src/Set";
import Grip from "../src/Grip";
import Office from "../src/Office";
import Layout from "../src/Layout";
import Popular from "../src/Popular";
import Outdoor from "../src/Outdoor";
import EquipmentDrawer from "../src/Drawer";

const useStyles = makeStyles((theme) => ({
  fab: {
    zIndex: "99",
    color: "white",
    position: "fixed",
    top: theme.spacing(8),
    left: theme.spacing(4),
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.9)",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(27),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Home() {
  const classes = useStyles();
  const [drawer, setDrawer] = React.useState(false);
  const [expanded, setExpanded] = React.useState("popular");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>SAS: Rental Equipment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hidden smDown>
        <Layout>
          <Fab
            onClick={() => setDrawer(!drawer)}
            size="small"
            aria-label="show filter"
            className={classes.fab}
          >
            <KeyboardArrowRightIcon />
          </Fab>

          <EquipmentDrawer
            drawer={drawer}
            toggleDrawer={() => setDrawer(!drawer)}
          />

          <Accordion
            expanded={expanded === "popular"}
            onChange={handleChange("popular")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Most Popular Rental Equipment
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Popular />
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "office"}
            onChange={handleChange("office")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Office Equipment
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Office />
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "outdoor"}
            onChange={handleChange("outdoor")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Outdoor Equipment
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Outdoor />
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "set-design"}
            onChange={handleChange("set-design")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Set Design Equipment
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Set />
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "grip"}
            onChange={handleChange("grip")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Grip Equipment
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grip />
            </AccordionDetails>
          </Accordion>
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
