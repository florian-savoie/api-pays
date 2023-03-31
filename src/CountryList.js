import React, { useState, useEffect } from 'react';
import "./index.css";

export default function CountryList() {
  const [data, setData] = useState([]);
  const [compteur, setCompteur] = useState(0);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    setCompteur(data.length);
  }, [data]);

  return (
    <div className='blockcentral'>
      <h1>Voici la liste des pays </h1>
      <h1>Il y a au total : {compteur} Pays </h1>

      <div className='card'>
        {data.map((item) => (
          <div className='cardpays' key={item.official}>
            <img src={item.flags.svg}></img>
            <p>pays : {item.name.common}</p>
            <p>capital : {item.capital}</p>
            <p>population {item.population}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
