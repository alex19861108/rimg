import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { Avatar} from 'react-native-material-design';

export default class RAvatar extends Component {

    static propTypes = {
        avatar: PropTypes.string,
    };
    static defaultProps = {
        avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496462056341&di=a7654e6a715d33c2e4cef75c7a3d81ab&imgtype=0&src=http%3A%2F%2Fzine-media.qiniudn.com%2Favatars%2F84%2F52%2F84fac8647c1ead734372d5a4e03c7952_avatar.jpg",
        image: <Image source={{uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496462056341&di=a7654e6a715d33c2e4cef75c7a3d81ab&imgtype=0&src=http%3A%2F%2Fzine-media.qiniudn.com%2Favatars%2F84%2F52%2F84fac8647c1ead734372d5a4e03c7952_avatar.jpg"}}></Image>
    };

    render() {
        return (
            <View style={styles.leftBlock}>
                <Avatar image={this.props.image}></Avatar>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    leftBlock: {
        flex: 1
    }
});
