import React, { useContext, useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Grid, TextField, Button, Chip, Stack, Collapse } from "@mui/material";
import styled from "styled-components";
import UploadIcon from "@mui/icons-material/Upload";
import { initialFieldValues } from "../../Data/MonsterData";
import { TransitionGroup } from "react-transition-group";
import FirebaseContext from "../../Context/FirebaseContext";
import { getDatabase, ref, set } from "firebase/database";

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

function AddForm(props) {
  const { user, pushData } = useContext(FirebaseContext);

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

  const handleDeleteIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
    console.log(ingredients);
  };

  console.log(user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const repsponse = pushData("recipe", {
      ...values,
      ingredients,
      user: user.email,
      addedDate: Date(),
      avatarURL: user?.photoURL,
      comments: [],
    });
    console.log("Submit Form", repsponse);
    if (repsponse) {
      resetForm();
      props.handleDialogClose();
    } else {
      alert("Failed to add data");
    }
  };

  return (
    <FormWrapper method="POST" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
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

            <Button title="add" onClick={handleAddIngredient} color="inherit">
              <AddBoxIcon sx={{ m: 0.5 }} fontSize="large" />
            </Button>
          </Stack>
          <TransitionGroup>
            {ingredients.map((ingredient, index) => (
              <Collapse key={index}>
                <Chip
                  key={index}
                  label={ingredient}
                  onDelete={() => handleDeleteIngredient(index)}
                  sx={{ margin: "5px" }}
                />
              </Collapse>
            ))}
          </TransitionGroup>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
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
            required
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
            required
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
            required
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
            required
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
              title="upload"
              component="label"
              variant="contained"
              startIcon={<UploadIcon />}
            >
              Upload image
              <VisuallyHiddenInput type="file" />
            </Button>

            <Button
              title="reset"
              variant="contained"
              color="warning"
              onClick={resetForm}
            >
              Reset
            </Button>

            <Button
              title="add"
              variant="contained"
              color="success"
              type="submit"
            >
              Add Recipe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </FormWrapper>
  );
}

export default AddForm;
