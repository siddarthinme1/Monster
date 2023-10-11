import React, { useState } from "react";

import { TransitionGroup } from "react-transition-group";

import { cardData } from "../../Data/MonsterData";

import {
  Avatar,
  Box,
  Button,
  Collapse,
  Divider,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";

function CommentsPage(props) {
  const [comments, setComments] = useState(cardData[props.index].comments);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [avatar] = useState(cardData[props.index].avatar);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => setNewComment(e.target.value);

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleShowCommentButton = () => setIsButtonVisible(true);

  const handleHideCommentButton = () => setIsButtonVisible(false);

  return (
    <div>
      {!isMobile ? (
        <>
          <Divider />
          <Toolbar>
            <Typography variant="h5">Comments</Typography>
          </Toolbar>
          <Divider />
        </>
      ) : (
        ""
      )}
      <Box sx={{ display: "flex", m: 1 }}>
        <Avatar sx={{ bgcolor: "secondary", m: 1 }} aria-label="recipe">
          {avatar}
        </Avatar>

        <TextField
          fullWidth
          placeholder="Add a comment..."
          value={newComment}
          onChange={handleCommentChange}
          multiline
          rows={isButtonVisible ? "2" : "1"}
          onClick={handleShowCommentButton}
        />
      </Box>
      <TransitionGroup>
        <Collapse>
          <Box sx={{ display: "flex", ml: 20 }}>
            {isButtonVisible && (
              <>
                <Button title="comment" onClick={handleCommentSubmit}>
                  Comment
                </Button>

                <Button title="comment" onClick={handleHideCommentButton}>
                  Cancel
                </Button>
              </>
            )}
          </Box>
        </Collapse>
      </TransitionGroup>

      <Box sx={{ maxHeight: "150px", overflowY: "auto" }}>
        <TransitionGroup>
          {comments.map((comment, index) => (
            <Collapse key={index}>
              <Divider />
              <Box
                sx={{
                  ml: "50px",
                  padding: "8px",
                  borderRadius: "5px",
                  marginBottom: "8px",
                }}
              >
                {comment}
              </Box>
            </Collapse>
          ))}
        </TransitionGroup>
      </Box>
    </div>
  );
}

export default CommentsPage;
