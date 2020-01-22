import { useState, useEffect } from 'react';
import http_get from '../components/http_get'

export default () => {

    const [result, setResult] = useState([]);
    const searchVehicle = async () => {
        try {
            const response = await http_get.get('./api/');
            setResult(response.data.results);
        }
        catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        searchVehicle();
    }, []);

    return [searchVehicle, result];
};
