import React, { useState } from "react";
import AppBarContext from "./AppBarContext";

const AppBarStateProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [settings, setSettings] = useState(false);
  const [signInPopUp, setSignInPopUp] = useState(false);
  const [signUpPopUp, setSignUpPopUp] = useState(false);
  const [location, setLocation] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <AppBarContext.Provider
      value={{
        darkMode,
        setDarkMode,
        settings,
        setSettings,
        signInPopUp,
        setSignInPopUp,
        signUpPopUp,
        setSignUpPopUp,
        location,
        setLocation,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {props.children}
    </AppBarContext.Provider>
  );
};

export default AppBarStateProvider;
