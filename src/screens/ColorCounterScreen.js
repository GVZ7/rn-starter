import react, { useState } from "react";
import { StyleSheet,View } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const ColorCounterScreen = () =>{
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);
    return <View>
        <ColorCounter color='red' onIncrease = {()=>setRed(red+1)} 
            onDecrease = {()=>setRed(red-1)} value ={red}/>
        <ColorCounter color='blue' onIncrease = {()=>setBlue(blue+1)} 
            onDecrease = {()=>setBlue(blue-1)} value ={blue}/>
        <ColorCounter color='green' onIncrease = {()=>setGreen(green+1)} 
            onDecrease = {()=>setGreen(green-1)}  value ={green}/>
    </View>
};


const Styles = StyleSheet.create({});

export default ColorCounterScreen;
