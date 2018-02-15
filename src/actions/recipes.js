// import API_KEY from '../config';

export const FETCH_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST';
export const fetchRecipesRequest = () => ({
  type: FETCH_RECIPES_REQUEST,
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

export const fetchRecipes = (ingredients) => dispatch => {
  dispatch(fetchRecipesRequest());
  return() => {
    fetch(`http://food2fork.com/api/search?key=47f4cb3436ae592fb10860d0f9ab7a81&q=${ingredients}`)
      .then(response => response.json())
      .then(data => console.log(data.recipes))
      .catch(err => fetchRecipesError(err));
  }
}