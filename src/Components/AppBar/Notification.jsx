import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Popover,
  Toolbar,
  Typography,
} from "@mui/material";

import { styled } from "styled-components";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { notifications } from "../../Data/MonsterData";

const NotificationWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "350px",
  height: "500px",
  overflowy: "hidden",
  overflowx: "hidden",
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
        <Toolbar>
          <Typography variant="h5">Notifications</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton>
            <SettingsRoundedIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <NotificationWrapper>
          <List>
            {notifications.map((notification) => (
              <ListItemButton disableRipple="true" key={notification.id}>
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
