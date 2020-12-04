import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import React from "react";

const useStyles = makeStyles((theme) => ({
  field: {
    width: 336,
  },
}));

export default function InputWithIcon() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <TextField
            className={classes.field}
            id="input-with-icon-grid"
            label="Search our equipment"
          />
        </Grid>
        <Grid item>
          <SearchIcon />
        </Grid>
      </Grid>
    </div>
  );
}
