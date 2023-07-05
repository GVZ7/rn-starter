import React, {useReducer} from "react";
import {View, StyleSheet,Text, Button} from 'react-native';
import ImageDetails from "../Components/ImageDetails";

const reducer = (state, action) => {
    return  {...state, counter: state.counter+action.payload, testing: state.testing+1}
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer,{counter:0, testing:0});
    const {counter, testing} = state;
    console.log(testing);
    return (
       
        <View>
            <Button
                title="Increase"
                onPress={()=>{
                    dispatch({payload:1});
                }}
            />
            <Button
                title="Decrease"
                onPress={()=>{
                    dispatch({payload:-1});
                }}
            />
            <Text>{counter}</Text>
            <ImageDetails title='counter' imageUrl={require('../../assets/images/beach.jpg' )} score={counter}/>
        </View>
    );
};
const styles = StyleSheet.create({});

export default CounterScreen;