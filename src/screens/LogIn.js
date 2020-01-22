import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
const LogIn = ({ navigation }) => {
    return (
        <>
            <Text>This is Login Screen</Text>
            <Button onPress={() => navigation.navigate('Home')}
                title="Log In"
            />
        </>
    );
};

const styles = StyleSheet.create({

});

export default LogIn;