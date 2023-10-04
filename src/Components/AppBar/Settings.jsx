import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Rating,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { profileItems } from "../../Data/MonsterData";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import SettingsIcon from "@mui/icons-material/Settings";
import AppBarContext from "../../Context/AppBarContext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Settings(props) {
  const { window, setMobileMoreAnchorEl } = props;

  const { setDarkMode, settings, setSettings } = useContext(AppBarContext);
  const [anchorElProfile, setAnchorElProfile] = useState(null);

  const [profile, setProfile] = useState(false);
  const [myAccount, setMyAccount] = useState(false);
  const [location, setLocation] = useState(false);
  const [help, setHelp] = useState(false);
  const [rateUs, setRateUs] = useState(false);

  const [value, setValue] = useState("light");

  const isMenuOpen = Boolean(anchorElProfile);

  const menuId = "primary-search-account-menu";

  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleCloseRateUs = () => {
    setRateUs(false);
  };

  const handleMenuClose = () => {
    setAnchorElProfile(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleClick = (buttonId) => {
    setMobileMoreAnchorEl(null);
    if (buttonId == 1) {
      setProfile(!profile);
    } else if (buttonId == 2) {
      setMyAccount(!myAccount);
    } else if (buttonId == 3) {
      setSettings(!settings);
    } else if (buttonId == 4) {
      setLocation(!location);
    } else if (buttonId == 5) {
      setHelp(!help);
    } else if (buttonId == 6) {
      setRateUs(true);
    }
  };

  const handleLightTheme = () => {
    setDarkMode(false);
  };

  const handleDarkTheme = () => {
    setDarkMode(true);
  };

  const handleDrawerSettings = (settings) => () => {
    setSettings(settings);
  };

  const handleDrawerMyAccount = (myAccount) => () => {
    setMyAccount(myAccount);
  };

  const handleDrawerProfile = (profile) => () => {
    setProfile(profile);
  };

  const handleDrawerLocation = (location) => () => {
    setLocation(location);
  };

  const handleDrawerHelp = (help) => () => {
    setHelp(help);
  };

  const RateUsDialog = (
    <Dialog
      open={rateUs}
      onClose={handleCloseRateUs}
      aria-labelledby="alert-rateus"
      aria-describedby="alert-rateus-outof-five-star"
    >
      <DialogTitle id="alert-rateus-title">
        <Typography variant="h4">Enjoying the App?</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h5">Your opinion matters to us</Typography>
        <Rating name="size-medium" defaultValue={2} size="large" />
      </DialogContent>
      <TextField multiline rows={4} sx={{ m: 2 }}></TextField>
      <Button onClick={handleCloseRateUs}>Send Feedback</Button>
    </Dialog>
  );

  const settingsDrawer = (
    <Drawer
      anchor="right"
      open={settings}
      ModalProps={{ keepMounted: true }}
      onClose={handleDrawerSettings(false)}
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
      <ToggleButtonGroup
        color="primary"
        value={value}
        exclusive
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        aria-label="theme"
        sx={{ ml: 6, mr: 6, mt: 2, mb: 2 }}
      >
        <ToggleButton value="light" onClick={handleLightTheme}>
          <LightModeIcon />
        </ToggleButton>
        <ToggleButton value="system">
          <SettingsBrightnessIcon />
        </ToggleButton>
        <ToggleButton value="dark" onClick={handleDarkTheme}>
          <DarkModeIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Drawer>
  );

  const MyAccountDrawer = (
    <Drawer
      anchor="right"
      open={myAccount}
      ModalProps={{ keepMounted: true }}
      onClose={handleDrawerMyAccount(false)}
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

  const [expanded, setExpanded] = useState(false);

  const handleChangeProfile = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const ProfileDrawer = (
    <Drawer
      anchor="right"
      open={profile}
      ModalProps={{ keepMounted: true }}
      onClose={handleDrawerProfile(false)}
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
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChangeProfile("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Personal Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Siddarood Karachuri</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChangeProfile("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Profile Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Siddarood</Typography>
        </AccordionDetails>
      </Accordion>
    </Drawer>
  );

  const LocationDrawer = (
    <Drawer
      anchor="right"
      open={location}
      ModalProps={{ keepMounted: true }}
      onClose={handleDrawerLocation(false)}
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
      <Toolbar>Location</Toolbar>
      <Divider />
      <Box sx={{ m: 5 }}>
        <Chip
          label={date.toLocaleTimeString() + " " + date.toLocaleDateString()}
        />
      </Box>
    </Drawer>
  );

  const HelpDrawer = (
    <Drawer
      anchor="right"
      open={help}
      ModalProps={{ keepMounted: true }}
      onClose={handleDrawerHelp(false)}
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
      <Toolbar>Help</Toolbar>
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
      <Tooltip title="Settings">
        <IconButton
          size="large"
          color="inherit"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
        >
          <SettingsIcon fontSize="medium" />
        </IconButton>
      </Tooltip>
      {!settings &&
        !profile &&
        !myAccount &&
        !location &&
        !help &&
        !rateUs &&
        renderMenu}
      {settingsDrawer}
      {MyAccountDrawer}
      {ProfileDrawer}
      {LocationDrawer}
      {HelpDrawer}
      {RateUsDialog}
    </>
  );
}

export default Settings;
