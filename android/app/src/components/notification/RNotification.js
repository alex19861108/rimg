import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class RNotification extends Component {
  static navigationOptions = {
    //tabBarLabel: "通知",
    //tabBarIcon: () => <Icon size={24} name="notifications" color="#9E9E9E" />
  }

  render() {
    return <View><Text>notifications</Text></View>
  }
}
export default RNotification;
