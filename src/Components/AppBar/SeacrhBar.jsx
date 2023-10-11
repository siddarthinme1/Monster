import { IconButton, InputBase, alpha, styled } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "24px 0px 0px  24px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: "0px",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

function SeacrhBar() {
  const [isFocusedSeacrh, setIsFocusedSeacrh] = useState(false);

  const showSeacrhIcon = () => setIsFocusedSeacrh(true);
  const hideSearchIcon = () => setIsFocusedSeacrh(false);
  return (
    <>
      <Search onFocus={showSeacrhIcon} onBlur={hideSearchIcon}>
        {isFocusedSeacrh ? (
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        ) : null}
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <IconButton
        color="inherit"
        sx={{
          backgroundColor: "inherit",
          borderRadius: "0px 24px 24px 0px",
        }}
      >
        <MicIcon />
      </IconButton>
      {/* <IconButton size="large" color="inherit">
        <MicIcon />
      </IconButton> */}
    </>
  );
}

export default SeacrhBar;
