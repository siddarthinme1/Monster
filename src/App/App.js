import React, { useContext, useEffect } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import AppBarX from "../Components/AppBar/AppBarX";
import AppBarContext from "../Context/AppBarContext";
import { gapi } from "gapi-script";
import LabelBottomNavigation from "../Components/BottomNavigation/BottomNavigation";
import CardPage from "../Components/Pages/CardPage";
import AboutPage from "../Components/Pages/AboutPage";
import Splitwise from "../Components/Pages/Splitwise";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Home";

const clientId =
  "650114961683-4quord8pl0v8n0gpnvp8funhja8ijcf8.apps.googleusercontent.com";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({});

function App() {
  const { darkMode, showCardPage } = useContext(AppBarContext);
  // useEffect(() => {
  //   function start() {
  //     gapi.auth2.init({ clientId: clientId, scope: "" });
  //   }
  //   gapi.load("client:auth2", start);
  // });

  // var accessToken = gapi.auth.getToken().access_token;
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <AppBarX />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/recipe" element={<CardPage />} />
          <Route path="/splitwise" element={<Splitwise />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <LabelBottomNavigation />
      </ThemeProvider>
    </>
  );
}

export default App;
