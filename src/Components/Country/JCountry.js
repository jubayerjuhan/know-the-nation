import React from 'react';
import './JCountry.css'

const JCountry = (props) => {
    const Country = props.country;
    const {name, flag, population, capital, region, subregion} = Country;
    console.log(Country);
    const flagStyle = {height: '50px', margin: '10px', padding: '10px'};
    return (  
        <div className="JcountryDiv">
            <h1>{name}</h1>
            <img style = {flagStyle} src={flag} alt="" />
            <p>Population: {population}</p>
            <p>Capital City: {capital}</p> 
            <p> <small> Region : {region}</small></p>
            <p><small>Subregion : {subregion}</small></p>
            <button onClick = {() => props.handleAddCountry(Country)}>Add Country</button>  
        </div>
    );
};

export default JCountry; 