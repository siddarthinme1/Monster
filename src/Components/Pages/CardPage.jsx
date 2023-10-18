import React, { useContext, useEffect, useState } from "react";

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
  Tooltip,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";
import CommentIcon from "@mui/icons-material/Comment";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import ReportIcon from "@mui/icons-material/Report";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import BottomDrawerMobile from "../BottomNavigation/BottomDrawerMobile";
import CommentsPage from "./CommentsPage";
import SharePage from "./SharePage";
import useMonsterServices from "../../Services/MonsterServices";
import axios from "axios";
import {
  getDatabase,
  ref,
  set,
  push,
  update,
  onValue,
} from "firebase/database";

import FirebaseContext from "../../Context/FirebaseContext";
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
  const { database } = useContext(FirebaseContext);
  const [cardData, setCardData] = useState([]);
  const length = cardData?.length;
  const [indexComments, setIndexComments] = useState(0);
  const [checked, setChecked] = useState([]);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isDrawerBottomOpen, setIsDrawerBottomOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [openRecipe, setOpenRecipe] = useState(false);
  const [likedCards, setLikedCards] = useState([]);
  const [expandedIngredient, setExpandedIngredient] = useState([]);
  const [expandedComment, setExpandedComment] = useState([]);
  const [expandedShare, setExpandedShare] = useState([]);
  const [commentKey, setCommentKey] = useState("");

  useEffect(() => {
    setLikedCards(Array(length).fill(false));
    setExpandedIngredient(Array(length).fill(false));
    setExpandedComment(Array(length).fill(false));
    setExpandedShare(Array(length).fill(false));
  }, [cardData, length]);

  useEffect(() => {
    const refDatabase = ref(database, "recipe");
    onValue(refDatabase, (snapshot) => {
      let recipes = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        recipes.push({ key: keyName, data: data });
      });
      setCardData(recipes);
    });
  }, [1]);

  const closeBottomDrawer = () => {
    setIsDrawerBottomOpen(false);
  };

  const handleOpenDrawer = (content, index, setExpandedFunction, card) => {
    setCommentKey(card.key);
    if (isMobile) {
      setIsDrawerBottomOpen(true);
      setSelectedContent(content);
      setIndexComments(index);
    } else {
      setExpandedFunction((prevStates) =>
        prevStates.map((state, i) => (i === index ? !state : false))
      );
      setExpandedIngredient((prevStates) =>
        prevStates.map((state, i) => (i === index ? false : state))
      );
    }
  };

  const handleExpandClick = (index, card) => {
    console.log("card", card);
    setCommentKey(card.key);
    setExpandedIngredient((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : false))
    );
    setExpandedComment((prevStates) =>
      prevStates.map((state, i) => (i === index ? false : state))
    );
    setExpandedShare((prevStates) =>
      prevStates.map((state, i) => (i === index ? false : state))
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenRecipe = (index, card) => {
    setSelectedCard(card);
    setSelectedCardIndex(index);
    setOpenRecipe(true);
  };

  const handleCloseRecipe = () => {
    setOpenRecipe(false);
  };

  const handleToggleCheckbox = (index) => () => {
    const currentIndex = checked.indexOf(index);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(index);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  console.log("commentKey == ", commentKey);

  const handleFavoriteClick = async (index) => {
    const url =
      "https://monsterapp-9b272-default-rtdb.firebaseio.com/recipes.json";
    try {
      const response = await axios.get(`${url}/${index}`);
      console.log("", response);
    } catch (error) {
      console.error("Failed to make request : ", error.message);
    }
  };

  const RecipeDialog = () => (
    <Dialog fullScreen open={openRecipe} onClose={handleCloseRecipe}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {selectedCard.data.title}
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
      <Tooltip title="close">
        <SpeedDial
          onClick={handleCloseRecipe}
          ariaLabel="SpeedDial Close Recipe"
          sx={{ position: "fixed", bottom: 75, right: 16 }}
          icon={<CloseIcon />}
        ></SpeedDial>
      </Tooltip>
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
            src={require("../../Data/Images/spaghetti.jpg")}
          />
        </Grid>
        <Grid item xs={12}>
          <CardContent>
            <Typography variant="h6">Ingredients:</Typography>
            <List>
              {Array.isArray(selectedCard?.ingredients) &&
                selectedCard?.ingredients.map((ingredient, index) => (
                  <ListItem dense>{ingredient}</ListItem>
                ))}
            </List>
          </CardContent>
        </Grid>
        <Grid item xs={12}>
          <CardContent>
            <Typography variant="h6">Description</Typography>
            <Typography sx={{ mt: 2 }} paragraph>
              {selectedCard?.data.description}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12}>
          <CardContent>
            <Typography variant="h6">Procedure</Typography>
            <List>
              {selectedCard.data.ingredients.map((ingredient) => (
                <ListItem dense>
                  <Typography variant="body1">{ingredient}</Typography>
                </ListItem>
              ))}
            </List>
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
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
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

  const RenderIngredients = (card) => {
    return (
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
                      <ListItemText id={labelId} primary={ingredient} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
          </List>
        </Box>
      </CardContent>
    );
  };

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
                {/* {console.log(card)} */}
                <Card sx={{ m: "10px", maxWidth: "345px" }}>
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{ bgcolor: "secondary" }}
                        aria-label="recipe"
                        src={card.data.avatarURL}
                      />
                    }
                    action={
                      <Tooltip title="More">
                        <IconButton onClick={handleMoreOpen}>
                          <MoreVertIcon />
                        </IconButton>
                      </Tooltip>
                    }
                    title={card.data.user}
                    subheader={card.data.addedDate}
                  />
                  <CardActionArea onClick={() => handleOpenRecipe(index, card)}>
                    <CardMedia
                      component="img"
                      height="194"
                      image={require("../../Data/Images/spaghetti.jpg")}
                      alt={card.data.title}
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
                      <Typography variant="h6" color="text.secondary">
                        {card.data.recipeName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {card.data.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  <CardActions disableSpacing>
                    <Tooltip title="Like">
                      <IconButton
                        color={card.data.liked ? "secondary" : "default"}
                        onClick={() => handleFavoriteClick(index)}
                      >
                        <FavoriteIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Comment">
                      <IconButton
                        onClick={() =>
                          handleOpenDrawer(
                            "comments",
                            index,
                            setExpandedComment,
                            card
                          )
                        }
                      >
                        <CommentIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Share">
                      <IconButton
                        onClick={() =>
                          handleOpenDrawer(
                            "share",
                            index,
                            setExpandedShare,
                            card
                          )
                        }
                      >
                        <ShareIcon />
                      </IconButton>
                    </Tooltip>
                    <ExpandMore
                      expand={expandedIngredient[index]}
                      onClick={() => handleExpandClick(index, card)}
                      aria-expanded={expandedIngredient[index]}
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  {console.log("commentkey =", commentKey)}

                  <Collapse
                    in={expandedIngredient[index]}
                    timeout="auto"
                    unmountOnExit
                    direction="up"
                  >
                    {RenderIngredients(card.data, index)}
                  </Collapse>

                  <Collapse
                    in={expandedComment[index]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <CommentsPage
                      index={card.key}
                      comments={card.data?.comments}
                      commentKey={commentKey}
                    />
                  </Collapse>

                  <Collapse
                    in={expandedShare[index]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <SharePage />
                  </Collapse>
                </Card>
                {selectedCardIndex === index && <RecipeDialog />}
                {console.log("selectedCardIndex", selectedCardIndex)}
              </Grid>
            ))}
          </Grid>
          {renderMoreMenu}
          <BottomDrawerMobile
            handleOpenDrawer={handleOpenDrawer}
            closeBottomDrawer={closeBottomDrawer}
            isDrawerBottomOpen={isDrawerBottomOpen}
            drawerContent={selectedContent}
            index={indexComments}
            cardData={cardData}
          />
        </CardWrapper>
      )}
    </>
  );
}

export default CardPage;
