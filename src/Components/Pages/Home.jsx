import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Avatar, Box, Button, Typography } from "@mui/material";
function Home() {
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
        <Typography variant="h2"> Welcome to Plate Pallete</Typography>
        <Typography variant="56"> All in one smart app</Typography>
        <Button>Put data</Button>
      </Box>
    </div>
  );
}

export default Home;
