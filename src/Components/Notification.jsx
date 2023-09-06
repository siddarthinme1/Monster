import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Badge,
  Divider,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { notifications } from "../Data/MonsterData";
import { styled } from "styled-components";

const NotificationWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "400px",
  height: "100%",
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
      <Menu
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
        <Typography variant="h5">Notifications</Typography>
        <Divider />
        <NotificationWrapper>
          {notifications.map((notification) => (
            <MenuItem key={notification.id}>{notification.title}</MenuItem>
          ))}
        </NotificationWrapper>
      </Menu>
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
        <Badge badgeContent={15} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      {renderNotification}
    </>
  );
}

export default Notification;
