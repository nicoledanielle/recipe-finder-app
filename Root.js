import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import RecipeList from './src/components/recipelist';
import IngredientForm from './src/components/ingredientform';
import RecipeDetail from './src/components/recipedetail';
import LandingPage from './src/components/landingpage';
import { connect } from 'react-redux';

export function Root(props) {

  const view = props.view;

  let page = null;

  if (view === 'index'){
    page = <LandingPage />
  }

  if (view === 'home'){
    page = <IngredientForm />
  }

  if (view === 'list'){
    page = <RecipeList />
  }

  if (view === 'detail'){
    page = <RecipeDetail />
  }


  return (
    <View style={styles.container}>
      {page}
    </View>
  )
}

{/* <Header headerText={'CHEFSPIRATION'}/> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6'
  },
});

const mapStateToProps = state => ({
  view: state.view
});

export default connect(mapStateToProps)(Root);