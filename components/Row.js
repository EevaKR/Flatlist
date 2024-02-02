import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { Pressable, StyleSheet } from 'react-native';

export default function Row({ person, selectedId, select }) {
    const backgroundColor = person.id === selectedId ? '#c0c0c0' : '#5f5f5f';


    

    return (
        <Pressable onPress={() => select(person.id)}>
            <Text
            style={(styles.row,{backgroundColor})}>
                {person.lastname}, {person.firstname}
            </Text>
        </Pressable>
        


    );
};
