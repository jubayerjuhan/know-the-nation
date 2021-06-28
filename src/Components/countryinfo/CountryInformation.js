import React from 'react';
import './CountryInformation.css'
const CountryInformation = (props) => {
    const Country = props.countries
    return (
        <div className = "wholePageDiv">
            
            {Country.map((country) =>
            <div className="nameAndimgCntnr">
                <h4>{country.name}</h4>
                <img className ="image" src={country.flag} alt="" />
            </div>
            )}
            
        </div>
    );
};

export default CountryInformation;
