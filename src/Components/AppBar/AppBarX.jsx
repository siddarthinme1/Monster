import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  Slide,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState, useContext } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Settings from "./Settings";
import Notification from "./Notification";
import SideDrawer from "./SideDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import CreateContent from "./CreateContent";
import SeacrhBar from "./SeacrhBar";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AppBarContext from "../../Context/AppBarContext";
import styled from "styled-components";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import FirebaseContext from "../../Context/FirebaseContext";
import LogoutIcon from "@mui/icons-material/Logout";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return (
    <Tooltip title={expand ? "Light" : "Dark"}>
      <IconButton {...other} />
    </Tooltip>
  );
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: "transform 0.3s",
  "&:hover": {
    animation: "rotate 2s linear infinite",
  },
  "@keyframes rotate": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));

function AppBarX() {
  const { setSignInSignUpPopUp, trigger, setDarkMode, darkMode } =
    useContext(AppBarContext);
  const { firebaseAuth, user, isLoggedIn } = useContext(FirebaseContext);

  const { signOutWithGoogle } = useContext(FirebaseContext);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [expand, setExpand] = useState(false);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  console.log(user);

  const handleSignInOpen = () => {
    setSignInSignUpPopUp(true);
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

  const handleSignOut = () => {
    signOutWithGoogle();
  };

  const SignInSignUpPop = (
    <>
      {!isLoggedIn ? (
        <Tooltip title="Login">
          <IconButton size="large" color="inherit" onClick={handleSignInOpen}>
            <PermIdentityIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Sign Out">
          <IconButton size="large" color="inherit" onClick={handleSignOut}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      )}
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
        <>
          <CreateContent />
          <Notification />
          <Settings setMobileMoreAnchorEl={setMobileMoreAnchorEl} />
        </>
        {SignInSignUpPop}
      </Box>
    </Menu>
  );

  const handleExpand = () => {
    setExpand(!expand);
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Slide appear={false} direction="down" in={!trigger}>
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
                PLATE PALETTE
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <SeacrhBar />
              <Box sx={{ flexGrow: 1 }} />

              <ExpandMore
                expand={expand}
                onClick={handleExpand}
                aria-expanded={expand}
                fontSize="large"
              >
                {!expand ? (
                  <DarkModeIcon sx={{ color: "#FFFF8A" }} />
                ) : (
                  <LightModeIcon />
                )}
              </ExpandMore>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Notification />
                <Settings setMobileMoreAnchorEl={setMobileMoreAnchorEl} />
                {SignInSignUpPop}
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
        </Slide>

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
