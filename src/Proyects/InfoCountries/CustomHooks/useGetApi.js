import {useEffect, useState} from "react";

const useGetApi = () => {
    const [countries, setCountries] = useState([]);

    const getData = async () => {
        const url = 'https://restcountries.com/v3.1/all';
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data);
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return countries;
}

export default useGetApi;