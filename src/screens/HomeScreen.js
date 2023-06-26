import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button
        onPress={()=> navigation.navigate('Components')}
        title="Go to the Components Demo"

      >
      </Button>
      <Button
         onPress={()=> navigation.navigate('List')}
        title="Go to the List"
      >
      </Button>

      <Button
         onPress={()=> navigation.navigate('Image')}
        title="Go to the Image"
      >
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
