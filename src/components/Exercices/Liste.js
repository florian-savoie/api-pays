import React from 'react'

export default function Liste(props) {

   
  return (
    <>
    <ul>
    <li onClick={() => props.onExoChange("Exo1")}>parcourrir une liste </li>
        <li onClick={() => props.onExoChange("Exo2")}>Compteur useStat HOOK</li>
        <li onClick={() => props.onExoChange("Exo3")}>Passage de données via les props</li>
        <li onClick={() => props.onExoChange("Exo4")}>Evenement React</li>
        <li onClick={() => props.onExoChange("Exo5")}>Gestion de formulaire </li>
        <li onClick={() => props.onExoChange("Exo6")}>Condition if/else </li>
        <li onClick={() => props.onExoChange("Exo7")}>Chronometre </li>
        <li onClick={() => props.onExoChange("Exo8")}>Utilisation d'une api </li>
    </ul>
    </>
  )
}
