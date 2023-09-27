import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Paper,
  Typography,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
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
  marginTop: "75px",
}));

function CardPage() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardWrapper>
      <Grid container spacing="auto">
        {cardData.map((cardData) => (
          <Grid item>
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
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
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
