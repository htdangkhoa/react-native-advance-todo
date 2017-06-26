import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class OptionButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon name='ios-trash-outline' size={25} color='#fff' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});