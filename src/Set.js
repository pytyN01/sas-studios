import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const SET = [
  {
    url: "/apple-box.webp",
    title: "Apple Boxs",
    width: "33.3%",
  },
  {
    url: "/arri-hmi-lighting.webp",
    title: "ARRI HMI Lighting",
    width: "33.3%",
  },
  {
    url: "/arri-sky-panels.webp",
    title: "ARRI Sky Panels",
    width: "33.3%",
  },
  {
    url: "/arri-tungsten.webp",
    title: "ARRI Tungsten",
    width: "33.3%",
  },
  {
    url: "/astro-turf.webp",
    title: "Astro Turf",
    width: "33.3%",
  },
  {
    url: "/chair-stool.webp",
    title: "Chair Stool",
    width: "33.3%",
  },
  {
    url: "/couch.webp",
    title: "Couch",
    width: "33.3%",
  },
  {
    url: "/iron-board.webp",
    title: "Iron Board",
    width: "33.3%",
  },
  {
    url: "/iron-steamer.webp",
    title: "Iron Steamer",
    width: "33.3%",
  },
  {
    url: "/rolling-case.webp",
    title: "Rolling Case",
    width: "33.3%",
  },
  {
    url: "/set-stand.webp",
    title: "Set Stand",
    width: "33.3%",
  },
  {
    url: "/set-wall.webp",
    title: "Set Wall",
    width: "33.3%",
  },
  {
    url: "/silent-generator.webp",
    title: "Silent Generator",
    width: "33.3%",
  },
  {
    url: "/speed-rail.webp",
    title: "Speed Rail",
    width: "33.3%",
  },
  {
    url: "/suction-car-kit.webp",
    title: "Suction Car Kit",
    width: "33.3%",
  },
  {
    url: "/taco-cart.webp",
    title: "Taco Cart",
    width: "33.3%",
  },
  {
    url: "/trussing-support.webp",
    title: "Trussing Support",
    width: "33.3%",
  },
  {
    url: "/wardrobe-rack.webp",
    title: "Wardrobe Rack",
    width: "33.3%",
  },
  {
    url: "/wireless-microphone-unit.webp",
    title: "Wireless Microphone Unit",
    width: "33.3%",
  },
  {
    url: "/wireless-microphone.webp",
    title: "Wireless Microphone",
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
      {SET.map((image) => (
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
