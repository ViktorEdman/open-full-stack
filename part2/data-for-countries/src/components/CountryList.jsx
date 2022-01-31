import React from 'react';

const CountryList = ({countries, clickHandler}) => {
    return (
        <ul>{countries.map(country =>
            <li key={country.cca3}>{country.name.common}  <button onClick={_ => clickHandler(country.name.common.toLowerCase())}>show</button></li>
        )}</ul>
    );
};

export default CountryList;
