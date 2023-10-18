import React, { useContext } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import FirebaseContext from "../../Context/FirebaseContext";
function Home() {
  const { user } = useContext(FirebaseContext);
  return (
    <div>
      <Grid container component="main" sx={{ height: "100vh" }}>
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
            <Typography variant="h2">
              Welcome to Plate Pallete {user?.displayName}
            </Typography>
            <Typography variant="body2">{user?.email}</Typography>
            <Typography variant="h6"> All in one smart app</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
