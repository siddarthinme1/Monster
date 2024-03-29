import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { sideDrawerItmes } from "../../Data/MonsterData";

const drawerWidth = 240;

const drawer = (
  <div>
    <List>
      {sideDrawerItmes.map((item) => (
        <ListItem key={item.id}>
          <ListItemButton>
            {item.icon}
            <Typography sx={{ ml: 2.5 }}>{item.title}</Typography>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </div>
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

function SideDrawer(props) {
  const { handleDrawerToggle, sideDrawerOpen } = props;

  const { window } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
          open={sideDrawerOpen}
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
          <DrawerHeader>
            <IconButton
              color="inherit"
              aria-label="open-drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 0.5 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ ml: 2 }}>
              PLATE PALETTE
            </Typography>
          </DrawerHeader>
          <Divider />
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default SideDrawer;
