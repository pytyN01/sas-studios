import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "next/link";

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
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            SAS Movie Studios
          </Typography>
          <Link href="/" passHref>
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/feature" passHref>
            <Button color="inherit">Feature Films</Button>
          </Link>
          <Link href="/equipment" passHref>
            <Button color="inherit">Rental Equipment</Button>
          </Link>
          <Link href="/locations" passHref>
            <Button color="inherit">Rental Locations</Button>
          </Link>
          <Link href="/contact" passHref>
            <Button color="inherit">Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
