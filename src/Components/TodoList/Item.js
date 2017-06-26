import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionSheet from '@yfuks/react-native-action-sheet';
import {
    TOGGLE_TODO,
    DELETE_TODO
} from '../../Redux/Actions/Action';

const colorInCompleted = '#FE2E64';
const colorCompleted = '#04B404';

const DESTRUCTIVE_INDEX = 1;
const CANCEL_INDEX = 2;
const BUTTONSiOS = [
    'Edit',
    'Delete',
    'Cancel'
];

export default class Item extends Component {
    toggleComplete(index) {
        const { dispatch } = this.props;
        dispatch({
            type: TOGGLE_TODO,
            index
        });
    }

    deleteTogo(index) {
        const { dispatch } = this.props;
        dispatch({
            type: DELETE_TODO,
            index
        });
    }

    handleMenu() {
        ActionSheet.showActionSheetWithOptions({
          options: BUTTONSiOS,
          cancelButtonIndex: CANCEL_INDEX,
          destructiveButtonIndex: DESTRUCTIVE_INDEX
        },
        (buttonIndex) => {
            if (buttonIndex === 1) {
                Alert.alert(
                    'To-Do',
                    'Do you want to delete this item?',
                    [
                        { text: 'Cancel', style: 'cancel' },
                        { text: 'Delete', onPress: () => this.deleteTogo(this.props.index), style: 'destructive' }
                    ],
                    { cancelable: false }
                );
            } else if (buttonIndex === 0) {
                this.props.navigation.navigate('new', {
                    data: {
                        content: this.props.content,
                        isCompleted: this.props.isCompleted,
                        index: this.props.index
                    }
                });
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.todoContainer}>
                    <TouchableOpacity 
                        style={styles.touchable} 
                        onPress={this.toggleComplete.bind(this, this.props.index)} 
                    >
                        <View style={this.props.isCompleted ? styles.statusCompleted : styles.statusInCompleted} />
                        <Icon 
                            name={this.props.isCompleted ? 'ios-checkmark-circle-outline' : 'ios-radio-button-off'} 
                            color='#333' 
                            size={25} 
                        />
                        <View style={styles.contentContainer}>
                            <Text style={this.props.isCompleted ? styles.contentCompleted : styles.contentInCompleted}>{this.props.content}</Text>
                            <Text style={styles.date}>{this.props.date}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.touchableMenu} 
                        onPress={this.handleMenu.bind(this)}
                    >
                        <Icon 
                            name='ios-more' 
                            color='#333' 
                            size={25} 
                        />
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#ddd',
        borderTopWidth: 1,
        justifyContent: 'center'
    },
    todoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    touchable: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        paddingTop: 10,
        paddingBottom: 10
    },
    touchableMenu: {
        paddingRight: 15
    },
    contentContainer: {
        flexDirection: 'column'
    },
    contentCompleted: {
        fontSize: 15,
        paddingLeft: 10,
        textDecorationLine: 'line-through'
    },
    contentInCompleted: {
        fontSize: 15,
        paddingLeft: 10
    },
    statusCompleted: { 
        backgroundColor: colorCompleted, 
        width: 3, 
        position: 'absolute', 
        top: 0, 
        bottom: 0 
    },
    statusInCompleted: {
        backgroundColor: colorInCompleted, 
        width: 3, 
        position: 'absolute', 
        top: 0, 
        bottom: 0 
    },
    date: {
        fontSize: 10,
        paddingLeft: 10,
        color: '#999'
    }
});