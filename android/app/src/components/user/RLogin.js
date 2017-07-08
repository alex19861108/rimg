'use strict'
import React, {Component} from 'react';
import {ListView, FlatList, ScrollView, StatusBar, Text, View, StyleSheet, Image, TextInput} from 'react-native';
import {Grid, Col, Row} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class RUser extends Component {
    static navigationOptions = {
        //tabBarLabel: "我的",
        //tabBarIcon: () => <Icon size={24} name="person" color="#9E9E9E" />
    };

    componentDidMount() {
    }

    render() {
        const img = 'http://img4.duitang.com/uploads/item/201210/24/20121024114802_sVwSR.jpeg';

        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.backgroundImage} source={{uri: img}}/>
                </View>
                <View style={styles.body}>
                    <Grid style={styles.userGrid}>
                        <Col style={styles.userTableTextColumn}>
                            <Row style={styles.userTableTextRow}>
                                <Text style={styles.userTableText}>用户</Text>
                            </Row>
                            <Row style={styles.userTableTextRow}>
                                <Text style={styles.userTableText}>密码</Text>
                            </Row>
                        </Col>
                        <Col style={styles.userTableTextInputColumn}>
                            <Row style={styles.userTableTextRow}>
                                <TextInput style={styles.userTableTextInput} 
                                underlineColorAndroid='transparent'
                                placeholder='请输入手机或邮箱'
                                />
                            </Row>
                            <Row style={styles.userTableTextRow}>
                                <TextInput style={styles.userTableTextInput} 
                                underlineColorAndroid='transparent'
                                placeholder='请输入密码'
                                />
                                <Text>忘记密码?</Text>
                            </Row>
                        </Col>
                    </Grid>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    header: {
        height: 200,
        backgroundColor: 'gray'
    },
    backgroundImage: {
        flex: 1,
        alignItems: 'center'
    },
    body: {
        backgroundColor: 'white'
    },
    userGrid: {
        flex: 4,
    },
    userTableTextColumn: {
        flex: 1,
    },
    userTableTextInputColumn: {
        flex: 2,
    },
    userTableHelpColumn: {
        flex: 1,
    },
    userTableTextRow: {
        alignItems: 'center',
    },
    userTableText: {
        flex: 1,
        textAlign: 'center'
    },
    userTableTextInput: {
        flex: 1
    }
});
