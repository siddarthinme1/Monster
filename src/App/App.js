import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  CssBaseline,
  Slide,
  ThemeProvider,
  Typography,
  createTheme,
  useScrollTrigger,
} from "@mui/material";
import AppBarX from "../Components/AppBar/AppBarX";
import SignIn from "../Components/Login/SignIn";
import SignUp from "../Components/Login/SignUp";
import AboutPage from "../Components/Pages/AboutPage";
import AppBarContext from "../Context/AppBarContext";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import GoogleSignIn from "../Components/Login/GoogleSignIn";
import LabelBottomNavigation from "../Components/BottomNavigation/BottomNavigation";
import CardPage from "../Components/Pages/CardPage";

const clientId =
  "650114961683-4quord8pl0v8n0gpnvp8funhja8ijcf8.apps.googleusercontent.com";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({});

function App() {
  const { darkMode, isAuthenticated } = useContext(AppBarContext);
  useEffect(() => {
    function start() {
      gapi.auth2.init({ clientId: clientId, scope: "" });
    }
    gapi.load("client:auth2", start);
  });

  // var accessToken = gapi.auth.getToken().access_token;
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />

        <AppBarX />

        <LabelBottomNavigation />
        <CardPage />
      </ThemeProvider>
    </>
  );
}

export default App;
