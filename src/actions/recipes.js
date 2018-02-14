// import API_KEY from '../config';

export const fetchRecipes = (ingredient) => {
  return() => {
    // console.log('fetch recipe running');
    fetch(`http://food2fork.com/api/search?key=47f4cb3436ae592fb10860d0f9ab7a81&q=${ingredient}`)
      .then(response => response.json())
      // .then(data => console.log(data.recipes))
      .catch(err => console.log(err));
  }
}