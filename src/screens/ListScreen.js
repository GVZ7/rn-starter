import react from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';


const ListScreen = () =>
{
    const friends = [
        {name: 'Friend #1', age:"29"},
        {name: 'Friend #2', age:"21"},
        {name: 'Friend #3', age:"23"},
        {name: 'Friend #4', age:"25"},
        {name: 'Friend #5', age:"23"},
        {name: 'Friend #6', age:"25"},
        {name: 'Friend #7', age:"26"},
        {name: 'Friend #8', age:"27"},
        {name: 'Friend #9', age:"22"},
        {name: 'Friend #10',age:"22"}
    ]
    return (
        <FlatList
            keyExtractor={ friend => friend.name}
            data = {friends}
            renderItem={( {item} )=>{
                return <Text style = {styles.textStyle}>{item.name} - {item.age}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({

    textStyle : {
        marginVertical: 50
    }
});

export default ListScreen;