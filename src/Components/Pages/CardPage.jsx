import React, { useEffect, useRef, useState } from "react";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import FavoriteIcon from "@mui/icons-material/Favorite";

import ShareIcon from "@mui/icons-material/Share";

import { styled } from "@mui/material/styles";

import { cardData } from "../../Data/MonsterData";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",

  marginLeft: "auto",

  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardWrapper = styled("div")(({ theme }) => ({
  marginTop: "60px",

  display: "flex",
}));

function CardPage() {
  const [expandedStates, setExpandedStates] = useState(
    Array(cardData.length).fill(false)
  );

  const handleExpandClick = (index) => {
    const newExpandedStates = expandedStates.map((state, i) =>
      i === index ? !state : false
    );
    setExpandedStates(newExpandedStates);
  };

  return (
    <CardWrapper>
      <Grid container spacing="auto">
        {cardData.map((cardData, index) => (
          <Grid item key={index}>
            <Card sx={{ m: "10px", maxWidth: "345px" }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "pink" }} aria-label="recipe">
                    {cardData.avatar}
                  </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={cardData.title}
                subheader={cardData.subheader}
              />

              <CardMedia
                component="img"
                height="194"
                image={require("../../Images/paneerButter.jpg")}
                alt="Paneer Butter Masala"
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {cardData.description}
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton>
                  <FavoriteIcon />
                </IconButton>

                <IconButton>
                  <ShareIcon />
                </IconButton>

                <ExpandMore
                  expand={expandedStates[index]}
                  onClick={() => handleExpandClick(index)}
                  aria-expanded={expandedStates[index]}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>

              <Collapse in={expandedStates[index]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </CardWrapper>
  );
}

export default CardPage;
