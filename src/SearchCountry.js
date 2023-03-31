import { useState, useEffect } from "react";


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
      <form action="">
        <input
          type="text"
          name="paysname"
          id="paysname"
          value={pays.paysname}
          onChange={(evt) => handleChange(evt)}
          placeholder="rechercher un pays"
        />
      </form>

      <p>Vous avez saisi : {pays.paysname}</p>
      <div className="blockcentral">
        <h1>Voici la liste des pays </h1>
        <h1>Il y a au total : {compteur} Pays </h1>

        <div className="card">
          {data.map((item) => {
if (item.name.common.toLowerCase().includes(pays.paysname.toLowerCase())) {
  return (
                <div className="cardpays" key={item.official}>
                  <img src={item.flags.svg}></img>
                  <p>pays : {item.name.common}</p>
                  <p>capital : {item.capital}</p>
                  <p>population {item.population}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
   
      </div>
    </div>
  );
}




