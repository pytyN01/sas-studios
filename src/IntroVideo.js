import { makeStyles } from "@material-ui/core/styles";

import Link from "./Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import React from "react";

const useStyles = makeStyles((theme) => ({
  btn: {
    fontSize: "4rem",
    color: "white",
  },
}));

export default function IntroVideo() {
  const classes = useStyles();

  const [eBlur, setEblur] = React.useState(true);
  const [lBlur, setLblur] = React.useState(true);

  return (
    <React.Fragment>
      <div className="video-box">
        <video autoPlay playsInline muted>
          <source src="/Logo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="main">
        <div className="slogan-banner">
          <Typography variant="h2">
            Largest inventory! Lowest price! Guaranteed!!
          </Typography>
        </div>
        <div className={eBlur ? "equipment-text BW" : "equipment-text"}>
          <Button
            variant="outlined"
            component={Link}
            href="/equipment"
            naked
            className={classes.btn}
            onMouseOver={() => setEblur(false)}
            onMouseOut={() => setEblur(true)}
          >
            View Inventory
          </Button>
        </div>
        <div className="slogan-banner">
          <Typography variant="h2">Coast-to-Coast Film Locations!</Typography>
        </div>
        <div className={lBlur ? "locations-text BW" : "locations-text"}>
          <Button
            variant="outlined"
            component={Link}
            href="/locations"
            naked
            className={classes.btn}
            onMouseOver={() => setLblur(false)}
            onMouseOut={() => setLblur(true)}
          >
            View Locations
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
