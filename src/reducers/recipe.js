const recipeReducer = (state = [], action) => {
  switch (action.type) {
    case ('STORE_RECIPE_SUCCEED'):
      return {
        ...state,
        recipe: action.recipe,
      };
    case ('STORE_RECIPE_ERROR'):
      return {
        ...state,
        recipeError: action.recipeError,
      };
    default:
      return state;
  }
};

export default recipeReducer;
