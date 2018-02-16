import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { fetchRecipes, viewDetail } from '../actions/recipes';
import { List, ListItem } from 'react-native-elements';

export class RecipeList extends React.Component {
  // componentWillMount(){
  //   this.props.dispatch(fetchRecipes(this.props.ingredients));
  // }

  handleDetail(data){
    this.props.dispatch(viewDetail(data.image, data.publisher, data.title, data.url))
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
              subtitle={l.publisher}
              onPress={() => {this.handleDetail(l)}}
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