import { IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { profileItems } from "../Data/MonsterData";

function Profile() {
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const isMenuOpen = Boolean(anchorElProfile);
  const menuId = "primary-search-account-menu";
  const handleMenuClose = () => {
    setAnchorElProfile(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

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
        <MenuItem key={item.id}>
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
      {renderMenu}
    </>
  );
}

export default Profile;
