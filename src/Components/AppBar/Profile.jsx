import {
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState, KeyboardEvent } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { profileItems } from "../../Data/MonsterData";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

function Profile(props) {
  const { setDarkMode } = props;
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const isMenuOpen = Boolean(anchorElProfile);
  const [settings, setSettings] = useState(false);

  const menuId = "primary-search-account-menu";
  const handleMenuClose = () => {
    setAnchorElProfile(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleClick = (buttonId) => {
    console.log("settings ", settings);
    console.log(buttonId);
    if (buttonId == 3) {
      setSettings(!settings);
    }
  };

  const handleToggleTheme = () => {
    setDarkMode((current) => !current);
  };

  const handleDrawerToggle = (settings) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key == "tab" || event.key === "shift")
    ) {
      return;
    }
    setSettings(settings);
  };

  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const settingsDrawer = (
    <Drawer
      anchor="right"
      open={settings}
      ModalProps={{ keepMounted: true }}
      onClose={handleDrawerToggle(false)}
      container={container}
      variant="temporary"
      sx={{
        display: { xs: "block", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 240,
        },
      }}
    >
      <Toolbar>Settings</Toolbar>
      <Divider />
      <ButtonGroup aria-label="outlined primary button group">
        <Button size="large" color="inherit" onClick={handleToggleTheme}>
          <DarkModeIcon />
        </Button>
        <Button size="large" color="inherit">
          <SettingsBrightnessIcon />
        </Button>
        <Button size="large" color="inherit">
          <LightModeIcon />
        </Button>
      </ButtonGroup>
    </Drawer>
  );

  const renderMenu = (
    <Menu
      anchorEl={anchorElProfile}
      id={menuId}
      keepMounted
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {profileItems.map((item) => (
        <MenuItem key={item.id} onClick={() => handleClick(item.id)}>
          {item.photo}
          <Typography sx={{ ml: "10px" }}>{item.title}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <>
      <Tooltip title="Profile">
        <IconButton
          size="large"
          color="inherit"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
        >
          <AccountCircleIcon fontSize="medium" />
        </IconButton>
      </Tooltip>
      {!settings && renderMenu}
      {settingsDrawer}
    </>
  );
}

export default Profile;
