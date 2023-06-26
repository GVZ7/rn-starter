import React from "react";
import {Text, StyleSheet, View} from "react-native";

const ComponentsScreen = ()=> 
{
    const Title =  <Text style={styles.TitleStyle}>Getting started with react native!</Text>
    const Greeting = <Text style= {styles.BodyStyle}>hello again</Text>
    return(
    <View>
        {Title}
        {Greeting}
    </View>
    );
};

const styles = StyleSheet.create({
    TitleStyle:{
        fontSize:45
    },
    BodyStyle :{
        fontSize : 20
    }
});

export default ComponentsScreen; 