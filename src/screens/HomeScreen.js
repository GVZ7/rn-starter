import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button
        onPress={()=> navigation.navigate('Components')}
        title="Go to the Components Demo"

      />
 
      <Button
         onPress={()=> navigation.navigate('List')}
        title="Go to the List"
      />
    
      <Button
         onPress={()=> navigation.navigate('Image')}
        title="Go to the Image"
      />
  
      <Button
         onPress={()=> navigation.navigate('Counters')}
        title="Go to the Counter"
      />

      <Button
         onPress={()=> navigation.navigate('Color')}
        title="Go to the Color"
      />

      <Button
         onPress={()=> navigation.navigate('ColorCounter')}
        title="Go to the ColorCounter"
      />

      <Button
         onPress={()=> navigation.navigate('Text')}
        title="Go to Text"
      />
    
    <Button
         onPress={()=> navigation.navigate('Box')}
        title="Go to Box"
      />
  
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
