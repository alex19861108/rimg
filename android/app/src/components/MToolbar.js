import React, {Component} from 'react';
import {Toolbar} from 'react-native-material-design';
import {View} from 'react-native';

class MToolbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View>
            <Toolbar></Toolbar>
        </View>
    );
  }
}

export default MToolbar;
