import React, { useEffect, useState } from "react";

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
  List,
  Box,
  ListItem,
  Checkbox,
  ListItemText,
  ListItemButton,
  Popover,
  Skeleton,
  useMediaQuery,
  SpeedDial,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";
import CommentIcon from "@mui/icons-material/Comment";
import { styled } from "@mui/material/styles";
import { cardData } from "../../Data/MonsterData";
import DeleteIcon from "@mui/icons-material/Delete";
import ReportIcon from "@mui/icons-material/Report";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import BottomDrawerMobile from "../BottomNavigation/BottomDrawerMobile";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

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
  [theme.breakpoints.up("sm")]: {
    marginTop: "80px",
  },
}));

function CardPage() {
  const [checked, setChecked] = useState([1]);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [isLoading, setIsLoading] = useState(true);
  const [likedCards, setLikedCards] = useState(
    Array(cardData.length).fill(false)
  );

  const [expandedStates, setExpandedStates] = useState(
    Array(cardData.length).fill(false)
  );

  const [openRecipe, setOpenRecipe] = useState(
    Array(cardData.length).fill(false)
  );

  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const [isDrawerBottomOpen, setIsDrawerBottomOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const closeBottomDrawer = (content) => {
    if (isMobile) {
      setIsDrawerBottomOpen(false);
    }
  };

  const openBottomDrawer = (content) => {
    if (isMobile) {
      setIsDrawerBottomOpen(true);
      setSelectedContent(content);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

  const handleToggleCheckbox = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleFavoriteClick = (index) => {
    const updatedCardData = [...likedCards];
    updatedCardData[index] = !updatedCardData[index];
    setLikedCards(updatedCardData);
  };

  const RecipeDialog = ({ index }) => (
    <Dialog fullScreen open={openRecipe[index]} onClose={handleCloseRecipe}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {cardData[index].title}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseRecipe}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SpeedDial
        onClick={handleCloseRecipe}
        ariaLabel="SpeedDial Close Recipe"
        sx={{ position: "fixed", bottom: 75, right: 16 }}
        icon={<CloseIcon />}
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            display="block"
            component="img"
            sx={{
              height: 250,
              width: 350,
              borderRadius: 4,
              margin: "0 auto",
              padding: "10px",
            }}
            alt="Recipe Image"
            src={cardData[index].image}
          />
        </Grid>
        <Grid item xs={12}>
          <CardContent>
            <Typography variant="h6">Ingredients:</Typography>
            <List>
              {Array.isArray(cardData[index].ingredients) &&
                cardData[index].ingredients.map((ingredient, index) => (
                  <ListItem dense>{ingredient}</ListItem>
                ))}
            </List>
          </CardContent>
        </Grid>
        <Grid item xs={12}>
          <CardContent>
            <Typography variant="h6">Instructions</Typography>
            <Typography sx={{ mt: 2 }} paragraph>
              {cardData[index].description}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Dialog>
  );

  const moreId = "more-option-for-card";
  const [cardAnchorEl, setCardAnchorEl] = useState(null);

  const isMoreOpen = Boolean(cardAnchorEl);

  const handleMoreOpen = (event) => {
    setCardAnchorEl(event.currentTarget);
  };

  const handleMoreClose = () => {
    setCardAnchorEl(false);
  };

  const renderMoreMenu = (
    <Popover
      anchorEl={cardAnchorEl}
      id={moreId}
      keepMounted
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMoreOpen}
      onClose={handleMoreClose}
    >
      <List>
        <ListItemButton>
          <DeleteIcon />
        </ListItemButton>

        <ListItemButton>
          <ReportIcon />
        </ListItemButton>

        <ListItemButton>
          <NotInterestedIcon />
        </ListItemButton>
      </List>
    </Popover>
  );

  return (
    <>
      {isLoading ? (
        <CardWrapper>
          <Grid container spacing="auto" justifyContent="center">
            {Array.from({ length: cardData.length }).map((_, index) => (
              <Grid item key={index}>
                <Card sx={{ m: "10px", maxWidth: "345px" }}>
                  <CardHeader
                    avatar={
                      <Skeleton
                        animation="wave"
                        variant="circular"
                        width={40}
                        height={40}
                      />
                    }
                    title={
                      <Skeleton animation="wave" variant="text" width={120} />
                    }
                    subheader={
                      <Skeleton animation="wave" variant="text" width={80} />
                    }
                  />

                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width="345px"
                    height="211px"
                  />

                  <CardContent>
                    <Skeleton animation="wave" variant="text" />
                    <Skeleton animation="wave" variant="text" />
                    <Skeleton animation="wave" variant="text" width="80%" />
                  </CardContent>
                  <CardActions>
                    <Skeleton animation="wave" variant="circular" />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardWrapper>
      ) : (
        <CardWrapper>
          <Grid container spacing="auto" justifyContent="center">
            {cardData.map((card, index) => (
              <Grid item key={index}>
                <Card sx={{ m: "10px", maxWidth: "345px" }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "secondary" }} aria-label="recipe">
                        {card.avatar}
                      </Avatar>
                    }
                    action={
                      <IconButton>
                        <MoreVertIcon onClick={handleMoreOpen} />
                      </IconButton>
                    }
                    title={card.title}
                    subheader={card.subheader}
                  />
                  <CardActionArea onClick={() => handleOpenRecipe(index)}>
                    <CardMedia
                      component="img"
                      height="194"
                      image={card.image}
                      alt={card.title}
                      sx={{
                        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
                      }}
                    />
                    <CardContent
                      sx={{
                        overflow: "auto",
                        height: 100,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {card.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  <CardActions disableSpacing>
                    <IconButton
                      color={likedCards[index] ? "secondary" : "default"}
                      onClick={() => handleFavoriteClick(index)}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton>
                      <CommentIcon
                        onClick={() => openBottomDrawer("comments")}
                      />
                    </IconButton>
                    <IconButton onClick={() => openBottomDrawer("share")}>
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
                      <Typography variant="h6">Ingredients:</Typography>
                      <Box>
                        <List
                          sx={{
                            width: "100%",
                            maxWidth: 360,
                            bgcolor: "background.paper",
                            position: "relative",
                            overflow: "auto",
                            maxHeight: 150,
                            "& ul": { padding: 0 },
                          }}
                          subheader={<li />}
                        >
                          {Array.isArray(card.ingredients) &&
                            card.ingredients.map((ingredient, index) => {
                              const labelId = `checkbox-list-secondary-label-${index}`;
                              return (
                                <ListItem
                                  key={index}
                                  secondaryAction={
                                    <Checkbox
                                      edge="end"
                                      onChange={handleToggleCheckbox(index)}
                                      checked={checked.indexOf(index) !== -1}
                                      inputProps={{
                                        "aria-labelledby": labelId,
                                      }}
                                    />
                                  }
                                  disablePadding
                                >
                                  <ListItemButton
                                    role={undefined}
                                    onClick={handleToggleCheckbox(index)}
                                    dense
                                  >
                                    <ListItemText
                                      id={labelId}
                                      primary={ingredient}
                                    />
                                  </ListItemButton>
                                </ListItem>
                              );
                            })}
                        </List>
                      </Box>
                    </CardContent>
                  </Collapse>
                </Card>
                {selectedCardIndex === index && <RecipeDialog index={index} />}
              </Grid>
            ))}
          </Grid>
          {renderMoreMenu}

          <BottomDrawerMobile
            openBottomDrawer={openBottomDrawer}
            closeBottomDrawer={closeBottomDrawer}
            isDrawerBottomOpen={isDrawerBottomOpen}
            drawerContent={selectedContent}
          />
        </CardWrapper>
      )}
    </>
  );
}

export default CardPage;
