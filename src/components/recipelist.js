import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { fetchRecipes } from '../actions/recipes';

export class RecipeList extends React.Component {
  componentWillMount(){
    console.log('here');
    // this.props.dispatch(fetchRecipes('broccoli'));
  }

  render() {
    return(
    <View>
      <Text>Recipe List!</Text>
    </View>
    );
  }
};

export default connect()(RecipeList);