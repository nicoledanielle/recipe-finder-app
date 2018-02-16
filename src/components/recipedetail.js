import React from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';
import { connect } from 'react-redux';
import { Button, Tile } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { returnList } from '../actions/recipes';
import Header from './header';

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
        flex: 1}}>
      <Header/>
      <View style={{
        flex: 1,
        backgroundColor: '#f1f2f6'
        }}>
        <View style={{
        flex: 4,
        alignItems: 'center',
        backgroundColor: '#f1f2f6'
        }}>
          <View style={{marginTop: 20,
              marginBottom: 20}}>
          <Icon
            name='arrow-circle-left'
            size={50}
            color='#ff4757'
            onPress={() => {this.goBack()}}
          />
          </View>
          <Tile
            imageSrc={{uri: (this.props.activeRecipe.image)}}
            title={this.props.activeRecipe.title}
            titleStyle={{
              fontWeight: "700",
              fontSize: 50,
              color: '#f1f2f6'
            }}
            featured
            caption={this.props.activeRecipe.publisher}
            captionStyle={{
              fontWeight: "700",
              fontSize: 20,
              color: '#f1f2f6'
            }}
          />
          <Button 
            onPress={() => {this.openRecipe()}}
            title='View Recipe'
            textStyle={{
              fontWeight: "700",
              fontSize: 20,
              color: '#f1f2f6'
            }}
            buttonStyle={{
              marginTop: 30,
              backgroundColor: "#ffa502",
              height: 60,
              width: 300,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }} />
        </View>
      </View>
      </View>
    )
  }
};

const mapStateToProps = state => ({
  activeRecipe: state.activeRecipe
});

export default connect(mapStateToProps)(RecipeDetail);