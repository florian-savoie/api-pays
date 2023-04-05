import React from 'react'




export default function Liste(props) {

   
  return (
    <>
    <ul>
    <li onClick={() => props.onExoChange("Exo1")}>parcourrir une liste </li>
        <li onClick={() => props.onExoChange("Exo2")}>Compteur useStat HOOK</li>
        <li onClick={() => props.onExoChange("Exo1")}>Exercice 3</li>
    </ul>
    </>
  )
}
