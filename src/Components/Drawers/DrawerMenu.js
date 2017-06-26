import React, { Component } from  'react';
import {
    View,
    TouchableOpacity,
    ListView,
    StyleSheet
} from 'react-native';
import DrawerMenuItem from './DrawerMenuItem';

export default class DrawerMenu extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds.cloneWithRows(['Home', 'To-Do', 'Completed', 'About'])
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView 
                    dataSource={this.state.dataSource} 
                    renderRow={(row) => 
                        <TouchableOpacity>
                            <DrawerMenuItem item={row} />
                        </TouchableOpacity>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    }
});