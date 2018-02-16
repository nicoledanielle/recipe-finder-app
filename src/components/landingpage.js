import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';
import { begin } from '../actions/recipes';
import { connect } from 'react-redux';

export class LandingPage extends React.Component {
  goHome(){
    this.props.dispatch(begin());
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.titletext}>
            CHEFSPIRATION
          </Text>
        </View>
        <View style={styles.middle}>
          <Icon 
            name="cutlery"
            color="#f1f2f6"
            size={150}
            onPress={() => {this.goHome()}}
          />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.abouttext}>
            Discover new recipes from your favorite ingredients at home! Click the fork & knife to get started.
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5352ed'
  },
  top: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  middle: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottom: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  titletext: {
    color: '#f1f2f6',
    fontSize: 50
  },
  abouttext: {
    color: '#f1f2f6',
    fontSize: 25,
    textAlign: 'center',
    paddingLeft: 40,
    paddingRight: 40
  }
});

const mapStateToProps = state => ({
  view: state.view
});

export default connect(mapStateToProps)(LandingPage);