const storeRecipes = recipes => ({
  type: 'STORE_RECIPES_SUCCEED',
  recipes,
});

const storeRecipesFail = recipesError => ({
  type: 'STORE_RECIPES_ERROR',
  recipesError,
});

const filterRecipes = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});

const storeRecipe = recipe => ({
  type: 'STORE_RECIPE_SUCCEED',
  recipe,
});
const storeRecipeFail = recipeError => ({
  type: 'STORE_RECIPE_ERROR',
  recipeError,
});

export { storeRecipes, filterRecipes, storeRecipe, storeRecipeFail, storeRecipesFail };
