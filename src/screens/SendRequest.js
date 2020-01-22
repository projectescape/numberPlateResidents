import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import MyHeader from '../components/MyHeader'
//import Toast from 'react-native-simple-toast'
import { Button } from 'react-native-elements';

const SendRequest = props => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    return (
        <View>
            <MyHeader navigation={props.navigation} title="Send Request" />
            <Text style={styles.text}>Book a parking place by just sending a request.</Text>
            <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={100} >
                <ScrollView>
                    <View style={{ marginTop: 100, flexDirection: 'column' }}>
                        <TextInput
                            placeholder="Licence Number"
                            style={styles.input}
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={number}
                            onChangeText={newValue => setNumber(newValue)}
                        />
                        <TextInput
                            placeholder="Guest Name"
                            style={styles.input}
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={name}
                            onChangeText={newValue => setName(newValue)}
                        />
                        <Button
                            onPress={() => {
                                props.navigation.navigate('Home')
                                // Toast.show('Request Sent!')
                            }}
                            icon={{
                                name: "send",
                                size: 15,
                                color: "white"
                            }}
                            title="Send"
                            buttonStyle={{ backgroundColor: '#000', margin: 15 }}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginTop: 250,
        alignSelf: 'center'
    },
    input: {
        height: 40,
        margin: 15,
        borderWidth: 1,
        borderColor: 'black'
    },
    button: {
        margin: 15
    }
});

export default SendRequest;