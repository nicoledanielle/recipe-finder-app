import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { fetchRecipes } from '../actions/recipes';

export class IngredientForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleInputChange(e) {
    console.log(e);
    // if (target.name === 'form') {
    //   this.setState({
    //     text: target.value
    //   })
    // }
    // console.log(this.state.text);
  }

  handleSubmit = () => {
    // const value = this._form.getValue();
    console.log('submission')
  }

  render() {
    return(
    <View>
      <FormLabel>Ingredients</FormLabel>
      <FormInput
        name='form'
        textInputRef='ingreds'
        onChange={(e) => this.handleInputChange(e)}
      />
      <Button
        title='Find Recipes!'
        textStyle={{ 
          fontWeight: "700"
        }}
        buttonStyle={{
          backgroundColor: "rgba(132, 199, 186, 1)",
          height: 45,
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5
        }}
        onPress={this.handleSubmit}
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
  button: {

  }
});

export default IngredientForm;