import react, { useState } from "react";
import { StyleSheet,View } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const ColorCounterScreen = () =>{
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    const INCREMENTAL_VALUE =15;
    return <View>
        <ColorCounter color='red' onIncrease = {()=>setRed(red+INCREMENTAL_VALUE)} 
            onDecrease = {()=>setRed(red-INCREMENTAL_VALUE)} value ={red}/>
        <ColorCounter color='blue' onIncrease = {()=>setBlue(blue+INCREMENTAL_VALUE)} 
            onDecrease = {()=>setBlue(blue-INCREMENTAL_VALUE)} value ={blue}/>
        <ColorCounter color='green' onIncrease = {()=>setGreen(green+INCREMENTAL_VALUE)} 
            onDecrease = {()=>setGreen(green-INCREMENTAL_VALUE)}  value ={green}/>
        <View 
        style={{
            width:100, 
            height:100,
            backgroundColor :`rgb(${red},${blue},${green})`
        }}/> 
    </View>
};

const Styles = StyleSheet.create({});

export default ColorCounterScreen;
