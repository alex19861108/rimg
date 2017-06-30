import React, { Component, PropTypes } from 'react';

import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';

import {View, Text, Image} from 'react-native';

export default class Navigation extends Component {

    static contextTypes = {
        drawer: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            route: null,
            name: 'liuwei',
            avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496462056341&di=a7654e6a715d33c2e4cef75c7a3d81ab&imgtype=0&src=http%3A%2F%2Fzine-media.qiniudn.com%2Favatars%2F84%2F52%2F84fac8647c1ead734372d5a4e03c7952_avatar.jpg"
        };
    }

    changeScene = (path, name) => {
        const { drawer, navigator } = this.context;

        this.setState({
            route: path
        });
        navigator.to(path, name);
        drawer.closeDrawer();
    };

    render() {
        const { route } = this.state;
        const backgroundImage = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496462491256&di=191226b16f7d24872f4b91a13ad7cde2&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F17%2F47%2F78%2F55658PICN8u_1024.jpg";

        return (
            <Drawer theme='light'>
                <Drawer.Header image={<Image source={{uri: backgroundImage}} />}>
                    <View style={styles.header}>
                        <Avatar size={80} image={<Image source={{ uri: this.state.avatar }}/>} />
                        <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}>{this.state.name}</Text>
                    </View>
                </Drawer.Header>

                <Drawer.Section
                    items={[{
                        icon: 'home',
                        value: '首页',
                        active: !route || route === 'welcome',
                        onPress: () => this.changeScene('welcome'),
                        onLongPress: () => this.changeScene('welcome')
                    }]}
                />

                <Drawer.Section
                    title="Components"
                    items={[{
                        icon: 'face',
                        value: '消息',
                        label: '12',
                        active: route === 'avatars',
                        onPress: () => this.changeScene('avatars'),
                        onLongPress: () => this.changeScene('avatars')
                    }, {
                        icon: 'label',
                        value: '发现',
                        active: route === 'buttons',
                        label: '8',
                        onPress: () => this.changeScene('buttons'),
                        onLongPress: () => this.changeScene('buttons')
                    }, {
                        icon: 'check-box',
                        value: 'Checkboxes',
                        label: '10',
                        active: route === 'checkboxes',
                        onPress: () => this.changeScene('checkboxes'),
                        onLongPress: () => this.changeScene('checkboxes')
                    }, {
                        icon: 'label',
                        value: 'Dividers',
                        label: '10',
                        active: route === 'dividers',
                        onPress: () => this.changeScene('dividers'),
                        onLongPress: () => this.changeScene('dividers')
                    }, {
                        icon: 'label',
                        value: 'Icon Toggles',
                        label: 'NEW',
                        active: route === 'icon-toggles',
                        onPress: () => this.changeScene('icon-toggles'),
                        onLongPress: () => this.changeScene('icon-toggles')
                    }, {
                        icon: 'radio-button-checked',
                        value: 'Radio Buttons',
                        label: '8',
                        active: route === 'radio-buttons',
                        onPress: () => this.changeScene('radio-buttons'),
                        onLongPress: () => this.changeScene('radio-buttons')
                    },
                     //{
                     //   icon: 'list',
                     //   value: 'List',
                     //   label: 'NEW',
                     //   active: route === 'list',
                     //   onPress: () => this.changeScene('list'),
                     //   onLongPress: () => this.changeScene('list')
                     //},
                    {
                        icon: 'label',
                        value: 'Subheaders',
                        label: '4',
                        active: route === 'subheaders',
                        onPress: () => this.changeScene('subheaders'),
                        onLongPress: () => this.changeScene('subheaders')
                    }]}
                />
                <Divider style={{ marginTop: 8 }} />
                <Drawer.Section
                    title="Config"
                    items={[{
                        icon: 'invert-colors',
                        value: 'Change Theme',
                        label: '24',
                        active: route === 'themes',
                        onPress: () => this.changeScene('themes'),
                        onLongPress: () => this.changeScene('themes')
                    }]}
                />

            </Drawer>
        );
    }
}

const styles = {
    header: {
        paddingTop: 16
    },
    text: {
        marginTop: 20
    }
};
