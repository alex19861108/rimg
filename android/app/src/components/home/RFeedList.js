'use strict';
import React, {Component, PureComponent} from 'react';
import {FlatList, StyleSheet, Animated, View, Text, TouchableOpacity} from 'react-native';
import RCardSummary from './RCardSummary.js';
import RFeedSeparator from './RFeedSeparator.js';
import Global from '../const/global.js';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const VIEWABILITY_CONFIG = {
	minimumViewTime: 3000,
	viewAreaCoveragePercentThreshold: 100,
	waitForInteraction: true
};

export default class RFeedList extends PureComponent {
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		loading: false,
	  		data: [],
	  		error: null,
	  		debug: false,
	  		virtualized: true,
	  		horizontal: false,
	  		refreshing: false
	  	};
	}

	componentDidMount() {
		this.makeRemoteRequest();
	}

	makeRemoteRequest=()=>{
		this.setState({loading: true, refreshing: true});
    	fetch(Global.API_CARD_GET_URL)
        	.then(
            	function(response) {
                	if (response.status >= 200 && response.status < 300) {
                    	return Promise.resolve(response);
                	} else {
                    	return Promise.reject(new Error(response.statusText));
                	}
            	}
        	)
        	.then((response)=>response.json())
        	.then((responseJson)=>{
        		var data=this.state.data.concat(responseJson);
            	this.setState({
            		data: data,
            		error: responseJson.error || null,
            		loading: false,
            		refreshing: false,
            	});
            	console.log(this.state.data);
        	})
        	.catch((error) => {
            	this.setState({
            		loading: false,
            		error
            	});
        	});
	};

	_onPress=(item)=>{
		const { navigate } = this.props.navigation;
        navigate('RCardDetail', item);
	};

	_renderItem=({item, index})=>{
		return (
				<TouchableOpacity onPress={()=>this._onPress(item)}>
                	<RCardSummary img={item.img} text={item.text} favorite={item.favorite}/>
            	</TouchableOpacity>
			);
	};

	_keyExtractor=(item) => {
		return item.id + Math.random()*1000;
	};

	_onEndReached=()=>{
		console.log("end reached");
		//this.makeRemoteRequest();
	};

	_onRefresh=()=>{
		console.log("onRefresh");
		this.makeRemoteRequest();
		//alert('nothing to refresh.');
	};

	_scrollPos = new Animated.Value(0);
	_scrollSinkX=Animated.event(
		[{nativeEvent: { contentOffset: { x: this._scrollPos } }}],
		{useNativeDriver: true},
	);

	_scrollSinkY=Animated.event(
    	[{nativeEvent: { contentOffset: { y: this._scrollPos } }}],
    	{useNativeDriver: true},
  	);

	_onViewableItemsChanged=(info: {
		changed: Array<{
			key: string,
			isViewable: boolean,
			item: any,
			index: ?number,
			section?: any
		}>
	})=>{
		console.log("viewable item changed");
	};

	render() {
		return (
				<AnimatedFlatList
					ItemSeparatorComponent={RFeedSeparator} 
					data={this.state.data}
					debug={this.state.debug}
					disableVirtualization={this.state.virtualized}
					horizontal={this.state.horizontal}
					legacyImplementation={false}
					extraData={this.state}
					numColumns={1}
					keyExtractor={this._keyExtractor}
					renderItem={this._renderItem}
					onEndReached={this._onEndReached}
					onRefresh={this._onRefresh}
					onScroll={this.state.horizontal ? this._scrollSinkX : this._scrollSinkY}
					//onViewableItemsChanged={this._onViewableItemsChanged}
					refreshing={this.state.refreshing}
					viewabilityConfig={VIEWABILITY_CONFIG}
				/>
			);
	}
}