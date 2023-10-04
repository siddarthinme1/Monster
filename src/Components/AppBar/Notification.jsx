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
  ListSubheader,
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
  overflow: "auto",
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
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            backgroundColor: "inherit",
          }}
        >
          <Toolbar>
            <Typography variant="h5">Notifications</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton>
              <SettingsRoundedIcon />
            </IconButton>
          </Toolbar>
          <Divider />
        </div>

        <NotificationWrapper>
          <List>
            <ListSubheader sx={{ bgcolor: "background.paper" }}>
              Today
            </ListSubheader>
            {notifications.map((notification) => (
              <ListItemButton disableRipple key={notification.id}>
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
