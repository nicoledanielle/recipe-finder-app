'use strict';

import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_ERROR,
  SEARCH_RECIPES_REQUEST
} from '../actions/recipes'

const initialState = {
  view: 'home',
  loading: false,
  error: null,
  text: '',
  ingredients: null,
  recipes: [],
  activeRecipe: {
    title: '',
    url: '',
    image: '',
    publisher: ''
  }
};

export default function recipeReducer(state = initialState, action) {
  if (action.type === SEARCH_RECIPES_REQUEST){
    return Object.assign({}, state, {
      ingredients: action.ingredients
    })
  }
  else if(action.type === FETCH_RECIPES_REQUEST){
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  else if (action.type === FETCH_RECIPES_SUCCESS){
    return Object.assign({}, state, {
      loading: false,
      error: null,
      recipes: action.recipes,
      view: 'detail',
      activeRecipe: action.recipes[0]
    })
  }
  else if (action.type === FETCH_RECIPES_ERROR){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  return state;
}