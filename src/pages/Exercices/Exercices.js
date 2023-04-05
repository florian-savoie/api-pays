import React, { useState } from 'react';
import Liste from '../../components/Exercices/Liste';
import Exo1 from '../../components/Exercices/Exo1';
import Exo2 from '../../components/Exercices/Exo2';
import "./exercices.css"
export default function Exercices() {
  const [exo, setExo] = useState(null);

  function handleExoChange(valeur) {
    setExo(valeur);
  }

  function renderExo() {
    switch (exo) {
      case "Exo1":
        return <Exo1 />;
      case "Exo2":
        return <Exo2 />;
      default:
        return "Choisissez un exercice";
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-2">
          <Liste onExoChange={handleExoChange} />
        </div>
        <div className="col-10">{renderExo()}</div>
      </div>
    </>
  );
}
