import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    top: 0,
    bottom: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 9999,
  },
  img: {
    width: "300px",
    marginRight: "auto",
    // flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar variant="dense">
          <img src="/logo.png" className={classes.img} />

          <Button component={Link} href="/" naked color="inherit">
            Home
          </Button>
          <Button component={Link} href="/feature" naked color="inherit">
            Feature Films
          </Button>
          <Button component={Link} href="/equipment" naked color="inherit">
            Rental Equipment
          </Button>
          <Button component={Link} href="/locations" naked color="inherit">
            Rental Locations
          </Button>
          <Button component={Link} href="/contact" naked color="inherit">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
