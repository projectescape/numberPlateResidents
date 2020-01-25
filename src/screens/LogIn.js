import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
const LogIn = ({ navigation }) => {
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    return (
        <>
            <View>
                <Text style={{ fontSize: 25, marginTop: 100, marginHorizontal: 15 }}>Welcome Resident,</Text>
                <Text style={{ fontSize: 15, marginTop: 5, marginHorizontal: 15 }} >Login to continue</Text>
            </View>
            <View style={{ marginTop: 210 }}>
                <TextInput
                    placeholder="Flat Number"
                    placeholderTextColor='#000'
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={number}
                    onChangeText={newValue => setNumber(newValue)}
                />
                <TextInput
                    placeholder="Name"
                    placeholderTextColor='#000'
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={name}
                    onChangeText={newValue => setName(newValue)}
                />
            </View >
            <Button onPress={() => navigation.navigate('Home')}
                title="LogIn"
                buttonStyle={{
                    width: 120,
                    alignSelf: "center",
                    alignContent: "stretch",
                    marginTop: 50,
                    marginHorizontal: 15,
                    backgroundColor: '#000',
                    borderRadius: 10
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
        marginHorizontal: 15,
        fontSize: 21,
        backgroundColor: '#fff'
    }
});

export default LogIn;