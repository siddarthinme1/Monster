import React from "react";

import { Box, SwipeableDrawer, Typography, useMediaQuery } from "@mui/material";

import SharePage from "../Pages/SharePage";

import CommentsPage from "../Pages/CommentsPage";

import styled from "styled-components";

import { Global } from "@emotion/react";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "inherit",
}));

function BottomDrawer(props) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const renderContent = () => {
    if (props.drawerContent === "share") {
      return (
        <Box sx={{ m: "auto", display: "flex", alignContent: "center" }}>
          <SharePage />
        </Box>
      );
    } else if (props.drawerContent === "comments") {
      return <CommentsPage />;
    } else {
      return (
        <Typography variant="h6">
          Please select an option to display.
        </Typography>
      );
    }
  };

  // Conditionally define container based on window availability

  const container =
    typeof window !== "undefined" ? () => window.document.body : undefined;

  return (
    <>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${56}px)`,

            overflow: "visible",
          },
        }}
      />

      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={props.isDrawerBottomOpen}
        onClose={props.toggleBottomDrawer}
        onOpen={props.toggleBottomDrawer}
        swipeAreaWidth={56}
        disableSwipeToOpen={false}
        ModalProps={{ keepMounted: true }}
      >
        <StyledBox
          sx={{
            position: "absolute",

            top: -56,

            borderTopLeftRadius: 8,

            borderTopRightRadius: 8,

            right: 0,

            left: 0,
          }}
        >
          <Typography sx={{ p: 2, color: "text.secondary" }}>
            {props.drawerContent}
          </Typography>
        </StyledBox>

        <StyledBox sx={{ px: 2, pb: 2, height: "100%", overflow: "auto" }}>
          {renderContent()}
        </StyledBox>
      </SwipeableDrawer>
    </>
  );
}

export default BottomDrawer;
