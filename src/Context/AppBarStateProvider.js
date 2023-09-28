import React, { useState } from "react";

import AppBarContext from "./AppBarContext";

import { useScrollTrigger } from "@mui/material";

const AppBarStateProvider = (props) => {
  const trigger = useScrollTrigger();
  const [state, setState] = useState({
    darkMode: false,
    settings: false,
    signInPopUp: false,
    signUpPopUp: false,
    location: null,
    isAuthenticated: false,
  });

  const value = {
    trigger,
    ...state,
    setDarkMode: (darkMode) => setState({ ...state, darkMode }),
    setSettings: (settings) => setState({ ...state, settings }),
    setSignInPopUp: (signInPopUp) => setState({ ...state, signInPopUp }),
    setSignUpPopUp: (signUpPopUp) => setState({ ...state, signUpPopUp }),
    setLocation: (location) => setState({ ...state, location }),
    setIsAuthenticated: (isAuthenticated) =>
      setState({ ...state, isAuthenticated }),
  };

  return (
    <AppBarContext.Provider value={value}>
      {props.children}
    </AppBarContext.Provider>
  );
};

export default AppBarStateProvider;
