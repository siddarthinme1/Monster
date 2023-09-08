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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [signInPopUp, setSignInPopUp] = useState(false);

  const handleSignInOpen = () => {
    setSignInPopUp(true);
  };

  const handleSignInClose = () => {
    setSignInPopUp(false);
  };

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <AppBarX
          setDarkMode={setDarkMode}
          handleSignInOpen={handleSignInOpen}
        />
        <SignIn
          signInPopUp={signInPopUp}
          handleSignInClose={handleSignInClose}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
