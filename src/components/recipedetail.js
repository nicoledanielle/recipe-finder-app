import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Tile } from 'react-native-elements';

export class RecipeDetail extends React.Component {
  render(){
    return(
      <View>
        <Tile
          imageSrc={{require: (`'`+this.props.activeRecipe.image+`'`)}}
          // imageSrc={{require: (www.browneyedbaker.com/wp-content/uploads/2016/07/spicy-cheese-bread-58-600.jpg)}}
          title={this.props.activeRecipe.title}
          featured
          caption={this.props.activeRecipe.publisher}
        />
        <Text>{this.props.activeRecipe.url}</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({

});

const mapStateToProps = state => ({
  activeRecipe: state.activeRecipe
});

export default connect(mapStateToProps)(RecipeDetail);