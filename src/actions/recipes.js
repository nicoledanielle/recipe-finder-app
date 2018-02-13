import axios from 'axios';
import API_KEY from '../config';

export const fetchRecipes = (ingredient) => {
  axios.get(`http://food2fork.com/api/search?key=${API_KEY}&q=${ingredient}`)
  .then(response => console.log(response));
}
