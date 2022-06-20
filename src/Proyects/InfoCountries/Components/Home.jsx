import React, {useState} from "react";
import useGetApi from "../CustomHooks/useGetApi";
import '../Styles/Countries.css'
import { Link } from "react-router-dom";

const Countries = () => {
    const [valueInput, setValueInput] = useState('');
    const [seeRanking, setSeeRanking] = useState(false);
    const countries = useGetApi();

    const newCountries = countries.filter(country => country.name.common.toLowerCase().includes(valueInput));

    const populationWorld = [];

    countries.map(country => {
        populationWorld.push(country)
    })


    for (let k = 0; k < 250; k++) {
        for (let i = 0; i < (250-k); i++) {
            if(populationWorld[i] !== undefined && populationWorld[i+1] !== undefined) {
                if (populationWorld[i].population < populationWorld[i + 1].population) {
                    let aux = populationWorld[i];
                    populationWorld[i] = populationWorld[i+1];
                    populationWorld[i+1] = aux;
                }
            }
        }
    }


    const topTen = populationWorld.slice(0, 10);

    const max = 1402112000;

    const onChange = (event) => {
        setValueInput(event.target.value);
    }

    const onWatchRanking = () => {
        setSeeRanking(!seeRanking);
    }

    return (
        <div>
            <button className="return-countries"> 
                <Link to='/' className="return-countries-home">
                    Return Home
                </Link>
            </button>
            <div className="header-countries">
                <h1>World Countries Data</h1>
                <p>Currently, we have 250 countries</p>
                <input type="text" placeholder="Search Countries by name" onChange={onChange}/>
                <button type="button" onClick={() => onWatchRanking()} className='button-ranking'>Ranking</button>
            </div>
            {topTen.map((element) => 
                seeRanking === true && (
                    <div key={element.name.common} className="Container-top">
                        <div>{element.name.common}</div>
                        <div>
                            <div className="Bar" style={{backgroundColor: 'orange', width: (element.population/max)*880}}></div>
                        </div>
                        <div>{element.population}</div>
                    </div>
                )
            )}
            
            <div className="countries-container">
                {newCountries.map((country) => (
                    <div key={country.name.common} className='country-card'>
                        <img src={country.flags.png} alt="Bandera del pais" />
                        <h1>{country.name.common}</h1>
                        <p>Capital: {country.capital}</p>
                        {country.languages !== undefined && country.languages !== null && 
                            <p>Languages: {Object.values(country.languages)[0]}</p>
                        }
                        <p>Population: {country.population}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Countries;