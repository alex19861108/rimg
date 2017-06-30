import React, {Component} from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-material-design';
import RCardComment from './RCardComment.js';
import Icon from 'react-native-vector-icons/MaterialIcons';

import RComment from './RComment.js';

export default class RCardDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    setNativeProps(nativeProps) {
    };

    static navigationOptions = {
    };

    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;

        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Card style={styles.container}>
                        <Card.Media
                            image={<Image source={{uri: params.img}}/>}
                            height={params.height}
                            overlay
                            >
                            <Text style={styles.summary}>{params.text}</Text>
                        </Card.Media>
                        <Card.Body>
                            <Text>{params.text}</Text>
                        </Card.Body>
                        <Card.Actions position="right">
                            <Text>{params.favorite}</Text>
                            <Icon size={16} name="favorite" color="gray"></Icon>
                        </Card.Actions>
                    </Card>
                    <RCardComment></RCardComment>
                    <RCardComment></RCardComment>
                    <RCardComment></RCardComment>
                    <RCardComment></RCardComment>
                    <RCardComment></RCardComment>
                </ScrollView>
                <RComment style={styles.comment}></RComment>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flexDirection: 'column',
    },
    summary: {
        color: 'white'
    },
    favorite: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    comment: {
    }
});
