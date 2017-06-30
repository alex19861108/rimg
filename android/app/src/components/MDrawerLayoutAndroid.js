import React, {Component, PropTypes} from 'react';
import {DrawerLayoutAndroid} from 'react-native';
import MNavigationView from './MNavigationView.js';
import Navigation from './Navigation.js';
import Navigate from './Navigate.js';
import {View, Text} from 'react-native';
import {Toolbar} from 'react-native-material-design';
import {Navigator} from 'react-native-deprecated-custom-components';

class MDrawerLayoutAndroid extends Component {
    static childContextTypes = {
        drawer: PropTypes.object,
        navigator: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            drawer: null,
            navigator: null
        }
    };

    getChildContext = () => {
        return {
            drawer: this.state.drawer,
            navigator: this.state.navigator
        }
    };

    setDrawer = (drawer) => {
        this.setState({drawer});
    };

    setNavigator = (navigator) => {
        this.setState({
            navigator: new Navigate(navigator)
        });
    };

    render() {
        const { drawer, navigator } = this.state;
        const navView = React.createElement(Navigation);

        /**
        const navigationBar={
            <Navigator.NavigationBar
                routeMapper={{
                    LeftButton: (route, navigator, index, navState) =>
                    { return (<Text>Cancel</Text>); },
                    RightButton: (route, navigator, index, navState) =>
                    { return (<Text>Done</Text>); },
                    Title: (route, navigator, index, navState) =>
                    { return (<Text>Awesome Nav Bar</Text>); },
                }}
                style={{backgroundColor: 'gray'}}
            />
        };
        */
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => {
                    if (drawer && navigator) {
                        return navView;
                    }
                    return null;
                }}
                ref={(drawer) => { !this.state.drawer ? this.setDrawer(drawer):null }}
                >
                {drawer &&
                <Navigator
                    initialRoute={Navigate.getInitialRoute()}
                    navigationBar={<Toolbar icon='list' title='我的关注' onIconPress={drawer.openDrawer}/>}
                    configureScene={()=>{
                        return Navigator.SceneConfigs.FadeAndroid;
                    }}
                    ref={(navigator)=>{ !this.state.navigator ? this.setNavigator(navigator) : null }}
                    renderScene={(route)=>{
                        if (this.state.navigator && route.component) {
                            return (
                                <View
                                    style={styles.scene}
                                    showsVerticalScrollIndicator={false}
                                >
                                    <route.component title={route.title} path={route.path} {...route.props}/>
                                </View>
                            );
                        }
                    }}
                />
            }
            </DrawerLayoutAndroid>
        );
    }
}
export default MDrawerLayoutAndroid;
