import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import Countries from "./components/Countries";
import { CountriesContext } from "./hooks/contexts/CountriesContext";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed To Fetching");
        }
        return res.json();
      })
      .then((data) => {
        const countries = data.map((country) => {
          return { ...country, id: uuidv4() };
        });
        setData(countries);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    const searchValue = value.toLowerCase();
    const filterdCountry = data.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(searchValue);
    });
    console.log(value);
    console.log(filterdCountry);
    setData(filterdCountry);
  }, [value]);

  return (
    <CountriesContext.Provider value={{ data, setData }}>
      <div id="all">
        <h1>All Country</h1>

        <div id="form">
          <input type="text" required value={value} onChange={handleChange} />
        </div>

        {error && <p id="error">{error}</p>}
        {isLoading ? <p id="load">Loading data...</p> : <Countries />}
      </div>
    </CountriesContext.Provider>
  );
};

export default App;
