import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import ImageDetails from "../Components/ImageDetails";

const ImageScreen = () =>{
    return (
        <View>
            <ImageDetails title = "Beach" score= "7" imageUrl={require('../../assets/images/beach.jpg')}/>
            <ImageDetails title = "Forest" score= "6" imageUrl={require('../../assets/images/forest.jpg')}/>
            <ImageDetails title = "Mountain" score= "9" imageUrl={require('../../assets/images/mountain.jpg')}/>
        </View>
        
    );
};
const styles = StyleSheet.create({});

export default ImageScreen;