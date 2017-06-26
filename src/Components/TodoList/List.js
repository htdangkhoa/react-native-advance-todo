import React, { Component } from 'react';
import {
    View,
    ListView,
    StyleSheet
} from 'react-native';
import Item from './Item';
import { connect } from 'react-redux';

class List extends Component {
    // constructor() {
    //     super();
    //     const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    //     this.state = {
    //         todos: ds.cloneWithRows(['Hello world!!!', 'Hello world!!!', 'Hello world!!!', 'Hello world!!!'])
    //     };
    // }

    componentWillMount() {
        console.log(this.props);
        this.createDataSource(this.props.todos);
    }

    componentWillReceiveProps(newProps) {
        this.createDataSource(newProps.todos);
    }

    createDataSource(props) {
        console.log(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.setState({
            todos: ds.cloneWithRows(props)
        });

        // this.state = {
        //     todos: ds.cloneWithRows(['Hello world!!!', 'Hello world!!!', 'Hello world!!!', 'Hello world!!!'])
        // };
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView 
                    enableEmptySections={true} 
                    dataSource={this.state.todos} 
                    renderRow={(row, section, index) => 
                        <Item 
                            content={row.content} 
                            isCompleted={row.isCompleted} 
                            date={row.createOn} 
                            index={index} 
                            dispatch={this.props.dispatch} 
                            navigation={this.props.navigation}
                        />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default connect(state => {
    return {
        todos: state.todos
    };
})(List);