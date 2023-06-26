import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = props => {

  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button
        onPress={()=> console.log('Button Pressed')}
        title="Go to the Components Demo"
      >
      </Button>
      <TouchableOpacity 
        onPress={()=> props.navigation.navigate('Components')}>

        <Text>Go to List Demo</Text>
        
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
