'use strict';
import React, {Component} from 'react';
import {View, Button, StatusBar} from 'react-native';

export default class RUser extends Component {
	onPressLearnMore=()=>{
		const { navigate } = this.props.navigation;
        navigate('RLogin', {});
	};
	render() {
		return (
			<View>
				<Button
					onPress={this.onPressLearnMore}
  					title="登陆"
  					color="#841584"
  					accessibilityLabel="Learn more about this purple button"
				/>
			</View>
			);
	}
}