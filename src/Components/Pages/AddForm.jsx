import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Grid, TextField, Button, Chip, Stack } from "@mui/material";
import styled from "styled-components";
import UploadIcon from "@mui/icons-material/Upload";
import { initialFieldValues } from "../../Data/MonsterData";

const FormWrapper = styled("form")(({ theme }) => ({
  marginTop: "20px",
}));

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function AddForm() {
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState("");
  const [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
    // if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialFieldValues);
  };

  const handleAddIngredient = () => {
    if (ingredientInput.trim() !== "") {
      setIngredients([...ingredients, ingredientInput.trim()]);
      setIngredientInput("");
    }
  };

  console.log(ingredients);
  const handleDeleteIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
    console.log(ingredients);
  };

  return (
    <FormWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Recipe Name"
            variant="outlined"
            fullWidth
            name="recipeName"
            value={values.recipeName}
            onChange={handleInputChange}
          />
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

            <Button onClick={handleAddIngredient} color="inherit">
              <AddBoxIcon sx={{ m: 0.5 }} fontSize="large" />
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
            name="instructions"
            value={values.instructions}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Preparation Time"
            variant="outlined"
            fullWidth
            name="preperationTime"
            value={values.preperationTime}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Cooking Time"
            variant="outlined"
            fullWidth
            name="cookingTime"
            value={values.cookingTime}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Servings"
            variant="outlined"
            fullWidth
            name="servings"
            value={values.servings}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Calories"
            variant="outlined"
            fullWidth
            name="calories"
            value={values.calories}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              component="label"
              variant="contained"
              startIcon={<UploadIcon />}
            >
              Upload image
              <VisuallyHiddenInput type="file" />
            </Button>

            <Button variant="contained" color="warning" onClick={resetForm}>
              Reset
            </Button>

            <Button variant="contained" color="success">
              Add Recipe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </FormWrapper>
  );
}

export default AddForm;
