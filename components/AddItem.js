import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";


const AddItem = ({ title, addItem }) => {

    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue);

    return (
        <View style={style.header}>
            <TextInput placeholder="เพิ่มรายการ..." style={style.input} onChangeText={onChange} />
            <TouchableOpacity style={style.btn} onPress={() => addItem
                (text)}>
                <Text style={style.btnText}>
                    เพิ่มรายการ
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: 'darkgreen',
        padding: 9,
        margin: 5
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default AddItem;