import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Avatar, Button, Card } from 'react-native-material-design';
import Icon from 'react-native-vector-icons/MaterialIcons';

import RAvatar from './RCardComment/RAvatar.js';

export default class RCardComment extends Component {
    static propTypes = {
        avatar: PropTypes.string,
        name: PropTypes.string,
        favorite: PropTypes.number,
        content: PropTypes.string,
    };

    static defaultProps = {
        avatar: "http://www.qqxoo.com/uploads/allimg/161020/13560231c-9.jpg",
        image: <Image source={{uri: "http://www.qqxoo.com/uploads/allimg/161020/13560231c-9.jpg"}}></Image>,
        name: "liuwei",
        favorite: 100,
        content: "做的真不错！"
    };

    render() {
        return (
            <View style={styles.comment}>
                <RAvatar image={this.props.image}></RAvatar>
                <View style={styles.rightBlock}>
                    <View style={styles.firstRow}>
                        <View style={styles.name}><Text>{this.props.name}</Text></View>
                        <View style={styles.upvote}>
                            <Text>{this.props.favorite}</Text>
                            <Icon size={16} name="favorite" color="gray"></Icon>
                        </View>
                    </View>
                    <View style={styles.secondRow}>
                        <View style={styles.content}><Text>{this.props.content}</Text></View>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    comment: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 2,
        marginTop: 4,
        marginBottom: 8,
        margin: 8,
        paddingLeft: 16,
        paddingRight: 16
    },
    leftBlock: {
        flex: 1
    },
    avatar: {
    },
    rightBlock: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    firstRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 2,
    },
    secondRow: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 2,
    },
    name: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    upvote: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    }
});
