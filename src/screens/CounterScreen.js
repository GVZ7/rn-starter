import React, {useState} from "react";
import {View, StyleSheet,Text, Button} from 'react-native';

const CounterScreen = () => {
    const [starts,setStart] = useState(0);
    return (
       
        <View>
            <Button
                title="Increase"
                onPress={()=>{
                    setStart(starts+1);
                }}
            />
            <Button
                title="Decrease"
                onPress={()=>{
                    setStart(starts-1);
                }}
            />
            <Text>{starts}</Text>
        </View>
    );
};
const styles = StyleSheet.create({});

export default CounterScreen;