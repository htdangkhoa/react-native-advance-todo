import React, { Component } from  'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Alert,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import {
    ADD_TODO,
    TOGGLE_COMPLETED,
    UPDATE_TODO
} from '../../Redux/Actions/Action';
import Index from '../../Index';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    componentWillMount() {
        if (this.props.isCompleted) {
            this.handleToggleCompleted();
        }

        if (this.props.params) {
            this.setState({
                text: this.props.params.data.content
            });
            if (this.props.params.data.isCompleted) {
                this.handleToggleCompleted();
            }
        }
    }

    onSubmit(text) {
        if (this.state.text !== '') {
            const { dispatch } = this.props;

            dispatch({
                type: ADD_TODO,
                item: {
                    content: text,
                    isCompleted: this.props.isCompleted,
                    createOn: new Date().toLocaleDateString()
                }
            });
            this.props.navigation.goBack();
        } else {
            Alert.alert('To-Do', 'Please enter your to-do.');
        }
    }

    onUpdate(text) {
        const { dispatch } = this.props;

        dispatch({
            type: UPDATE_TODO,
            index: this.props.params.data.index,
            item: {
                content: text,
                isCompleted: this.props.isCompleted
            }
        });
        this.props.navigation.goBack();
    }

    handleToggleCompleted() {
        const { dispatch } = this.props;

        dispatch({
            type: TOGGLE_COMPLETED
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.input} 
                            placeholder={'Add todo'} 
                            placeholderTextColor='#999' 
                            underlineColorAndroid='transparent' 
                            autoFocus={true} 
                            value={this.state.text} 
                            onChangeText={(text) => {
                                this.setState({ text });
                            }}
                        />
                    </View>
                    <TouchableOpacity 
                        style={styles.toggleCompleted} 
                        onPress={this.handleToggleCompleted.bind(this)}
                    >
                        <Icon name={this.props.isCompleted ? 'ios-checkmark-circle-outline' : 'ios-radio-button-off'} size={25} color='#000' />
                        <Text style={styles.textCompleted}>Is completed?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.touchable} 
                        onPress={this.props.params ? this.onUpdate.bind(this, this.state.text) : this.onSubmit.bind(this, this.state.text)}
                    >
                        <Text style={styles.text}>{this.props.params ? 'Update' : 'Add'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    formContainer: {
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#eee',
        shadowColor: '#000', 
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10
    },
    inputContainer: {
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    input: {
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        fontSize: 15
    },
    touchable: {
        height: 40,
        backgroundColor: '#86B404',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5
    },
    text: {
        color: '#fff',
        paddingLeft: 15,
        paddingRight: 15
    },
    toggleCompleted: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCompleted: {
        color: '#000',
        paddingLeft: 15,
        paddingRight: 15
    }
});

export default connect(state => {
    return {
        todos: state.todos,
        isCompleted: state.isCompleted
    };
})(Form);