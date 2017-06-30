import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class RUser extends Component {
    static navigationOptions = {
        //tabBarLabel: "我的",
        //tabBarIcon: () => <Icon size={24} name="person" color="#9E9E9E" />
    }
    render() {
        return (
            <View><Text>Person</Text></View>
        );
    }
}

export default RUser;
