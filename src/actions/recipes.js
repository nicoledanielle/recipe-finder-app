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

export const VIEW_DETAIL_REQUEST = 'VIEW_DETAIL_REQUEST';
export const viewDetailRequest = (activeRecipe) => ({
  type: VIEW_DETAIL_REQUEST,
  activeRecipe
})

export const VIEW_DETAIL_SUCCESS = 'VIEW_DETAIL_SUCCESS';
export const viewDetailSuccess = (view) => ({
  type: VIEW_DETAIL_SUCCESS,
  view
})

export const searchRecipes = (ingredients) => dispatch => {
  dispatch(searchRecipesRequest(ingredients));
  dispatch(fetchRecipes(ingredients));
}

export const fetchRecipes = (ingredients) => dispatch => {
  dispatch(fetchRecipesRequest());
  return fetch(`http://food2fork.com/api/search?key=52cd696e0649c791e26a0ef726c4134a=${ingredients}`)
      .then(response => response.json())
      .then(data => console.log(data))
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

export const viewDetail = (data) => dispatch => {
  dispatch(viewDetailRequest(data));
  dispatch(viewDetailSuccess());
}