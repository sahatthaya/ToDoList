import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = ({ item, deleteItem }) => {
    return (
        <TouchableOpacity style={style.listItem}>
            <View style={style.listItemView}>
                <Text style={style.listItemText}>{item.text}</Text>
                <Text name='remove' style={style.delText} onPress={() => deleteItem(item.id)} >ลบ</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listItemText: {
        fontSize: 18
    },
    delText: {
        fontSize:16,
        color:'#FF0000'
    }
})

export default ListItem;