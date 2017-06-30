import React, {Component} from 'react';
import {Image,Text,View} from 'react-native';
import { Button, Card } from 'react-native-material-design';
import Icon from 'react-native-vector-icons/MaterialIcons';

class RChat extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    static navigationOptions = {
        title: "chat"
    };

    render() {
        const { navigation } = this.props;

        return (
                <View><Text>begin to chat!</Text></View>
        );
    }
};

export default RChat;
