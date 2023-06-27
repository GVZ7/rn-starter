import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetails= props => {
    return (
        <View >
            <Text>{props.title}</Text>
            <Image source={props.imageUrl}/>
            <Text>Image Score - {props.score}</Text>
        </View>
    );
};
const styles = StyleSheet.create({});

export default ImageDetails;