import React from 'react';

const Cart = (props) => {
    const cart = props.count
    console.log(cart)

    // let totalPopulation = 0;
    // let name = [];
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
    //     name = [...name, country.name]
    // }
    // console.log(name)

    const totalPopulation = cart.reduce((sum, country) => sum + country.population, 0)

    return (
        <div>
            <h1>Country Added: {cart.length}</h1>
            <p>Total Population: {totalPopulation}</p>
            {/* <div>
                <ul>
                {name.map((name)=> <li>{name}</li>)}
                </ul>
            </div> */}
        </div>
    );
};

export default Cart;