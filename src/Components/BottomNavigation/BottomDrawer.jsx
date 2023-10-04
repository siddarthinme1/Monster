import React from "react";

import { Box, Drawer, Typography, useMediaQuery } from "@mui/material";

import SharePage from "../Pages/SharePage";
import CommentsPage from "../Pages/CommentsPage";

function BottomDrawer(props) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const renderContent = () => {
    if (props.drawerContent === "share" && isMobile) {
      return <SharePage />;
    } else if (props.drawerContent === "comments" && isMobile) {
      return <CommentsPage />;
    } else {
      return (
        <Typography variant="h6">
          Please select an option to display.
        </Typography>
      );
    }
  };

  return (
    <Drawer
      anchor="bottom"
      open={props.isDrawerBottomOpen}
      onClose={props.toggleBottomDrawer}
      sx={{ borderRadius: "20px", p: 5 }}
    >
      <Box
        sx={{
          width: 250,
          height: 250,
          padding: 2,
          textAlign: "center",
        }}
        role="presentation"
      >
        {renderContent()}
      </Box>
    </Drawer>
  );
}

export default BottomDrawer;
