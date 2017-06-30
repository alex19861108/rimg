import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default class RComment extends Component {
    static propTypes = {
        defaultText: PropTypes.string,
        btnText: PropTypes.string,
        multiline: PropTypes.bool,
    };

    static defaultProps = {
        defaultText: "写跟帖",
        multiline: true,
        btnText: "发送",
    };

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.defaultText,
        }
    };

    _onFocus=(text)=>{
        console.log("onfocus!");
        this.setState({text: ""});
    };

    _onChangeText=(text)=>{
        console.log("onTextChange!");
        this.setState({text: text});
    };

    _onBlur=()=>{
        this.setState({text: this.props.defaultText});
    };

    _onBtnPress=()=>{
        console.log("onbtnPress");
        console.log(this.state.text);
        if (this.state.text==undefined || this.state.text==null || this.state.text=='') {
            this.setState({text: ""});
        } else {
            this.setState({text: this.props.defaultText});
        }
    };

    render() {
        return (
            <View style={styles.commentBox}>
                <TextInput multiline={this.props.multiline}
                            onChangeText={this._onChangeText}
                            onFocus={this._onFocus}
                            onBlur={this._onBlur}
                            defaultValue={this.state.text}
                            style={styles.textInput}
                ></TextInput>
                <Text style={styles.button} onPress={this._onBtnPress}>{this.props.btnText}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    commentBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8,
    },
    textInput: {
        flex: 9
    },
    button: {
        flex: 1,
    }
});
