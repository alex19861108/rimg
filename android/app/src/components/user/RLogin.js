'use strict'
import React, {Component} from 'react';
import {ListView, FlatList, ScrollView, StatusBar, Text, View, StyleSheet, Image, TextInput} from 'react-native';
import {Grid, Col, Row} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Global from '../const/global.js';

export default class RUser extends Component {
    static navigationOptions = {
        //tabBarLabel: "我的",
        //tabBarIcon: () => <Icon size={24} name="person" color="#9E9E9E" />
    };

    constructor(props) {
        super(props);
    
        this.state = {
            userName: '',
            password: '',
        };
    }

    componentDidMount() {
    }

    onUserNameChangeText=(text)=>{
        this.setState({
            userName: text,
        });

    };

    onPasswordChangeText=(text)=>{
        this.setState({
            password: text
        });
    };

    onSubmitEditing=(event)=>{
        event.preventDefault();
        var form =  new FormData();
        form.append('userName', this.state.userName);
        form.append('password', this.state.password);
        var params = {'userName': this.state.userName, 'password': this.state.password};
        if (this.state.userName && this.state.password) {
            console.log(Global.LOGIN_URL);
            fetch(Global.LOGIN_URL, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    //'Content-Type': 'application/json'
                },
                body: form //JSON.stringify(params)
            })
            .then(response=>{
                if (response.status == 200) {
                    return response.json();
                }
            })
            .then(responseJson=>{
                alert("login success");
                const { navigate } = this.props.navigation;
                navigate('RBottomTabNavigator', {});
            })
            .catch(error=>{
                alert(error);
                console.log(error);
            });
        }
    };

    render() {
        //const img = 'http://img4.duitang.com/uploads/item/201210/24/20121024114802_sVwSR.jpeg';

        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.backgroundImage} source={require('../../imgs/login-background.jpeg')}/>
                    <View style={[styles.textNavView]}>
                        <Text style={[styles.textNav]}>注册</Text>
                        <Text style={styles.textNav}>登陆</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <Grid style={styles.userGrid}>
                        <Col style={styles.userTableTextColumn}>
                            <Row style={styles.userTableTextRow}>
                                <Text style={styles.userTableText}>账号</Text>
                            </Row>
                            <Row style={[styles.userTableTextRow]}>
                                <Text style={styles.userTableText}>密码</Text>
                            </Row>
                        </Col>
                        <Col style={styles.userTableTextInputColumn}>
                            <Row style={styles.userTableTextRow}>
                                <TextInput style={styles.userTableTextInput} 
                                underlineColorAndroid='transparent'
                                placeholder='请输入手机或邮箱'
                                onChangeText={this.onUserNameChangeText}
                                onSubmitEditing={this.onSubmitEditing}
                                />
                            </Row>
                            <Row style={styles.userTableTextRow}>
                                <TextInput style={styles.userTableTextInput} 
                                underlineColorAndroid='transparent'
                                placeholder='6-16个字符'
                                onChangeText={this.onPasswordChangeText}
                                onSubmitEditing={this.onSubmitEditing}
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
        resizeMode: 'cover',
        width: null,
        height: null
    },
    textNavView: {
        position: 'absolute',
        backgroundColor: 'transparent',
        bottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textNav: {
        flex: 1,
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    activeNav: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderTopWidth: 0,
        borderRightWidth: 10,
        borderBottomWidth: 20,
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'green',
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
