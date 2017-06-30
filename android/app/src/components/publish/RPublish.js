import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class RPublish extends Component {
  static navigationOptions = {
    tabBarLabel: "Publish",
    tabBarIcon: () => <Icon size={24} name="music-note" color="#9E9E9E" />
  }

  render() {
    return <View><Text>Publish</Text></View>
  }
}
export default RPublish;
