import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Menu,
  MenuItem,
  Popover,
  Toolbar,
  Typography,
} from "@mui/material";
import { notifications } from "../Data/MonsterData";
import { styled } from "styled-components";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
const NotificationWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "400px",
  height: "500px",
}));

const NotificationHeader = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  zIndex: 1000,
  borderRadius: "10px",
  padding: "0px",
  margin: "0px",
  width: "auto",
}));

function Notification() {
  const [anchorElNotif, setAnchorElNotif] = useState(null);

  const isProfileOpen = Boolean(anchorElNotif);

  const notificationId = "primary-notification";
  const handleNotificationClose = () => {
    setAnchorElNotif(null);
  };

  const handleNotificationOpen = (event) => {
    setAnchorElNotif(event.currentTarget);
  };

  const renderNotification = (
    <>
      <Popover
        anchorEl={anchorElNotif}
        id={notificationId}
        keepMounted
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isProfileOpen}
        onClose={handleNotificationClose}
      >
        <NotificationWrapper>
          <NotificationHeader>
            <Toolbar>
              <Typography variant="h4">Notifications</Typography>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton>
                <SettingsRoundedIcon />
              </IconButton>
            </Toolbar>
            <Divider />
          </NotificationHeader>

          <List>
            {notifications.map((notification) => (
              <ListItemButton key={notification.id}>
                <ListItemAvatar>
                  <Avatar>{notification.avatar}</Avatar>
                </ListItemAvatar>
                <ListItemText>{notification.title}</ListItemText>
                <IconButton>
                  <MoreVertRoundedIcon />
                </IconButton>
              </ListItemButton>
            ))}
          </List>
        </NotificationWrapper>
      </Popover>
    </>
  );

  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        aria-label="notification of current user"
        aria-controls={notificationId}
        aria-haspopup="true"
        onClick={handleNotificationOpen}
      >
        <Badge badgeContent={notifications.length} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      {renderNotification}
    </>
  );
}

export default Notification;
