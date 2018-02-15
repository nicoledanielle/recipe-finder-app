'use strict';

import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_ERROR
} from '../actions/recipes'

const initialState = {
  view: 'home',
  loading: false,
  error: null,
  text: '',
  ingredients: [],
  recipes: [],
  activeRecipe: {
    title: '',
    url: '',
    image: '',
    publisher: ''
  }
};

export default function recipeReducer(state = initialState, action) {
  if(action.type === FETCH_RECIPES_REQUEST){
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
      view: 'focus',
      activeRecipe: {
        title: '',
        url: '',
        image: '',
        publisher: ''
      }
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