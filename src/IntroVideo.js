import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

import Link from "./Link";
import React from "react";

const useStyles = makeStyles((theme) => ({
  btn: {
    fontSize: "4rem",
    color: "white",
  },
  image: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
      "& $imageSrc": {
        filter: "grayscale(0%)",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    filter: "grayscale(100%)",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
    "&:hover, &$focusVisible": {
      "& $imageSrc": {
        filter: "grayscale(0%)",
      },
    },
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

export default function IntroVideo() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className="video-box">
        <video autoPlay playsInline muted>
          <source src="/Logo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="main">
        <div className="slogan-banner">
          <Typography variant="h3">
            Largest inventory! Lowest price! Guaranteed!!
          </Typography>
        </div>
        <ButtonBase
          component={Link}
          href="/equipment"
          naked
          focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(/equipment-sas.jpg)`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="h1"
              color="inherit"
              className={classes.imageTitle}
            >
              View Inventory
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>

        <div className="slogan-banner">
          <Typography variant="h3">Coast-to-Coast Film Locations!</Typography>
        </div>

        <ButtonBase
          component={Link}
          href="/locations"
          naked
          focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(/locations-sas.png)`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="h1"
              color="inherit"
              className={classes.imageTitle}
            >
              View Locations
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      </div>
    </React.Fragment>
  );
}
