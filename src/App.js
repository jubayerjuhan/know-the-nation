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


  return (
    <div className="App">
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

      {Country.map((countries) => <JCountry country = {countries} key = {countries.alpha3Code}></JCountry>)}

      {/* <CountryInformation countries = {Country}></CountryInformation> */}
    </div>
  );
}

export default App;
