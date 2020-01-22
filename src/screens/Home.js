import React from "react";
import { Card, Container, Header, Content, CardItem, Body } from 'native-base'
import { View, Text, StyleSheet, YellowBox } from "react-native";
import MyHeader from '../components/MyHeader';
import useVehicleData from '../hooks/useVehicleData'
import VehicleList from '../components/VehicleList';
import RequestList from '../components/RequestList';

const HomeScreen = props => {

    //const [searchVehicle, result] = useVehicleData();

    YellowBox.ignoreWarnings([
        'VirtualizedLists should never be nested',
    ])

    return (
        <View style={{ flex: 1 }}>
            <MyHeader navigation={props.navigation} title="Home" />
            <Container>
                <Header style={{ marginTop: 45, backgroundColor: 'black' }} >
                    <Text style={{ color: 'white', fontWeight: "bold", alignSelf: "center" }}>Registered Vehicles</Text>
                </Header>
                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                {/* <VehicleList results={result} /> */}
                                <VehicleList />
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
            <Container>
                <Header style={{ backgroundColor: 'black' }} >
                    <Text style={{ color: 'white', fontWeight: "bold", alignSelf: "center" }}>Sent Requests</Text>
                </Header>
                <Content>
                    <Card>
                        <CardItem>
                            {/* <RequestList results={result} /> */}
                            <RequestList />
                        </CardItem>
                    </Card>
                </Content>
            </Container>



        </View>
    );
};

const styles = StyleSheet.create({
    cardStyle: {
        marginTop: 30,
        height: 150
    },
    cardStyle1: {
        marginTop: 30,
        height: 150
    }
});

export default HomeScreen;