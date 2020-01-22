import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RequestDetail = ({ number, name }) => {
    return (
        <View>
            <Text>{result.name.title + ". " + result.name.first + " " + result.name.last}</Text>
            <Text>{result.gender}</Text>
            <Text>{result.email}</Text>
            <Text>{result.phone}</Text>
            <Text>{result.cell}</Text>
        </View>
    );
};

const style = StyleSheet.create({

});

export default RequestDetail;