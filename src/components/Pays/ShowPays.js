import React from 'react';

export default function ShowPays(props) {
    const { name, flags, capital, pop } = props;
  
    return (
      <div className="cardpays" key={props.itemKey}>
        <img src={flags}></img>
        <p>pays : {name}</p>
        <p>capital : {capital}</p>
        <p>population : {pop}</p>
      </div>
    );
  }