import { StatusBar } from 'expo-status-bar';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import {DATA} from './Data'
import Row from './components/Row';
import Search from './components/Search';
import { useState, useEffect } from 'react';
import Add from './components/Add';
import AsyncStorage from '@react-native-async-storage/async-storage';


const STORAGE_KEY = '@persons_key'

export default function App() {

  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const select = (id) => {
    setSelectedId(id);
}
const getData = async() => {
  try{
    const value =await AsyncStorage.getItem(STORAGE_KEY)
    const json = JSON.parse(value)
    if (json === null) {
      json = []
    }
    console.log(json)
    setItems(json)

  } catch (ex) {
    console.log(ex)
  }
}


  useEffect(() => {
    //AsyncStorage.clear()
    //setItems(DATA)
    getData()
  }, [])

  const storeData = async(value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsuncStorage.setItem(STORAGE_KEY,jsonValue)
    } catch (ex) {
      console.log(ex)
    }
  }

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  }

  return (
    <SafeAreaView style={styles.container}>
            <Search executeSearch={executeSearch}/>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                    renderItem={({ item }) => (
                        <Row person={item} selectedId={selectedId} select={select} />

                    )}
                ></FlatList>
        </SafeAreaView>
  );
}

// function renderItem({item}) {
//   return (<Text>{item.lastname}</Text>)
// }

// const renderItem = ({item}) => (
//   <Text>{item.lastname}</Text>
// )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
