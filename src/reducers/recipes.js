const initialState = {
  recipes: [],
  recipesError: null,
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('STORE_RECIPES_SUCCEED'):
      return {
        ...state,
        recipes: action.recipes,
      };
    case ('STORE_RECIPES_ERROR'):
      return {
        ...state,
        recipesError: action.recipesError,
      };
    default:
      return state;
  }
};

export default recipesReducer;
