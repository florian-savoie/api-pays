import React from 'react'




export default function Liste(props) {

   
  return (
    <>
    <ul>
    <li onClick={() => props.onExoChange("Exo1")}>Exercice 1</li>
        <li onClick={() => props.onExoChange("Exo2")}>Exercice 2</li>
        <li onClick={() => props.onExoChange("Exo1")}>Exercice 3</li>
    </ul>
    </>
  )
}
