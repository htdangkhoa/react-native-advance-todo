import React, { Component } from 'react';
import {
    Drawer
} from './Components/Drawers/Drawer';
import { Provider } from 'react-redux';
import { store } from './Redux/Stores/Store';

export default class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <Drawer />
            </Provider>
        );
    }
}