import React from 'react';
import './JCountry.css'

const JCountry = (props) => {
    const Country = props.country;
    const {name, flag, population, capital, region} = Country;
    console.log(Country);
    return (
        <div className="JcountryDiv">
            <h1>{name}</h1>
            {/* <img src={flag} alt="" /> */}
            <h5>Population: {population}</h5>
            <h5>Capital City: {capital}</h5> 
            <h5> <small> Region : {region}</small></h5>           
        </div>
    );
};

export default JCountry;