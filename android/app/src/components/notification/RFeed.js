import React, {Component} from 'react';
import {ScrollView, List, ListItem, StyleSheet, Text} from 'react-native';
import {ApolloClient, createNetworkInterface, ApolloProvider, gql, graphql} from 'react-apollo';
import RFeedList from './RFeedList.js';

export default class RFeed extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollView>
                <RFeedList data={this.props.data} />
            </ScrollView>
        );
    }
}
