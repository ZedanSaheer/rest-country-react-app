import React, { useState, useEffect } from 'react'

const url = 'https://restcountries.eu/rest/v2/all'

const Countries = () => {

    const [countries, setCountries] = useState([])

    const fetchDataApi = async () => {
        const response = await fetch(url);
        const countries = await response.json();
        console.log(countries);
        setCountries(countries)
    }

    useEffect(() => {
       fetchDataApi()
    }, [])



    return (
        <>
          <section className="grid">
          {countries.map((country) => {
                const { numericCode , name , population ,region , capital , flag } = country

                return (
                    <div key={numericCode} className="country">
                        <img src={flag} alt={name}/>
                        <div className="country text">
                        <h3>{name}</h3>
                        <h4>Population : <span>{population}</span></h4>
                        <h4>Region : <span>{region}</span></h4>
                        <h4>Capital : <span>{capital}</span></h4>
                    </div></div>
                )
            })}
          </section>
        </>
    )
}

export default Countries
