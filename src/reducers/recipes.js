'use strict';

import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_ERROR,
  SEARCH_RECIPES_REQUEST,
  VIEW_DETAIL_REQUEST,
  VIEW_DETAIL_SUCCESS,
  LIST_VIEW,
  START_APP
} from '../actions/recipes'

const initialState = {
  view: 'index',
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
  if (action.type === START_APP){
    return Object.assign({}, state, {
      view: action.view
    })
  }
  else if (action.type === SEARCH_RECIPES_REQUEST){
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
      view: 'list',
      activeRecipe: action.recipes[0]
    })
  }
  else if (action.type === FETCH_RECIPES_ERROR){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  else if (action.type === VIEW_DETAIL_REQUEST){
    return Object.assign({}, state, {
      activeRecipe: {
        title: action.title,
        url: action.url,
        image: action.image,
        publisher: action.publisher
      }
    })
  }
  else if (action.type === VIEW_DETAIL_SUCCESS){
    return Object.assign({}, state, {
      view: 'detail'
    })
  }
  else if(action.type === LIST_VIEW){
    return Object.assign({}, state, {
      view: 'list'
    })
  }
  return state;
}