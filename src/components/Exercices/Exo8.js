import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function Exo8() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }, []);
  
    if (isLoading) {
      return <div>Chargement en cours...</div>;
    }
  
    if (error) {
      return <div>Erreur : {error.message}</div>;
    }
  const codeString = `
import React, { useState, useEffect } from 'react';

export default function Exo8() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }, []);
  
    if (isLoading) {
      return <div>Chargement en cours...</div>;
    }
  
    if (error) {
      return <div>Erreur : {error.message}</div>;
    }
  return (
    <div>
        <h1>afficher les 10 premiers pays de l'api </h1>
  <ul>
      {data.slice(0,10).map((item) => (
        <li key={item.name.common}>{item.name.common}</li>
      ))}
    </ul>
    </div>
  )
}

  `;

  return (
    <div>
        <h1>afficher les 10 premiers pays de l'api </h1>
  <ul>
      {data.slice(0,10).map((item) => (
        <li key={item.name.common}>{item.name.common}</li>
      ))}
    </ul>
  
      <SyntaxHighlighter language="jsx" style={materialLight}>
          {codeString}
        </SyntaxHighlighter>
    </div>
  )
}
