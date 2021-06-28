import './App.css';
import { useEffect, useState } from 'react';

function App() {

const [Country, setCountry] = useState([]);

useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountry(data))
    .catch(error => console.log(error))
}, [])
console.log(Country)

  return (
    <div className="App">
      
      <div>
        {Country.map((countries) => 
          <div className="nameAndFlag">
            <h2 className= "countriesName">{countries.name}</h2>
            <img class="flags" src={countries.flag} alt="" />
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
