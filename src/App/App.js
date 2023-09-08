import React, { useState } from "react";
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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [signInPopUp, setSignInPopUp] = useState(false);
  const [signUpPopUp, setSignUpPopUp] = useState(false);

  const handleSignInOpen = () => {
    setSignInPopUp(true);
  };

  const handleSignInClose = () => {
    setSignInPopUp(false);
  };

  const handleSignUpOpen = () => {
    setSignUpPopUp(true);
  };

  const handleSignUpClose = () => {
    setSignUpPopUp(false);
  };

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <AppBarX
          setDarkMode={setDarkMode}
          handleSignInOpen={handleSignInOpen}
          darkMode={darkMode}
        />
        <SignIn
          signInPopUp={signInPopUp}
          setSignInPopUp={setSignInPopUp}
          setSignUpPopUp={setSignUpPopUp}
        />
        <SignUp
          signUpPopUp={signUpPopUp}
          setSignInPopUp={setSignInPopUp}
          setSignUpPopUp={setSignUpPopUp}
        />
        {/* <AboutPage /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
