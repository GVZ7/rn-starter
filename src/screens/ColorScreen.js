import React, {useState} from "react";
import {View, StyleSheet,Text, Button} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
const CounterScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button
                title="Add a Color"
                onPress={()=>{
                   setColors([...colors, RandomRgb()]);
                }}
            />
            <FlatList
                data = {colors}
                keyExtractor={(item)=> item}
                renderItem={({item})=>{
                    return  <View style ={{width:100, height:100, backgroundColor : item}} ></View>
                }}
            />
            <Button
                title="Clear Colors"
                onPress={()=>{
                   setColors([]);
                }}
            />

        </View>
    );
};

const RandomRgb = ()=>{
    let red = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);

    return `rgb(${red},${blue},${green})`;
}
const styles = StyleSheet.create({
    colorBox :{
        height :100,
        width:100,
        backgroundColor : RandomRgb()
    }
});

export default CounterScreen;