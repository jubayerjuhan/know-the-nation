import React from 'react';
import './CountryInformation.css'
const CountryInformation = (props) => {
    const Country = props.countries;
    console.log(Country)

    return (
        <div className = "wholePageDiv">
            
            {Country.map((country) =>
            <div className="nameAndimgCntnr">
                <h4>{country.name}</h4>
                <img className ="image" src={country.flag} alt="" />
                <h5>Capital City: {country.capital}</h5>
                <h5>Continent: {country.region}</h5>
            </div>
            )}
           
        </div>
    );
};

export default CountryInformation;
