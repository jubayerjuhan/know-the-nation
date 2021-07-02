import './App.css';
import { useEffect, useState } from 'react';
import JCountry from "./Components/Country/JCountry";


function App() {

const [Country, setCountry] = useState([]);

useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountry(data))
    .catch(error => console.log(error))
}, [])

const [count, setcount] = useState([])

const handleAddCountry = (country) => {
  console.log('Country Added', country);
  const totalAddedCntry = [...count, country]
  setcount(totalAddedCntry);
}

  return (
    <div className="App">
      <h1>Country Loaded: {Country.length}</h1>
      <h2>Country Added: {count.length}</h2>
      {/* <div>
        <ul>
          {Country.map((countries)=> 
            <li>
              <p>{countries.name}</p>
              <img src={countries.flag} alt="" />
            </li>
          )}
        </ul>
      </div> */}

      {Country.map((countries) => <JCountry country = {countries} key = {countries.alpha3Code} handleAddCountry = {handleAddCountry}></JCountry>)}

      {/* <CountryInformation countries = {Country}></CountryInformation> */}
    </div>
  );
}

export default App;
