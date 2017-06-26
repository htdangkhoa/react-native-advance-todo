import React from 'react';
import {
    Dimensions
} from 'react-native';

import {
    StackNavigator,
    DrawerNavigator
} from 'react-navigation';

import DrawerMenu from './DrawerMenu';
import DrawerMenuLeftButton from './DrawerMenuLeftButton';
import DrawerMenuRightButton from './DrawerMenuRightButton';
import Home from '../../Views/Home';
import New from '../../Views/New';

export const Stack = StackNavigator({
    home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerLeft: <DrawerMenuLeftButton navigation={navigation} />,
            headerRight: <DrawerMenuRightButton navigation={navigation} />
        })
    },
    new: {
        screen: New,
        navigationOptions: {
            title: 'New',
            // headerLeft: null
        }
    }
}, {
    mode: 'modal'
});

export const Drawer = DrawerNavigator({
    Stack: {
        screen: Stack
    }
}, {
    drawerWidth: Dimensions.get('window').width - 80,
    drawerPosition: 'left',
    contentComponent: props => <DrawerMenu {...props} />
});