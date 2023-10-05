import {
  AppBar,
  Box,
  Chip,
  IconButton,
  Menu,
  Slide,
  Toolbar,
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
import SignIn from "../Login/SignIn";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SpeedDialX from "../SpeedDial/SpeedDialX";
function AppBarX() {
  const { setSignInPopUp, trigger } = useContext(AppBarContext);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleSignInOpen = () => {
    setSignInPopUp(true);
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

  const SignInPop = (
    <>
      <IconButton size="large" color="inherit" onClick={handleSignInOpen}>
        <PermIdentityIcon />
      </IconButton>
      <SignIn />
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
        {SignInPop}
      </Box>
    </Menu>
  );

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
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <CreateContent />
                <Notification />
                <Settings setMobileMoreAnchorEl={setMobileMoreAnchorEl} />
                {SignInPop}
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
      {/* <Slide appear={false} direction="up" in={!trigger}>
        <SpeedDialX />
      </Slide> */}
    </div>
  );
}

export default AppBarX;
