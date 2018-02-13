import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export class RecipeList extends React.Component {
  componentWillMount(){
    console.log('loaded!');
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