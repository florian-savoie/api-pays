import React, { useState } from 'react';

const SauvegardeJSON = ({ onSave }) => {
  const [texte, setTexte] = useState('');

  const handleChange = (e) => {
    setTexte(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ texte });
  };

  return (
    <div>
      <h1>Sauvegarder le texte dans un fichier JSON</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={texte} onChange={handleChange} />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

const BoutonSauvegardeJSON = ({ onClick }) => {
  const handleClick = () => {
    const data = { texte: 'Hello World!' };
    onClick(data);
  };

  return <button onClick={handleClick}>Sauvegarder JSON</button>;
};

const App = () => {
  const sauvegarderFichierJSON = (data) => {
    localStorage.setItem('data.json', JSON.stringify(data));
    alert('Fichier JSON sauvegardé dans l\'application');
  };

  return (
    <div>
      <SauvegardeJSON onSave={sauvegarderFichierJSON} />
      <BoutonSauvegardeJSON onClick={sauvegarderFichierJSON} />
    </div>
  );
};

export default App;
