import React, { useState } from "react";

import { FormControl, Grid, TextField, Button, Chip } from "@mui/material";
import styled from "styled-components";

const FormWrapper = styled("div")(({ theme }) => ({
  marginTop: "20px",
}));

function AddForm() {
  const [ingredients, setIngredients] = useState([]);

  const handleAddIngredient = (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      setIngredients([...ingredients, event.target.value.trim()]);
      event.target.value = "";
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
          {ingredients.map((ingredient, index) => (
            <Chip
              key={index}
              label={ingredient}
              onDelete={() => handleDeleteIngredient(index)}
              style={{ marginRight: "8px", marginBottom: "8px" }}
            />
          ))}

          <TextField
            label="Ingredients"
            variant="outlined"
            fullWidth
            onKeyPress={handleAddIngredient}
          />
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
