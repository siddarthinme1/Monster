import React, { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { Typography, Box, IconButton } from "@mui/material";
import { shareIcons } from "../../Data/MonsterData";

function SharePage() {
  const [text, setText] = useState("https://siddarthinme1.github.io/Monster/");

  const inputHandler = (event) => {
    setText(event.target.value);
  };
  const copy = async () => {
    await navigator.clipboard.writeText(text);
  };

  const handleShare = (url) => {
    window.open(url);
  };
  return (
    <div>
      <Box
        sx={{
          borderRadius: 4,
          padding: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {shareIcons.map((shareIcon, index) => (
          <IconButton
            key={index}
            color="inherit"
            fontSize="large"
            onClick={() => handleShare(shareIcon.url)}
          >
            {shareIcon.icon}
          </IconButton>
        ))}
      </Box>
      <Box
        sx={{
          borderRadius: 4,
          padding: 2,
          display: "flex",
          alignItems: "center",
          border: { xs: "none", sm: "1px solid black" },
        }}
      >
        <Typography
          type="text"
          value={text}
          noWrap
          onChange={inputHandler}
          sx={{ flex: 1, overflow: "hidden" }}
        >
          {text}
        </Typography>
        <IconButton onClick={copy} color="inherit">
          <ContentCopyIcon />
        </IconButton>
      </Box>
    </div>
  );
}

export default SharePage;
