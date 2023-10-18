import React, { useContext, useEffect } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import AppBarX from "../Components/AppBar/AppBarX";
import AppBarContext from "../Context/AppBarContext";
import LabelBottomNavigation from "../Components/BottomNavigation/BottomNavigation";
import CardPage from "../Components/Pages/CardPage";
import AboutPage from "../Components/Pages/AboutPage";
import Splitwise from "../Components/Pages/Splitwise";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Home";
import SignInSignUp from "../Components/Login/SignInSignUp";
import FirebaseContext from "../Context/FirebaseContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({});

function App() {
  const { darkMode } = useContext(AppBarContext);
  const { isLoggedIn } = useContext(FirebaseContext);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <AppBarX />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {isLoggedIn ? (
            <>
              <Route path="/recipe" element={<CardPage />} />
              <Route path="/splitwise" element={<Splitwise />} />
              <Route path="/about" element={<AboutPage />} />
            </>
          ) : (
            ""
          )}
        </Routes>
        <SignInSignUp />
        <LabelBottomNavigation />
      </ThemeProvider>
    </>
  );
}

export default App;
