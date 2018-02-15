import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { fetchRecipes } from '../actions/recipes';
import { connect } from 'react-redux';

export class IngredientForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(target) {
    console.log(target);
    if (target.name === 'form') {
      this.setState({
        text: target.value
      })
    }
    console.log(this.state.text);
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
        onChange={(element) => console.log(element)}
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

const mapStateToProps = state => ({
  text: state.text
})

export default connect(mapStateToProps)(IngredientForm);