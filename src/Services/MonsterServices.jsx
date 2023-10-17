import axios from "axios";
import { useState, useEffect } from "react";

const useMonsterServices = () => {
  const useAllRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    const url =
      "https://monsterapp-9b272-default-rtdb.firebaseio.com/recipes.json";

    useEffect(() => {
      const fetchRecipes = async () => {
        try {
          const response = await axios.get(url);
          setRecipes(response.data);
        } catch (error) {
          console.error("Failed to make request: ", error.message);
        }
      };

      fetchRecipes();
    }, []);

    return recipes;
  };

  return {
    useAllRecipes,
  };
};

export default useMonsterServices;
