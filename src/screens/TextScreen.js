import React, {useState} from "react";
import {Text, View, StyleSheet, TextInput} from "react-native";


const TextScreen = () => {
    const [name, setName] = useState('');

    return(
        <View>
            <TextInput style={styles.input}
                autoCapitalize="none"
                autoCorrect = {false}
                value={name}
                onChangeText={ newValue => setName(newValue)}
            />
            <Text>{name}</Text>
            
            { name.length<4 ? <Text>Password must be at least 4 chaacters.</Text>:null}
            
        </View>
    );
};

const styles = StyleSheet.create({
    input:
    {
        margin:15,
        borderColor:'black',
        borderWidth:1
    }
});

export default TextScreen;