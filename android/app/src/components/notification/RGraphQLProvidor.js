import React, {Component} from 'react';

import {
    ScrollView,
    List,
    ListItem,
    StyleSheet,
    Text
} from 'react-native';
import {
    ApolloClient,
    createNetworkInterface,
    ApolloProvider,
    gql,
    graphql
} from 'react-apollo';
import RGraphQL from './RGraphQL.js';

const GraphQLWithData = graphql(gql `{
    feed (type: TOP, limit: 10) {
        repository {
            name, owner { login }

            # Uncomment the line below to get number of stars!
            # stargazers_count
        }
        postedBy { login }
    }
}`, {
    options: {
        notifyOnNetworkStatusChange: true
    }
})(RGraphQL);

export default class RGraphQLProvider extends Component {
    createClient = () => {
        return new ApolloClient({
            networkInterface: createNetworkInterface({
                uri: 'http://api.githunt.com/graphql',
            }),
        });
    }

    render() {
        return ( <
            ApolloProvider client = {
                this.createClient()
            } >
            <
            GraphQLWithData / >
            <
            /ApolloProvider>
        );
    }
}
