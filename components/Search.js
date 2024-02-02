import { Text } from 'react-native'
import React,{useState} from 'react'
import { StyleSheet, View, TextInput, Button} from 'react-native'


export default function Search(executeSearch) {
    const [search, setSearch] = useState('');

  return (
    <View style={StyleSheet.searchBox}>
        <TextInput
        value={search}
        onChangeText={text => setSearch(text)}
        placeholder="Search..."
        returnKeyType="search"
        onSubmitEditing={() => executeSearch(search)}
        />
      
    </View>
  )
}

const styles = StyleSheet.create({
    searchbox: {
        marginBottom: 20,
        borderColor: '#333',
        borderWidth: 1,
        padding: 5,
    }
})