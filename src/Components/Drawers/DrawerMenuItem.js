import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class DrawerMenuItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.item}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        height: 40,
        paddingLeft: 15,
        paddingRight: 15
    },
    text: {
        fontSize: 15
    }
});