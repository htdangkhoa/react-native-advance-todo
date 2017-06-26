import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import List from '../Components/TodoList/List';

export default class Home extends Component {    
    render() {
        return (
            <View style={styles.container}>
                <List navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});