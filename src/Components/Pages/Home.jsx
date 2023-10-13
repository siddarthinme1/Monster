import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Avatar, Box, Typography } from "@mui/material";
function Home() {
  return (
    <div>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h1"> Welcome to Plate Pallete</Typography>
          <Typography variant="56"> All in one smart app</Typography>
        </Box>
      </Grid>
    </div>
  );
}

export default Home;
