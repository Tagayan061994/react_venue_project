import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

const SideDrawer = props => {
  const scrollToEllemnt = elements => {
    scroller.scrollTo(elements, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offseth: -150
    });

    props.onClose(false);
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToEllemnt("featured")}>
          Event starts in
        </ListItem>

        <ListItem button onClick={() => scrollToEllemnt("venueNFo")}>
          Venue NFO
        </ListItem>

        <ListItem button onClick={() => scrollToEllemnt("highlights")}>
          Highlights
        </ListItem>

        <ListItem button onClick={() => scrollToEllemnt("pricing")}>
          Pricing
        </ListItem>

        <ListItem button onClick={() => scrollToEllemnt("location")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
