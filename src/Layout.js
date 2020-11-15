import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import Navbar from "./Navbar";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    position: "fixed",
    right: theme.spacing(6),
    bottom: theme.spacing(4),
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.9)",
    },
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div onClick={handleClick} role="presentation" className={classes.root}>
      {children}
    </div>
  );
}

export default function Layout(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Toolbar id="back-to-top-anchor" />
      <Container>{props.children}</Container>
      <ScrollTop {...props}>
        <Fab
          size="small"
          aria-label="scroll back to top"
          className={classes.root}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
