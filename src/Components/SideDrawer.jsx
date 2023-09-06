import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const drawerWidth = 240;

function SideDrawer(props) {
  const { handleDrawerToggle, mobileOpen } = props;

  const { window } = props;

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem>Inbox</ListItem>
        <ListItem>Starred</ListItem>
        <ListItem>Send Mail</ListItem>
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  console.log(handleDrawerToggle);
  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default SideDrawer;
