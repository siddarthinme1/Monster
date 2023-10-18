import React, { useContext, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Paper, Slide } from "@mui/material";
import AppBarContext from "../../Context/AppBarContext";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import InfoIcon from "@mui/icons-material/Info";
import SpeedDialX from "../SpeedDial/SpeedDialX";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../../Context/FirebaseContext";

function LabelBottomNavigation() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(FirebaseContext);
  const { trigger } = useContext(AppBarContext);
  const [value, setValue] = useState(0);

  const navigationItems = [
    { label: "Home", icon: <HomeIcon />, route: "/" },
    {
      label: "Recipe",
      icon: <FoodBankIcon />,
      route: "recipe",
      disabled: !isLoggedIn,
    },

    {
      label: "Library",
      icon: <LibraryBooksIcon />,
      route: "splitwise",
      disabled: !isLoggedIn,
    },

    {
      label: "About",
      icon: <InfoIcon />,
      route: "about",
      disabled: !isLoggedIn,
    },
  ];

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
        >
          {navigationItems.map((item, index) => (
            <BottomNavigationAction
              key={index}
              label={item.label}
              icon={item.icon}
              onClick={() => navigate(item.route)}
              disabled={item.disabled}
            />
          ))}
        </BottomNavigation>
        <SpeedDialX />
      </Paper>
    </Slide>
  );
}

export default LabelBottomNavigation;
