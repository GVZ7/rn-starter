import react, { useReducer } from "react";
import { StyleSheet,View } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number};
    // action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}

    switch(action.type){
        case 'change_red':
            if(state.red + action.payload > 255 || state.red + action.payload < 0)
                return state;
            return {...state, red: state.red + action.payload};
        case 'change_green':
            if(state.green + action.payload > 255 || state.green + action.payload < 0)
                return state;
            return {...state, green: state.green + action.payload};
        case 'change_blue':
            if(state.blue + action.payload > 255 || state.blue + action.payload < 0)
                return state;
            return {...state, blue: state.blue + action.payload};
        default:
            return state;
    }
};

const ColorCounterScreen = () =>{

    const [state, runMyReducer] = useReducer(reducer, {red:0, green:0, blue:0});
    const {red, green, blue} = state;
    const INCREMENTAL_VALUE =15;

    return <View>
        <ColorCounter color='red' onIncrease = {
                ()=> runMyReducer({type: 'change_red', payload: INCREMENTAL_VALUE})}

            onDecrease = {
                ()=> runMyReducer({type: 'change_red', payload: -1* INCREMENTAL_VALUE}) }

            value={red}
            />
        <ColorCounter color='blue' onIncrease = {
                ()=> runMyReducer({type: 'change_blue', payload: INCREMENTAL_VALUE})}

            onDecrease = {
                ()=> runMyReducer({type: 'change_blue', payload: -1*INCREMENTAL_VALUE})}

            value={blue}
                />
        <ColorCounter color='green' onIncrease = {
                ()=> runMyReducer({type: 'change_green', payload: INCREMENTAL_VALUE})}

            onDecrease = {
                ()=> runMyReducer({type: 'change_green', payload: -1*INCREMENTAL_VALUE})}
                
            value={green}
            />
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
