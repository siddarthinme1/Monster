import React, { useState, useContext } from "react";
import {
  Button,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import AppBarX from "../Components/AppBar/AppBarX";
import SignIn from "../Components/Login/SignIn";
import SignUp from "../Components/Login/SignUp";
import AboutPage from "../Components/Pages/AboutPage";
import AppBarContext from "../Context/AppBarContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({});

function App() {
  const { darkMode } = useContext(AppBarContext);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <AppBarX />
        <SignIn />
        <SignUp />
        {/* <AboutPage /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
