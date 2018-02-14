import API_KEY from '../config';

export const fetchRecipes = (ingredient) => {
  return() => {
    console.log('fetch recipe running');
    // fetch(`http://food2fork.com/api/search?key=${API_KEY}&q=${ingredient}`)
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));
  }
}