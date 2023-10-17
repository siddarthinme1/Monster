import React, { useState } from "react";

import AppBarContext from "./AppBarContext";

import { useScrollTrigger } from "@mui/material";

const AppBarStateProvider = (props) => {
  const trigger = useScrollTrigger();
  const [state, setState] = useState({
    darkMode: false,
    theme: "",
    settings: false,
    location: null,
    isAuthenticated: false,
    signInSignUpPopUp: false,
  });

  const value = {
    trigger,
    ...state,
    setTheme: (theme) => setState({ ...state, theme }),
    setDarkMode: (darkMode) => setState({ ...state, darkMode }),
    setSettings: (settings) => setState({ ...state, settings }),
    setLocation: (location) => setState({ ...state, location }),
    setIsAuthenticated: (isAuthenticated) =>
      setState({ ...state, isAuthenticated }),
    setSignInSignUpPopUp: (signInSignUpPopUp) =>
      setState({ ...state, signInSignUpPopUp }),
  };

  return (
    <AppBarContext.Provider value={value}>
      {props.children}
    </AppBarContext.Provider>
  );
};

export default AppBarStateProvider;
