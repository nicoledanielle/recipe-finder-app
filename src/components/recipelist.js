import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { fetchRecipes } from '../actions/recipes';
import { List, ListItem } from 'react-native-elements';

const list = [];

export class RecipeList extends React.Component {
  componentWillMount(){
    console.log('recipe list mounting');
    this.props.dispatch(fetchRecipes('broccoli'));
  }

  componentDidMount(){
    list = this.props.recipes;
  }

  render() {
    return(
    <View>
      <List containerStyle={{marginBottom: 20}}>
        {
          list.map((l, i) => (
            <ListItem
              roundAvatar
              avatar={{uri:l.url}}
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
  recipes: state.recipes
})

export default connect(mapStateToProps)(RecipeList);