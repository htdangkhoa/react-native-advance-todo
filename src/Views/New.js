import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import Form from '../Components/Form/Form';

export default class New extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Form navigation={this.props.navigation} params={this.props.navigation.state.params} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});