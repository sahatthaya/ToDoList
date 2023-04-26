import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
    return (
        <View style={style.header}>
            <Text style={style.text}>{title}</Text>
        </View>
    )
}

Header.defaultProps={
    title:'To Do List'
}

const style = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkblue'
    },
    text: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center'
    }
})

export default Header;