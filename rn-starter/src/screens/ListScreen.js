import React from 'react';
import {View, Text, StyleSheet, FlatList} from "react-native";


const ListScreen = ()=>
{
const friends = [
    {
        name: "Rachel",
        age: "21"
    },
    {
        name: "Ross",
        age: "22"
        
    },
    {
        name: "Monica",
        age: "23"
       
    },
    {
        name: "Joey",
        age: "24"
    },
    {
        name: "Phoebe",
        age: "25"
    },
    {
        name: "Chandler",
        age: "26"
    },
    {
        name: "Rohit",
        age: "27"
    },
    {
        name: "Rana",
        age: "28"
    },
    {
        name: "Caleb",
        age: "29"
    },
    {
        name: "Gilbert",
        age: "30"
    },
    {
        name: "Silvia",
        age: "31"
    },
    {
        name: "Saida",
        age: "32"
    },
];

    return (
    <FlatList 
    // horizontal ={true} //scroll horizontally
    // showsHorizontalScrollIndicator = {false}
    keyExtractor={(friend)=> friend.name }
    data = {friends} 
    renderItem={({item}) => {
            // item ==
            return <Text style = {style.asdf}>{item.name} -Age {item.age}</Text>
    }}/>
    //element === {item {name: 'Friend #1'} , index: 0}
);
}

const style = StyleSheet.create({
    asdf: {
        marginVertical: 50
    }
})

export default ListScreen;