import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "black",
  },
}));

export default function SloganBanner() {
  const classes = useStyles();

  return (
    <div className="slogan-banner">
      <Typography variant="h1" align="center" className={classes.text}>
        Largest inventory! Lowest price! Guaranteed!!
      </Typography>
    </div>
  );
}
