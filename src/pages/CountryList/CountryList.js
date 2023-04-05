import React, { useState, useEffect } from 'react';
import "./countrylist.css";
import ShowPays from '../../components/Pays/ShowPays';

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
          <ShowPays
          name={item.name.common}
          key={item.official}
          flags={item.flags.svg}
          capital={item.capital}
          pop={item.population}
          itemKey={item.official}
        />
        ))}
      </div>

    </div>
  );
}
