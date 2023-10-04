import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import {
  FormControl,
  Grid,
  TextField,
  Button,
  Chip,
  IconButton,
  Stack,
} from "@mui/material";
import styled from "styled-components";

const FormWrapper = styled("form")(({ theme }) => ({
  marginTop: "20px",
}));

function AddForm() {
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState("");

  const handleAddIngredient = () => {
    if (ingredientInput.trim() !== "") {
      setIngredients([...ingredients, ingredientInput.trim()]);

      setIngredientInput(""); // Clear the input field
    }
  };

  const handleDeleteIngredient = (index) => {
    const updatedIngredients = [...ingredients];

    updatedIngredients.splice(index, 1);

    setIngredients(updatedIngredients);
  };

  return (
    <FormWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Recipe Name" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <Stack direction="row" spacing={1} alignItems="center">
            <TextField
              label="Ingredients"
              variant="outlined"
              fullWidth
              value={ingredientInput}
              onChange={(e) => setIngredientInput(e.target.value)}
            />

            <Button variant="outlined" onClick={handleAddIngredient}>
              <AddBoxIcon />
            </Button>
          </Stack>
          {ingredients.map((ingredient, index) => (
            <Chip
              key={index}
              label={ingredient}
              onDelete={() => handleDeleteIngredient(index)}
              sx={{ margin: "5px" }}
            />
          ))}
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Instructions"
            variant="outlined"
            fullWidth
            multiline
            rows={6}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField label="Preparation Time" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <TextField label="Cooking Time" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <TextField label="Servings" variant="outlined" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <TextField label="Calories" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="success">
            Add Recipe
          </Button>
        </Grid>
      </Grid>
    </FormWrapper>
  );
}

export default AddForm;
