import { useState, useEffect } from "react";
import "./searchcountry.css";
import ShowPays from "../../components/Pays/ShowPays";

export default function SearchCountry() {
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
  const [pays, setPays] = useState({ paysname: "" });

  function handleChange(evt) {
    const { name, value } = evt.target;
    console.log(evt.target.value);
    setPays({ ...pays, [name]: value });
  }

  return (
    <div>
      <div className="container recherche">
      <form action="">
        <input
        className="mt-5 mx-5"
          type="text"
          name="paysname"
          id="paysname"
          value={pays.paysname}
          onChange={(evt) => handleChange(evt)}
          placeholder="rechercher un pays"
        />
           <p>Vous avez saisi : {pays.paysname}</p>

 </form>
      </div>
      <div className="blockcentral">
        <h1>Voici la liste des pays </h1>
        <h1>Il y a au total : {compteur} Pays </h1>

        <div className="card">

       { data.map((item) => {
if (item.name.common.toLowerCase().includes(pays.paysname.toLowerCase())) {
  return (
    
      <ShowPays
        name={item.name.common}
        key={item.official}
        flags={item.flags.svg}
        capital={item.capital}
        pop={item.population}
        itemKey={item.official}
      />              );
            } else {
              return null;
            }
          })}
        </div>
   
      </div>
    </div>
  );
}




