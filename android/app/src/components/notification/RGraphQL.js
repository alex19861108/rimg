import React, {Component} from 'react';
import {ScrollView, List, ListItem, StyleSheet, Text} from 'react-native';
import {ApolloClient, createNetworkInterface, ApolloProvider, gql, graphql} from 'react-apollo';
import RGraphQLList from './RGraphQLList.js';

export default class RGraphQL extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollView>
                <RGraphQLList data={this.props.data} />
            </ScrollView>
        );
    }
}
