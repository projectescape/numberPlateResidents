import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import RequestDetail from '../components/VehicleDetail'
import useVehicleData from '../hooks/useVehicleData'

const RequestList = () => {
    const [searchVehicle, results] = useVehicleData();
    return (
        <FlatList
            data={results}
            keyExtractor={(result) => result.id.toString()}
            renderItem={({ item }) => {
                return <RequestDetail result={item} />
            }}
        />
    );
};

const style = StyleSheet.create({

});

export default RequestList;