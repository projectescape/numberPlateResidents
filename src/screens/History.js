import React from "react";
import { Card, Container, Header, Content, CardItem, Body } from 'native-base'
import { View, Text, StyleSheet, ScrollView } from "react-native";
import MyHeader from '../components/MyHeader';
import useVehicleData from '../hooks/useVehicleData';
import VehicleHistory from '../components/VehicleHistory'

const HistoryScreen = props => {

    const [searchVehicle, result] = useVehicleData();

    return (
        <View>
            <MyHeader navigation={props.navigation} title="History" />
            <Text style={{ color: 'black', fontWeight: "bold", alignSelf: "center", fontSize: 30, margin: 26 }}>Recent Guest Entries</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Container style={{ marginHorizontal: 10, height: 260 }}>
                    <Header style={{ marginTop: 16, backgroundColor: 'black' }} >
                        <Text style={{ color: 'white', fontWeight: "bold", alignSelf: "center" }}>S.No: </Text>
                    </Header>
                    <Content>
                        <Card>
                            <CardItem>
                                <Body>
                                    <VehicleHistory results={result} />
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
                <Container style={{ marginHorizontal: 10, height: 260 }}>
                    <Header style={{ backgroundColor: 'black' }} >
                        <Text style={{ color: 'white', fontWeight: "bold", alignSelf: "center" }}>S.No: </Text>
                    </Header>
                    <Content>
                        <Card>
                            <CardItem>
                                <Body>
                                    <VehicleHistory results={result} />
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
                <Container style={{ marginHorizontal: 10, height: 560 }}>
                    <Header style={{ backgroundColor: 'black' }} >
                        <Text style={{ color: 'white', fontWeight: "bold", alignSelf: "center" }}>S.No: </Text>
                    </Header>
                    <Content>
                        <Card>
                            <CardItem>
                                <Body>
                                    <VehicleHistory results={result} />
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 27,
        color: '#000'
    }
});

export default HistoryScreen;