import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import MainMenu from '../components/MainMenu'
const MyHeader = props => {
    return (
        <Header
            leftComponent={<MainMenu navigation={props.navigation} />}
            centerComponent={{
                text: props.title,
                style: { fontSize: 25, color: "#fff", fontWeight: "bold", alignContent: "center" }
            }}
            backgroundColor="black"
            statusBarProps={{ barStyle: "light-content" }}
        />
    );

};

const styles = StyleSheet.create({
    text: {
        fontSize: 40
    }
});

export default MyHeader;