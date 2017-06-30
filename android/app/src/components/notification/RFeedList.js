import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, Text} from 'react-native';
import {List, ListItem} from 'react-native-elements';

export default class FeedList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.data);
        if (this.props.data.networkStatus === 1) {
            console.log("networkStatus===1");
            return <ActivityIndicator style={styles.loading}/>;
        }
        if (this.props.data.error) {
            return (
                <Text>Error!</Text>
            );
        }

        return (
            <List>
                {
                    this.props.data.feed.map((item)=>{
                        const badge = item.repository.stargazers_count && {
                            value: `☆ ${item.repository.stargazers_count}`,
                            badgeContainerStyle: { right: 10, backgroundColor: '#56579B' },
                            badgeTextStyle: { fontSize: 12 },
                        };

                        return (
                            <ListItem
                                hideChevron
                                title={`${item.repository.owner.login}/${item.repository.name}`}
                                subtitle={`Posted by ${item.postedBy.login}`}
                                badge={badge}
                                key={`${item.repository.owner.login}/${item.repository.name}`}
                                />
                        );
                    })
                }
            </List>
        );
    };
}

const styles = StyleSheet.create({
    loading: {
        margin: 50
    }
});
