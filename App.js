import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import RecipeList from './src/components/recipelist';
import IngredientForm from './src/components/ingredientform';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Recipe Finder'}/>
        <IngredientForm />
        <RecipeList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
});

