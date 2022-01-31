import axios from "axios"
import { useEffect, useState } from "react"
import CountryList from "./components/CountryList";
import Country from "./components/Country";

function App() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(response => {
        setData(response.data)
      })
  }, []);

  const handleFilterChange = (event) => {
    const textInput = event.target.value
    setFilter(textInput.toLowerCase())
  }

  const filteredCountries = filter
    ? data.filter(country =>
      country.name.common
        .toLowerCase()
        .includes(filter))
    : data

  return (
    <div>
      <h2>Filter</h2>
      <label htmlFor="name-filter">
        Filter by name
      </label>
      <input
        type="text"
        name="name-filter"
        onChange={handleFilterChange}
        value={filter}
      />
      <h2>Output</h2>
      {
        filteredCountries.length === 1
            ? <Country 
                country={filteredCountries[0]}/>
            : filteredCountries.length <= 10
            ? <CountryList countries={filteredCountries} clickHandler={setFilter}/>
            : <div>Too many matched, specify another filter.</div>
      }
    </div>
  );
}

export default App;
