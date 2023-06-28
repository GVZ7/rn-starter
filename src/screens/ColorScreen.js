import React, {useState} from "react";
import {View, StyleSheet,Text, Button} from 'react-native';
const CounterScreen = () => {
    const [starts,setStart] = useState(0);
    return (
       
        <View>
            <Button
                title="Change Color"
                onPress={()=>{
                    setStart(starts+1);
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({});

export default CounterScreen;