import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Country = ({ country, apiKey }) => {
    const [weather, setWeather] = useState({})
    const capital = country.capital[0]

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`)
            .then(response => {
                setWeather(response.data)
            })
    }, [capital, apiKey]);

    const languages = country.languages
    const languageList = []
    for (const langCode in languages) {
        languageList.push({
            code: langCode,
            name: languages[langCode]
        })
    }

    return (<>
        <h2>{country.name.common}</h2>
        <div>capital: {country.capital[0]}</div>
        <div>population: {country.population.toLocaleString()}</div>
        <h3>Spoken Languages</h3>
        <ul>
            {languageList.map(language =>
                <li key={language.code}> {language.name}</li>)}
        </ul>
        <img src={country.flags.png} alt="" style={{ "maxWidth": "120px" }} />
        <h2>Weather in {capital}</h2>
        <p>Temperature: {weather.main ? weather.main.temp : "unknown"} C</p>
        {
            weather.main
                ? <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" />
                : ""
        }
        <p>Wind:
            {
                weather.main
                    ? `${weather.wind.speed} m/s ${weather.wind.deg} degrees`
                    : "unknown"
            }
        </p>
    </>
    )
}

export default Country;
