import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header(props) {
  return(
    <View style={styles.headContainer}>
      <Text style={styles.headText}>{props.headerText}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  headContainer: {
    backgroundColor: '#5352ed',
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
  headText: {
    fontSize: 30,
    color: '#f1f2f6',
    fontWeight: 'bold'
  }
});