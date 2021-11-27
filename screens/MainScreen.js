import React from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { styles } from '../styles/Style';

export default class Main extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.head}>Tasks</Text>
                <TextInput 
                    editable
                    maxLength={60} 
                />
            </View>
        );
    };
};
