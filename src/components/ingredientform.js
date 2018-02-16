import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { fetchRecipes, searchRecipes } from '../actions/recipes';
import { connect } from 'react-redux';
import Header from './header';

export class IngredientForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(target) {
    this.setState({
      text: target
    })
  }

  handleSubmit = () => {
    this.props.dispatch(searchRecipes(this.state.text))
  }

  render() {
    return(
    <View style={styles.mainView}>
      <Header />
      <View style={styles.parentdiv}>
      <View style={styles.formcontainer}>
        <FormLabel
          labelStyle={{
            color: "#2f3542",
            fontWeight: "700",
            backgroundColor: '#f1f2f6',
            fontSize: 20
          }}
        >Ingredients</FormLabel>
        <FormInput
          name='form'
          textInputRef='ingreds'
          onChangeText={this.handleInputChange}
          inputStyle={{ 
            fontSize: 20,
            height: 60
          }}
        />
        <Button
          title='Find Recipes!'
          textStyle={{ 
            fontWeight: "700",
            fontSize: 20
          }}
          buttonStyle={{
            backgroundColor: "#ffa502",
            height: 60,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
          onPress={this.handleSubmit}
        />
      </View>
      </View>
    </View>
    );
  }
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#f1f2f6"
  },
  parentdiv: {
    alignItems: 'center'
  },
  formcontainer: {
    marginTop: 100,
    width: 400
  }
});

const mapStateToProps = state => ({
  text: state.text
})

export default connect(mapStateToProps)(IngredientForm);