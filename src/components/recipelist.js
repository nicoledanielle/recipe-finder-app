import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { fetchRecipes } from '../actions/recipes';
import { List, ListItem } from 'react-native-elements';

export class RecipeList extends React.Component {
  componentWillMount(){
    this.props.dispatch(fetchRecipes(this.props.ingredients));
  }

  render() {
    return(
    <View>
      <List containerStyle={{marginBottom: 20}}>
        {
          this.props.recipes.map((l, i) => (
            <ListItem
              roundAvatar
              avatar={{uri:l.image}}
              key={i}
              title={l.title}
            />
          ))
        }
      </List>
    </View>
    );
  }
};

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  recipes: state.recipes
})

export default connect(mapStateToProps)(RecipeList);