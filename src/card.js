import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const images = [
  {
    url: "/5-gal-water.webp",
    title: "5-Gal Water Jug",
    width: "33.3%",
  },
  {
    url: "/40-tv.webp",
    title: "40' TVs",
    width: "33.3%",
  },
  {
    url: "/ac-unit.webp",
    title: "AC Units",
    width: "33.3%",
  },
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
    url: "/apple-box.webp",
    title: "Apple Boxs",
    width: "33.3%",
  },
  {
    url: "/apple-box.webp",
    title: "Apple Boxs",
    width: "33.3%",
  },
  {
    url: "/apple-box.webp",
    title: "Apple Boxs",
    width: "33.3%",
  },
  {
    url: "/apple-box.webp",
    title: "Apple Boxs",
    width: "33.3%",
  },
  {
    url: "/apple-box.webp",
    title: "Apple Boxs",
    width: "33.3%",
  },
  {
    url: "/apple-box.webp",
    title: "Apple Boxs",
    width: "33.3%",
  },
  {
    url: "/apple-box.webp",
    title: "Apple Boxs",
    width: "33.3%",
  },
  {
    url: "/apple-box.webp",
    title: "Apple Boxs",
    width: "33.3%",
  },
  {
    url: "/apple-box.webp",
    title: "Apple Boxs",
    width: "33.3%",
  },
  {
    url: "/apple-box.webp",
    title: "Apple Boxs",
    width: "33.3%",
  },
  {
    url: "/apple-box.webp",
    title: "Apple Boxs",
    width: "33.3%",
  },
  {
    url: "/apple-box.webp",
    title: "Apple Boxs",
    width: "33.3%",
  },
  {
    url: "/apple-box.webp",
    title: "Apple Boxs",
    width: "33.3%",
  },
  {
    url: "/apple-box.webp",
    title: "Apple Boxs",
    width: "33.3%",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 250,
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
      {images.map((image) => (
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
