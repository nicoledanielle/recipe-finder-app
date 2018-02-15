import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Tile } from 'react-native-elements';

export default class RecipeDetail extends React.Component {
  render(){
    return(
      <View>
        <Tile
          imageSrc={{require: (this.props.activeRecipe.image)}}
          title="this.props.activeRecipe.title"
          // icon={{name: 'play-circle', type: 'font-awesome'}} 
          contentContainerStyle={{height: 70}}
        >
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>this.props.activeRecipe.publisher</Text>
          <Text>this.props.activeRecipe.url</Text>
        </View>
      </Tile>
      </View>
    )
  }
};

const styles = StyleSheet.create({

});

const mapStateToProps = state => ({
  activeRecipe: state.activeRecipe,
  view: state.view
});

export default connect(mapStateToProps)(RecipeDetail);