import react from "react";
import { Button, StyleSheet, View } from "react-native";


const ColorCounter = ({color, value,onIncrease, onDecrease}) =>{
    return (<View>
        <Button onPress={() => onIncrease()}
            title={`Increase the ${color}${value}`}
        ></Button>
        <Button onPress={() => onDecrease() }
            title={`Decrease the ${color}${value}`}
        ></Button>
    </View>
)};

const Styles = StyleSheet.create({});

export default ColorCounter;
