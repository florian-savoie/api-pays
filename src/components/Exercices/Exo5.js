

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Exo5() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const codeString = `
import React, { useState } from 'react';


function Exo5() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Email : {email}\nMot de passe : {password}");
  }

  return (
    <>
  <form className="needs-validation" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
        <div className="invalid-feedback">Veuillez entrer une adresse email valide.</div>
      </div>

      <div className="form-group">
        <label htmlFor="password">Mot de passe :</label>
        <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} required />
        <div className="invalid-feedback">Veuillez entrer un mot de passe valide.</div>
      </div>

      <button type="submit" className="btn btn-primary">Se connecter</button>
      </form>
      {email !== '' ? (
          <h1>L'email choisi est {email}</h1>
        ) : (
          <p>Choisissez une adresse email.</p>
        )}    {password !== '' ? (
          <h1>Le pwd choisi est {password}</h1>
        ) : (
          <p>Choisissez un pwd.</p>
        )}
    </>
  );
}

export default Exo5;
  `;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email : ${email}\nMot de passe : ${password}`);
  }

  return (
    <>
  <form className="needs-validation" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
        <div className="invalid-feedback">Veuillez entrer une adresse email valide.</div>
      </div>

      <div className="form-group">
        <label htmlFor="password">Mot de passe :</label>
        <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} required />
        <div className="invalid-feedback">Veuillez entrer un mot de passe valide.</div>
      </div>

      <button type="submit" className="btn btn-primary">Se connecter</button>
    </form>
    {email !== '' ? (
        <h1>L'email choisi est {email}</h1>
      ) : (
        <p>Choisissez une adresse email.</p>
      )}    {password !== '' ? (
        <h1>Le pwd choisi est {password}</h1>
      ) : (
        <p>Choisissez un pwd.</p>
      )}
    <SyntaxHighlighter language="jsx" style={materialLight}>
          {codeString}
        </SyntaxHighlighter>
    </>
  );
}

export default Exo5;
