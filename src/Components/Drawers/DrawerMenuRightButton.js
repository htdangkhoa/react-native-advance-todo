import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class DrawerMenuRightButton extends Component {
    goToAddNewTodo() {
        this.props.navigation.navigate('new');
    }

    render() {
        return (
            <View>
                <TouchableOpacity 
                    style={styles.touchable} 
                    onPress={this.goToAddNewTodo.bind(this)}
                >
                    <Icon name='ios-create-outline' size={25} color='#000' />
                </TouchableOpacity>
            </View>                             
        );
    }
}

const styles = StyleSheet.create({
    touchable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 3
    }
});