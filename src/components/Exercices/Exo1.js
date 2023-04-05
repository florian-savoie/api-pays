import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Exo1() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  const codeString = `
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Exo2() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  return (
    <>
        <SyntaxHighlighter language="jsx" style={materialLight}>
          {codeString}
        </SyntaxHighlighter>
        <h1> resultat de la liste</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} qui a pour id {user.id}</li>
        ))}
      </ul>
    </>
  );`;

  return (
    <>
        <SyntaxHighlighter language="jsx" style={materialLight}>
          {codeString}
        </SyntaxHighlighter>
        <h1> resultat de la liste</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} qui a pour id {user.id}</li>
        ))}
      </ul>


    </>
  );
}
