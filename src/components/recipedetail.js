import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Tile } from 'react-native-elements';
import FontAwesome from 'react-fontawesome';
import { returnList } from '../actions/recipes';

export class RecipeDetail extends React.Component {
  componentDidMount(){
    console.log(this.props.activeRecipe.image)
  }

  goBack(){
    this.props.dispatch(returnList());
  }

  render(){
    return(
      <View>
        <Button
          onPress={() => {this.goBack}}
          icon={<FontAwesome name='arrow-left' />}
          title='Back'
          buttonStyle={{
            backgroundColor: "#ff4757",
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
        />
        <Tile
          imageSrc={{require: (this.props.activeRecipe.image)}}
          title={this.props.activeRecipe.title}
          featured
          caption={this.props.activeRecipe.publisher}
        />
        <Button 
          title='View Recipe'
          textStyle={{
            fontWeight: "700"
          }}
          buttonStyle={{
            backgroundColor: "#ffa502",
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }} />
      </View>
    )
  }
};

// onPress={() => Linking.openURL(`${this.props.activeRecipe.url}`)}

const mapStateToProps = state => ({
  activeRecipe: state.activeRecipe
});

export default connect(mapStateToProps)(RecipeDetail);