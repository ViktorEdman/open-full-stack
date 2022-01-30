import React from 'react';

const Country = ({ country }) => {
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
        <h3>Languages</h3>
        <ul> 
            {languageList.map(language => 
                <li key={language.code}> {language.name}</li>)}
        </ul>
        <img src={country.flags.png} alt="" style={{"max-width": "120px"}}/>
    </>
    )
}

export default Country;
