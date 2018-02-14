import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import recipeReducer from './reducers/recipes';

const store = createStore(
  recipeReducer,
  applyMiddleware(thunk)
)

export default store;