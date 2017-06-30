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
import RFeed from './RFeed.js';

const FeedWithData = graphql(gql `{
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
})(RFeed);

export default class RFeedProvider extends Component {
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
            FeedWithData / >
            <
            /ApolloProvider>
        );
    }
}
