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
export const viewDetailRequest = (image, publisher, title, url) => ({
  type: VIEW_DETAIL_REQUEST,
  image, 
  publisher, 
  title, 
  url
})

export const VIEW_DETAIL_SUCCESS = 'VIEW_DETAIL_SUCCESS';
export const viewDetailSuccess = (view) => ({
  type: VIEW_DETAIL_SUCCESS,
  view
})

export const LIST_VIEW = 'LIST_VIEW';
export const listView = (view) => ({
  type: LIST_VIEW,
  view
})

export const returnList = () => dispatch => {
  console.log('here');
  dispatch(listView());
}

export const searchRecipes = (ingredients) => dispatch => {
  dispatch(searchRecipesRequest(ingredients));
  dispatch(fetchRecipes(ingredients));
}

export const fetchRecipes = (ingredients) => dispatch => {
  dispatch(fetchRecipesRequest());
  return fetch(`https://api.edamam.com/search?q=${ingredients}`+'&app_id=dc07b0c8&app_key=c6e8dc04a0635044a392255f4197c39f&from=0&to=30')
      .then(response => response.json())
      .then(data => {
        let newArray = [];
        data.hits.forEach(recipe => {
          let obj = {
            title: recipe.recipe.label, 
            image: recipe.recipe.image, 
            publisher: recipe.recipe.source, 
            url: recipe.recipe.url};
          newArray.push(obj);
        })
        return newArray;
        // const recipes = data.hits.map(recipe => {
        //   return {
        //     title: recipe.label,
        //     image: recipe.image,
        //     publisher: recipe.source,
        //     url: recipe.url
        //   }
        // })
        // return recipes;
      })
      .then(data => dispatch(fetchRecipesSuccess(data)))
      .catch(err => fetchRecipesError(err));
}

export const viewDetail = (image, publisher, title, url) => dispatch => {
  dispatch(viewDetailRequest(image, publisher, title, url));
  dispatch(viewDetailSuccess());
}