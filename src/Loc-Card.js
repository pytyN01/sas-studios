import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const images = [
  {
    url: "/applewood-hills.webp",
    title: "Applewood Hills",
    width: "33.3%",
  },
  {
    url: "/bar-mood.webp",
    title: "Bar Set",
    width: "33.3%",
  },
  {
    url: "/cafe-restaurant.webp",
    title: "Cafe Set",
    width: "33.3%",
  },
  {
    url: "/castle.webp",
    title: "Castle Set",
    width: "33.3%",
  },
  {
    url: "/CIRCA.webp",
    title: "CIRCA",
    width: "33.3%",
  },
  {
    url: "/factory.webp",
    title: "Factory Set",
    width: "33.3%",
  },
  {
    url: "/highschool.webp",
    title: "Highschool Set",
    width: "33.3%",
  },
  {
    url: "/hill-mansion.webp",
    title: "Hill Mansion",
    width: "33.3%",
  },
  {
    url: "/lighting.webp",
    title: "Lighting Set",
    width: "33.3%",
  },
  {
    url: "/police-office.webp",
    title: "Police/Office Set",
    width: "33.3%",
  },
  {
    url: "/skatepark.webp",
    title: "Skate Park",
    width: "33.3%",
  },
  {
    url: "/stage.webp",
    title: "Stage Set",
    width: "33.3%",
  },
  {
    url: "/street-front.webp",
    title: "Street Front",
    width: "33.3%",
  },
  {
    url: "/theater.webp",
    title: "Theater Set",
    width: "33.3%",
  },
  {
    url: "/wedding.webp",
    title: "Wedding Set",
    width: "33.3%",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
    marginBottom: "10vh",
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
