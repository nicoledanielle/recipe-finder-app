import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import RecipeList from './src/components/recipelist';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Recipe Finder'}/>
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

