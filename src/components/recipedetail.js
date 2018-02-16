import React from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';
import { connect } from 'react-redux';
import { Button, Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { returnList } from '../actions/recipes';

export class RecipeDetail extends React.Component {

  goBack(){
    this.props.dispatch(returnList());
  }

  openRecipe(){
    Linking.openURL(this.props.activeRecipe.url).catch(err => console.error('An error occurred', err));
  }

  render(){
    return(
      <View style={{
        flex: 1,
        backgroundColor: '#f1f2f6'
        }}>
        <View style={{
        flex: 4,
        alignItems: 'center',
        backgroundColor: '#f1f2f6'
        }}>
          <Icon
            name='arrow-circle-left'
            size={50}
            color='#ff4757'
            marginTop='50'
            marginBottom='50'
            onPress={() => {this.goBack()}}
          />
          <Tile
            imageSrc={{uri: (this.props.activeRecipe.image)}}
            title={this.props.activeRecipe.title}
            featured
            caption={this.props.activeRecipe.publisher}
          />
          <Button 
            onPress={() => {this.openRecipe()}}
            title='View Recipe'
            textStyle={{
              fontWeight: "700"
            }}
            buttonStyle={{
              marginTop:'50',
              marginBottom:'50',
              backgroundColor: "#ffa502",
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }} />
        </View>
      </View>
    )
  }
};

const mapStateToProps = state => ({
  activeRecipe: state.activeRecipe
});

export default connect(mapStateToProps)(RecipeDetail);