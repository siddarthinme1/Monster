import React, { useState } from "react";

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
  CardActionArea,
  Dialog,
  AppBar,
  Toolbar,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";
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
  marginTop: "80px",

  display: "flex",
}));

function CardPage() {
  const [expandedStates, setExpandedStates] = useState(
    Array(cardData.length).fill(false)
  );

  const [openRecipe, setOpenRecipe] = useState(
    Array(cardData.length).fill(false)
  );

  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleExpandClick = (index) => {
    setExpandedStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : false))
    );
  };

  const handleOpenRecipe = (index) => {
    setSelectedCardIndex(index);

    setOpenRecipe((prevStates) =>
      prevStates.map((state, i) => (i === index ? true : false))
    );
  };

  const handleCloseRecipe = () => {
    setSelectedCardIndex(null);

    setOpenRecipe((prevStates) =>
      prevStates.map((state, i) => (i === selectedCardIndex ? false : state))
    );
  };

  const RecipeDialog = ({ index }) => (
    <Dialog fullScreen open={openRecipe[index]} onClose={handleCloseRecipe}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleCloseRecipe}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {cardData[index].title}
          </Typography>
        </Toolbar>
      </AppBar>

      <CardContent>
        <Typography paragraph>{cardData[index].description}</Typography>
      </CardContent>
    </Dialog>
  );

  return (
    <>
      <CardWrapper>
        <Grid container spacing="auto" justifyContent="center">
          {cardData.map((card, index) => (
            <Grid item key={index}>
              <Card sx={{ m: "10px", maxWidth: "345px" }}>
                <CardActionArea onClick={() => handleOpenRecipe(index)}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "secondary" }} aria-label="recipe">
                        {card.avatar}
                      </Avatar>
                    }
                    action={
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={card.title}
                    subheader={card.subheader}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={require("../../Images/paneerButter.jpg")}
                    alt={card.title}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions disableSpacing>
                  <IconButton color={card.liked ? "secondary" : "none"}>
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

                <Collapse
                  in={expandedStates[index]}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                  </CardContent>
                </Collapse>
              </Card>
              {selectedCardIndex === index && <RecipeDialog index={index} />}
            </Grid>
          ))}
        </Grid>
      </CardWrapper>
    </>
  );
}

export default CardPage;
