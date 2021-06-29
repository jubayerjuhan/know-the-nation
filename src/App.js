import './App.css';
import { useEffect, useState } from 'react';
import CountryInformation from "./Components/countryinfo/CountryInformation";


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
      <CountryInformation countries = {Country}></CountryInformation>
    </div>
  );
}

export default App;
