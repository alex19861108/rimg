import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Navigator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import RCardList from './RCardList.js';
import RFeedList from './RFeedList.js';

class RHome extends Component {
    static navigationOptions = {
        statusBarStyle: 'light-content',
        //tabBarIcon: () => <Icon size={24} name="home" color="#9E9E9E" />,
    };
    render() {
        return (
            // <RCardList navigation={this.props.navigation}/>
            <RFeedList navigation={this.props.navigation}/>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});

export default RHome;
