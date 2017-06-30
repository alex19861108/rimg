import React, {Component} from 'react';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

class MBottomNaviation extends Component {
    render() {
        return (
            <BottomNavigation
                labelColor="white"
                rippleColor="red"
                style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
                /**onTabChange={(newTabIndex) => {console.log(`New Tab at position ${newTabIndex}`);}}*/
            >
                <Tab
                    barBackgroundColor="#37474F"
                    label="home"
                    icon={<Icon size={24} color="white" name="home" />}
                />
                <Tab
                    barBackgroundColor="#00796B"
                    label="search"
                    labelColor="red"
                    icon={<Icon size={24} color="white" name="search" />}
                />
                <Tab
                    barBackgroundColor="#5D4037"
                    label="new"
                    icon={<Icon size={24} color="white" name="crop" />}
                />
                <Tab
                    barBackgroundColor="#3E2723"
                    label="notifications"
                    icon={<Icon size={24} color="white" name="notifications" />}
                />
                <Tab
                    barBackgroundColor="#2E2633"
                    label="me"
                    icon={<Icon size={24} color="white" name="person" />}
                />
            </BottomNavigation>
        );
    }
}

export default module = MBottomNaviation;
