import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItem from "@material-ui/core/ListItem";
import CloseIcon from "@material-ui/icons/Close";
import MailIcon from "@material-ui/icons/Mail";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import React from "react";

import Search from "../src/Search";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: 400,
    marginTop: "50px",
  },
});

export default function EquipmentDrawer({ drawer, toggleDrawer }) {
  const classes = useStyles();

  return (
    <Drawer anchor="left" open={drawer} onClose={toggleDrawer}>
      <div className={classes.list} role="presentation">
        <List>
          <ListItem>
            <Search />
          </ListItem>
          {[
            "Equipment",
            "Filters",
            "Will Be",
            "Here",
            "Once",
            "Given",
            "Close",
          ].map((text, index) => (
            <ListItem
              button
              key={index}
              onClick={index === 6 ? toggleDrawer : null}
            >
              <ListItemIcon>
                {index === 0 && <InboxIcon />}
                {index === 1 && <MailIcon />}
                {index === 2 && <InboxIcon />}
                {index === 3 && <MailIcon />}
                {index === 4 && <InboxIcon />}
                {index === 5 && <MailIcon />}
                {index === 6 && <CloseIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}
