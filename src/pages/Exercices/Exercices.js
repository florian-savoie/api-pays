import React, { useState } from 'react';
import Liste from '../../components/Exercices/Liste';
import Exo1 from '../../components/Exercices/Exo1';
import Exo2 from '../../components/Exercices/Exo2';
import Exo3 from '../../components/Exercices/Exo3';
import Exo4 from '../../components/Exercices/Exo4';
import Exo5 from '../../components/Exercices/Exo5';
import Exo6 from '../../components/Exercices/Exo6';
import Exo7 from '../../components/Exercices/Exo7';
import Exo8 from '../../components/Exercices/Exo8';
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
      case "Exo3":
        return <Exo3 />;
      case "Exo4":
        return <Exo4 />;
      case "Exo5":
        return <Exo5 />;
      case "Exo6":
        return <Exo6 />;
      case "Exo7":
        return <Exo7 />;
      case "Exo8":
        return <Exo8 />;
      default:
        return "Choisissez un exercice";
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-3">
          <Liste onExoChange={handleExoChange} />
        </div>
        <div className="col-9">{renderExo()}</div>
      </div>
    </>
  );
}
