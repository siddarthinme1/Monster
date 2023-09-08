import {
  BottomNavigation,
  BottomNavigationAction,
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
  const [profile, setProfile] = useState(false);
  const [myAccount, setMyAccount] = useState(false);
  const [value, setValue] = useState(0);

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
    if (buttonId == 1) {
      setProfile(!profile);
    } else if (buttonId == 2) {
      setMyAccount(!myAccount);
    } else if (buttonId == 3) {
      setSettings(!settings);
    }
  };

  const handleLightTheme = () => {
    setDarkMode(false);
  };

  const handleDarkTheme = () => {
    setDarkMode(true);
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

  const handleDrawerToggle1 = (settings) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key == "tab" || event.key === "shift")
    ) {
      return;
    }
    setMyAccount(settings);
  };

  const handleDrawerToggle2 = (settings) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key == "tab" || event.key === "shift")
    ) {
      return;
    }
    setProfile(settings);
  };

  const { window, darkMode, handleMobileMenuClose } = props;
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
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ m: 2 }}
      >
        <BottomNavigationAction
          onClick={handleLightTheme}
          label="Light"
          icon={<LightModeIcon />}
        />
        <BottomNavigationAction
          label="System"
          icon={<SettingsBrightnessIcon />}
        />
        <BottomNavigationAction
          onClick={handleDarkTheme}
          label="Dark"
          icon={<DarkModeIcon />}
        />
      </BottomNavigation>
    </Drawer>
  );

  const MyAccountDrawer = (
    <Drawer
      anchor="right"
      open={myAccount}
      ModalProps={{ keepMounted: true }}
      onClose={handleDrawerToggle1(false)}
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
      <Toolbar>MyAccount</Toolbar>
      <Divider />
    </Drawer>
  );

  const ProfileDrawer = (
    <Drawer
      anchor="right"
      open={profile}
      ModalProps={{ keepMounted: true }}
      onClose={handleDrawerToggle2(false)}
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
      <Toolbar>Profile</Toolbar>
      <Divider />
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
      onBlur={handleMobileMenuClose}
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
      {!settings && !profile && !myAccount && renderMenu}
      {settingsDrawer}
      {MyAccountDrawer}
      {ProfileDrawer}
    </>
  );
}

export default Profile;
