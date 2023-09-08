import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Profile from "./Profile";
import Notification from "./Notification";
import SideDrawer from "./SideDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import CreateContent from "./CreateContent";
import SeacrhBar from "./SeacrhBar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

function AppBarX(props) {
  const { setDarkMode, handleSignInOpen } = props;
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleToggleTheme = () => {
    setDarkMode((current) => !current);
  };

  const handleDrawerToggle = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const DarkModeTheme = (
    <>
      <IconButton size="large" color="inherit" onClick={handleToggleTheme}>
        <DarkModeIcon />
      </IconButton>
    </>
  );

  const SignIn = (
    <>
      <IconButton size="large" color="inherit" onClick={handleSignInOpen}>
        <PermIdentityIcon />{" "}
      </IconButton>
    </>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      keepMounted
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Box>
        <CreateContent />
        <Notification />
        <Profile />
        {DarkModeTheme}
        {SignIn}
      </Box>
    </Menu>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open-drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              MONSTER
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <SeacrhBar />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <CreateContent />
              <Notification />
              {DarkModeTheme}
              <Profile />
              {SignIn}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                color="inherit"
                edge="end"
                onClick={handleMobileMenuOpen}
                aria-controls="mobileMenuId"
              >
                <MoreVertIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        <SideDrawer
          handleDrawerToggle={handleDrawerToggle}
          sideDrawerOpen={sideDrawerOpen}
          setSideDrawerOpen={setSideDrawerOpen}
        />
        {renderMobileMenu}
      </Box>
    </div>
  );
}

export default AppBarX;
