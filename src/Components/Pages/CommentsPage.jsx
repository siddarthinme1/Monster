import {
  Box,
  Button,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([]);

  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };
  return (
    <div>
      <div>
        <Toolbar>
          <Typography variant="h5">Comments</Typography>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>

        <TextField
          placeholder="Add a comment..."
          value={newComment}
          onChange={handleCommentChange}
        />
        <Button onClick={handleCommentSubmit}>Comment</Button>

        {comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
      </div>
    </div>
  );
}

export default CommentsPage;
