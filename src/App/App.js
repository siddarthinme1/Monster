import React, { useState } from "react";
import {
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import AppBarX from "../Components/AppBar/AppBarX";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <AppBarX setDarkMode={setDarkMode} />
        <Typography>Hello</Typography>
      </ThemeProvider>
    </>
  );
}

export default App;
