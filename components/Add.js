import { View, Text, Button } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { useState } from 'react'

export default function Add(items,setItems,storeData) {
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')

    const save = () => {
        const newPerson = {
            id: items.length +1,
            lastname: lastName,
            firstname: firstName
        }
        const tempItems = [...items,newPerson]
        storeData(tempItems)
        setItems(tempItems)
        setFirstname('')
        setLastname('')
    }

    return (
        
        <View style={styles.container}>
            <TextInput
                value={firstName}
                onChangeText={text => setFirstname(text)}
                placeholder='Firstname...'
            />
            <TextInput
                value={lastName}
                onChangeText={text => setLastname(text)}
                placeholder='Lastname...'
            />
            <Button title='Save' onPress={save} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16
    },
})