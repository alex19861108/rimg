import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import { Button, Card } from 'react-native-material-design';
import Icon from 'react-native-vector-icons/MaterialIcons';

class RCardSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  setNativeProps(nativeProps) {
  };

  render() {
    return (
        <View>
            <Card>
                <Card.Media
                    image={<Image source={{uri: this.props.img}}/>}
                    overlay
                    >
                </Card.Media>
                <Card.Body>
                    <Text>{this.props.text}</Text>
                </Card.Body>
                <Card.Actions position="right">
                    <Text>{this.props.favorite}</Text>
                    <Icon size={16} name="favorite" color="gray"></Icon>
                </Card.Actions>
            </Card>
        </View>
    );
  }
};

export default RCardSummary;
