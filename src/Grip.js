import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const GRIP = [
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
    url: "/boom-lift.webp",
    title: "Boom Lift",
    width: "33.3%",
  },
  {
    url: "/bull-horn.webp",
    title: "Bull Horn",
    width: "33.3%",
  },
  {
    url: "/c-clamp.webp",
    title: "C Clamp",
    width: "33.3%",
  },
  {
    url: "/cable-cross.webp",
    title: "Cable Cross",
    width: "33.3%",
  },
  {
    url: "/cardellini.webp",
    title: "Cardellini",
    width: "33.3%",
  },
  {
    url: "/carts-dolly.webp",
    title: "Carts Dolly",
    width: "33.3%",
  },
  {
    url: "/case.webp",
    title: "Case",
    width: "33.3%",
  },
  {
    url: "/chair-stool.webp",
    title: "Chair Stool",
    width: "33.3%",
  },
  {
    url: "/coffee-maker.webp",
    title: "Coffee Maker",
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
    url: "/couch.webp",
    title: "Couch",
    width: "33.3%",
  },
  {
    url: "/crank-up.webp",
    title: "Crank Up",
    width: "33.3%",
  },
  {
    url: "/crash-pad.webp",
    title: "Crash Pad",
    width: "33.3%",
  },
  {
    url: "/dc-ac.webp",
    title: "DC/AC Converter",
    width: "33.3%",
  },
  {
    url: "/distribution-box.webp",
    title: "Distribution Box",
    width: "33.3%",
  },
  {
    url: "/distro-cable.webp",
    title: "Disto Cable",
    width: "33.3%",
  },
  {
    url: "/event-staging.webp",
    title: "Event Staging",
    width: "33.3%",
  },
  {
    url: "/ez-tent.webp",
    title: "EZ Tent",
    width: "33.3%",
  },
  {
    url: "/fan-mister.webp",
    title: "Fan Mister",
    width: "33.3%",
  },
  {
    url: "/fire-ex.webp",
    title: "Fire Extinguisher",
    width: "33.3%",
  },
  {
    url: "/first-aid.webp",
    title: "First Aid",
    width: "33.3%",
  },
  {
    url: "/fuel-caddy.webp",
    title: "Distribution Box",
    width: "33.3%",
  },
  {
    url: "/fuel-delivery.webp",
    title: "Fuel Delivery",
    width: "33.3%",
  },
  {
    url: "/fuel-tank.webp",
    title: "Fuel Tank",
    width: "33.3%",
  },
  {
    url: "/gas-can.webp",
    title: "Gas Can",
    width: "33.3%",
  },
  {
    url: "/gobo.webp",
    title: "GOBO",
    width: "33.3%",
  },
  {
    url: "/grip-truck.webp",
    title: "Grip Truck",
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
    url: "/ladder.webp",
    title: "Ladder",
    width: "33.3%",
  },
  {
    url: "/led-wall-panels.webp",
    title: "LED Wall Panels Box",
    width: "33.3%",
  },
  {
    url: "/mafer.webp",
    title: "MAFER",
    width: "33.3%",
  },
  {
    url: "/mambo.webp",
    title: "MAMBO",
    width: "33.3%",
  },
  {
    url: "/man-lift.webp",
    title: "Man Lift",
    width: "33.3%",
  },
  {
    url: "/microwave.webp",
    title: "Microwave",
    width: "33.3%",
  },
  {
    url: "/patio-heater.webp",
    title: "Patio Heater",
    width: "33.3%",
  },
  {
    url: "/popcorn-maker.webp",
    title: "Popcorn Maker",
    width: "33.3%",
  },
  {
    url: "/porta-potty.webp",
    title: "Porta Potty",
    width: "33.3%",
  },
  {
    url: "/portable-printer.webp",
    title: "Portable Printer",
    width: "33.3%",
  },
  {
    url: "/power-dome.webp",
    title: "Power Dome",
    width: "33.3%",
  },
  {
    url: "/premade-set.webp",
    title: "Pre-made Set",
    width: "33.3%",
  },
  {
    url: "/production-trailer.webp",
    title: "Production Trailer",
    width: "33.3%",
  },
  {
    url: "/propane-heater.webp",
    title: "Propane Heater",
    width: "33.3%",
  },
  {
    url: "/qsc-speaker.webp",
    title: "QSC 12.2 Speaker",
    width: "33.3%",
  },
  {
    url: "/red-carpet.webp",
    title: "Red Carpet",
    width: "33.3%",
  },
  {
    url: "/refrigerator-freezer.webp",
    title: "Refrigerator Freezer",
    width: "33.3%",
  },
  {
    url: "/ribbon-stand.webp",
    title: "Ribbon Stand",
    width: "33.3%",
  },
  {
    url: "/rolling-case.webp",
    title: "Rolling Case",
    width: "33.3%",
  },
  {
    url: "/safety-harness.webp",
    title: "Safety Harness",
    width: "33.3%",
  },
  {
    url: "/sand-bag.webp",
    title: "Sand Bag",
    width: "33.3%",
  },
  {
    url: "/scissor-lift.webp",
    title: "Scissor Lift",
    width: "33.3%",
  },
  {
    url: "/serving-dish.webp",
    title: "Serving Dish",
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
    url: "/tarp.webp",
    title: "Tarp",
    width: "33.3%",
  },
  {
    url: "/trussing-support.webp",
    title: "Trussing Support",
    width: "33.3%",
  },
  {
    url: "/walkie-talkie.webp",
    title: "Walkie Talkie",
    width: "33.3%",
  },
  {
    url: "/wardrobe-rack.webp",
    title: "Wardrobe Rack",
    width: "33.3%",
  },
  {
    url: "/water-dispenser.webp",
    title: "Water Dispenser",
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
      {GRIP.map((image) => (
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
