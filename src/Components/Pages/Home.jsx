import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import AppBarContext from "../../Context/AppBarContext";
function Home() {
  const { user } = useContext(AppBarContext);
  return (
    <div>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">
          Welcome to Plate Pallete {user?.displayName}
        </Typography>
        <Typography variant="56"> All in one smart app</Typography>
      </Box>
    </div>
  );
}

export default Home;
