import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const OUTDOOR = [
  {
    url: "/5-gal-water.webp",
    title: "5-Gal Water Jug",
    width: "33.3%",
  },
  {
    url: "/astro-turf.webp",
    title: "Astro Turf",
    width: "33.3%",
  },
  {
    url: "/bull-horn.webp",
    title: "Bull Horn",
    width: "33.3%",
  },
  {
    url: "/cone.webp",
    title: "Cone",
    width: "33.3%",
  },
  {
    url: "/cooler.webp",
    title: "Cooler",
    width: "33.3%",
  },
  {
    url: "/crash-pad.webp",
    title: "Crash Pad",
    width: "33.3%",
  },
  {
    url: "/ez-tent.webp",
    title: "EZ Tent",
    width: "33.3%",
  },
  {
    url: "/patio-heater.webp",
    title: "Patio Heater",
    width: "33.3%",
  },
  {
    url: "/porta-potty.webp",
    title: "Porta Potty",
    width: "33.3%",
  },
  {
    url: "/power-dome.webp",
    title: "Power Dome",
    width: "33.3%",
  },
  {
    url: "/propane-heater.webp",
    title: "Propane Heater",
    width: "33.3%",
  },
  {
    url: "/sand-bag.webp",
    title: "Sand Bag",
    width: "33.3%",
  },
  {
    url: "/tarp.webp",
    title: "Tarp",
    width: "33.3%",
  },
  {
    url: "/walkie-talkie.webp",
    title: "Walkie Talkie",
    width: "33.3%",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
    paddingBottom: "5vh",
  },
  image: {
    position: "relative",
    height: 280,
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
        display: "none",
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

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {OUTDOOR.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
