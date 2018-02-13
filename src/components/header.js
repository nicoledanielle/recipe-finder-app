import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Header extends React.Component {
  render() {
    return(
      <View style={styles.headcontainer}>
        <Text style={styles.headtext}>Recipe Finder</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headcontainer: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  headtext: {
    fontSize: 30
  }
});