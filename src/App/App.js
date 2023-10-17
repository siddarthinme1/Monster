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
import SignInSignUp from "../Components/Login/SignInSignUp";
import { onAuthStateChanged } from "firebase/auth";
import FirebaseContext from "../Context/FirebaseContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({});

function App() {
  const { darkMode, setUser, user } = useContext(AppBarContext);
  const { firebaseAuth } = useContext(FirebaseContext);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log("Welcome ", user);
        setUser(user);
      } else {
        setUser(null);
        console.log("You are logged out");
      }
    });
  }, [onAuthStateChanged]);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <AppBarX />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/recipe" element={<CardPage />} />
          <Route path="/splitwise" element={<Splitwise />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <SignInSignUp />
        <LabelBottomNavigation />
      </ThemeProvider>
    </>
  );
}

export default App;
