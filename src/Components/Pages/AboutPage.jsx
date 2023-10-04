import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Avatar, Box, Typography } from "@mui/material";

const defaultTheme = createTheme();

function AboutPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${require("../../Data/Images/about.jpg")})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            mt: "64px",
            mb: "55px",
          }}
        />
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>SK</Avatar>
            <Typography component="h1" variant="h5">
              Siddarood Karachuri
            </Typography>
            <Typography variant="subtitle1">Key Expertise:</Typography>
            <Typography variant="body2">
              B.E in Electrical and Electronics, with 1.9 years of experience in
              Embedded Technologies. Offer various programming languages such as
              C, python. Currently working as Engineer in L&T Technology
              Services Ltd, Mysore from November 2021 to till date.
            </Typography>
            <Typography variant="subtitle1">Experience and Skills:</Typography>
            <Typography variant="body2">
              ➢ Worked in BOSE Puffin project as a support Microcontroller
              Platform Engineer.
              <br />
              ➢ Flashing and debugging of software to the P33A and P13C
              amplifiers.
              <br />
              ➢ Hands-on and conceptual knowledge in programming languages like
              C, Python.
              <br />
              ➢ Conceptual knowledge of communication protocols like SPI, I2C,
              UART, and RS232.
              <br />
              ➢ Experience in source code management and revision control using
              SVN.
              <br />
              ➢ Good Knowledge in Windows and Linux.
              <br />➢ Good written and oral communication skills.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default AboutPage;
