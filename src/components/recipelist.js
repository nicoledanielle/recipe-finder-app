import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { fetchRecipes } from '../actions/recipes';

export class RecipeList extends React.Component {
  componentWillMount(){
    console.log('run the fetch recipes function');
    // fetchRecipes('broccoli');
  }

  render() {
    return(
    <View>
      <Text>Recipe List!</Text>
    </View>
    );
  }
};

export default RecipeList;