import { Badge, IconButton } from "@mui/material";
import React from "react";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";

function CreateContent() {
  return (
    <IconButton size="large" color="inherit">
      <Badge badgeContent={0} color="error">
        <VideoCallOutlinedIcon fontSize="medium" />
      </Badge>
    </IconButton>
  );
}

export default CreateContent;
