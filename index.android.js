/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Text,
  View,
  Button
} from 'react-native';

import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MToolbar from './android/app/src/components/MToolbar.js';
import MDrawerLayoutAndroid from './android/app/src/components/MDrawerLayoutAndroid.js';
import MBottomNaviation from './android/app/src/components/MBottomNavigation.js';

import RHome from './android/app/src/components/home/RHome.js';
import RSearch from './android/app/src/components/search/RSearch.js';
import RPublish from './android/app/src/components/publish/RPublish.js';
import RNotification from './android/app/src/components/notification/RNotification.js';
import RFeedProvider from './android/app/src/components/notification/RFeedProvidor.js';
import RUser from './android/app/src/components/user/RUser.js';
import RCardDetail from './android/app/src/components/home/RCardDetail.js';
import RCardComment from './android/app/src/components/home/RCardComment.js';

const RBottomTabNavigator = TabNavigator({
  RHome: { screen: RHome },
  RSearch: { screen: RSearch },
  RFeedProvider: { screen: RFeedProvider },
  RUser: { screen: RUser }
}, {
  initialRouteName: "RHome",
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: '#9E9E9E',
      activeLabelColor: '#E53935',
      rippleColor: '#9E9E9E',
      shifting: false,
      tabs: {
        RHome: {
            label: <Text style={{fontSize:12}}>首页</Text>,
            icon: <Icon size={24} name='home'/>,
            activeIcon: <Icon size={24} name='home' color='#E53935'/>,
            activeLabelColor: '#E53935',
            barBackgroundColor: '#E0E0E0'
        },
        RSearch: {
            label: <Text style={{fontSize:12}}>搜索</Text>,
            icon: <Icon size={24} name='search'/>,
            activeIcon: <Icon size={24} name='search' color='#E53935'/>,
            activeLabelColor: '#E53935',
            barBackgroundColor: '#E0E0E0'
        },
        RFeedProvider: {
            label: <Text style={{fontSize:12}}>通知</Text>,
            icon: <Icon size={24} name='notifications'/>,
            activeIcon: <Icon size={24} name='notifications' color='#E53935'/>,
            activeLabelColor: '#E53935',
            barBackgroundColor: '#E0E0E0'
        },
        RUser: {
            label: <Text style={{fontSize:12}}>我的</Text>,
            icon: <Icon size={24} name='person'/>,
            activeIcon: <Icon size={24} name='person' color='#E53935'/>,
            activeLabelColor: '#E53935',
            barBackgroundColor: '#E0E0E0'
        }
      }
    }
  }
});

const RMainStackNavigator = StackNavigator({
    RBottomTabNavigator: {screen: RBottomTabNavigator},
    RCardDetail: { screen: RCardDetail },
}, {
    initialRouteName: "RBottomTabNavigator",
    navigationOptions: ({navigation}) => ({
      title: "毛毛虫",
      headerStyle: {
          backgroundColor: '#E53935',
      },
      headerTitleStyle: {
          color: 'white'
      },
      headerTintColor: 'white'
    }),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  bottomNavigationLabel: {
    fontSize: 12,
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('rimg', () => RMainStackNavigator);
