// import API_KEY from '../config';

export const SEARCH_RECIPES_REQUEST = 'SEARCH_RECIPES_REQUEST';
export const searchRecipesRequest = (ingredients) => ({
  type: SEARCH_RECIPES_REQUEST,
  ingredients
})

export const FETCH_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST';
export const fetchRecipesRequest = (view) => ({
  type: FETCH_RECIPES_REQUEST,
  view
})

export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const fetchRecipesSuccess = (recipes) => ({
  type: FETCH_RECIPES_SUCCESS,
  recipes
})

export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';
export const fetchRecipesError = (error) => ({
  type: FETCH_RECIPES_ERROR,
  error
})

export const searchRecipes = (ingredients) => dispatch => {
  dispatch(searchRecipesRequest(ingredients));
  dispatch(fetchRecipes(ingredients));
}

export const fetchRecipes = (ingredients) => dispatch => {
  dispatch(fetchRecipesRequest());
  return fetch(`http://food2fork.com/api/search?key=47f4cb3436ae592fb10860d0f9ab7a81&q=${ingredients}`)
      .then(response => response.json())
      .then(data => {
        const recipes = data.recipes.map(recipe => {
          return {
            title: recipe.title,
            image: recipe.image_url,
            publisher: recipe.publisher,
            url: recipe.source_url
          }
        })
        return recipes;
      })
      .then(data => dispatch(fetchRecipesSuccess(data)))
      .catch(err => fetchRecipesError(err));
}
