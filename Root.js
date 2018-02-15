import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import RecipeList from './src/components/recipelist';
import IngredientForm from './src/components/ingredientform';
import { connect } from 'react-redux';

export function Root(props) {

  const view = props.view;

  let page = null;

  if (view === 'home'){
    page = <IngredientForm />
  }

  if (view === 'list'){
    page = <RecipeList />
  }

  return (
    <View style={styles.container}>
      <Header headerText={'Recipe Finder'}/>
      {page}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
});

const mapStateToProps = state => ({
  view: state.view
});

export default connect(mapStateToProps)(Root);