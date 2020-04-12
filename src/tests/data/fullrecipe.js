const recipe = {
  image: 'logo.png',
  title: 'test title',
  providerSite: 'https://www.google.com/',
  servings: 2,
  cookingTime: '45 minutes',
  categoryTags: 'lunch, desert',
  provider: 'test provider',
};

const recipes = [recipe];
const recipesError = {
  random: 'test random',
  message: 'test error message',
};
const recipeError = recipesError;
const filter = 'All';

export {
  recipe, recipes, recipesError, recipeError, filter,
};
