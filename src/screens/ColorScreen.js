import React, {useState} from "react";
import {View, StyleSheet,Text, Button} from 'react-native';
const CounterScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors);
    return (
        <View>
            <Button
                title="Add a Color"
                onPress={()=>{
                   setColors([...colors, RandomRgb()]);
                }}
            />
            <View style ={styles.colorBox} ></View>
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