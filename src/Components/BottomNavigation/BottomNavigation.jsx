import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Paper, Slide, useScrollTrigger } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";

function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");
  const trigger = useScrollTrigger();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Slide>
  );
}

export default LabelBottomNavigation;
