import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import uuid from 'uuid-random';
import ListItem from './components/Listitem'
import AddItem from "./components/AddItem";


const App = () => {

  const [items, setItems] = useState([
    { id: uuid(), text: 'learn react-native' },
    { id: uuid(), text: 'learn react js' },
    { id: uuid(), text: 'watering plant' },

  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('ผิดพลาด', 'กรุณากรอกข้อมูล');
    } else {
      setItems(prevItems => {
        return [{ id: uuid(), text }, ...prevItems];
      })
    }

  }

  return (
    <View style={style.container}>
      <Header title='To Do List' />
      <AddItem addItem={addItem} />
      <FlatList data={items}
        renderItem={({ item }) => (<ListItem item={item} deleteItem={deleteItem} />)} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;