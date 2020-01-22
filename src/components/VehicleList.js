import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import VehicleDetail from '../components/VehicleDetail'
import useVehicleData from '../hooks/useVehicleData'

const VehicleList = () => {
    const [searchVehicle, results] = useVehicleData();
    return (
        <FlatList
            data={results}
            keyExtractor={(result) => result.id.toString()}
            renderItem={({ item }) => {
                return <VehicleDetail result={item} />
            }}
        />
    );
};

const style = StyleSheet.create({

});

export default VehicleList;