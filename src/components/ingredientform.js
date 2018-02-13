import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { fetchRecipes } from '../actions/recipes';

export class IngredientForm extends React.Component {

  render() {
    return(
    <View>
      <FormLabel>Ingredients</FormLabel>
      <FormInput />
      <Button
        text='Find Recipes!'
        textStyle={{ fontWeight: "700" }}
        buttonStyle={{
          backgroundColor: "rgba(132, 199, 186, 1)",
          height: 45,
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5
        }}
      />
    </View>
    );
  }
};

const styles = StyleSheet.create({
  textinput: {
    backgroundColor: '#fff',
    height: 100
  },
});

export default IngredientForm;