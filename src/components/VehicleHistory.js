import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import VehicleHistoryDetail from './VehicleDetailHistory';

const VehicleHistory = ({ results }) => {
    return (
        <FlatList
            data={results}
            keyExtractor={(result) => result.id.toString()}
            renderItem={({ item }) => {
                return <VehicleHistoryDetail result={item} />
            }}
        />
    );
};

const style = StyleSheet.create({

});

export default VehicleHistory;