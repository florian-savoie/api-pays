import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import Enfantexo3 from "./Enfantexo3";

export default function ParentExo3() {
  const codeString = `
// element parent donnant les props 
import React from 'react'
import Enfantexo3 from './Enfantexo3';
export default function ParentExo3() {
return (
  <div>
    < Enfantexo3 name="florian" email="floriansavoie@msn.com"/>
  </div>
)
}

// element enfant recevant les props
import React from 'react'

export default function Enfantexo3(props) {
  return (
    <div>
    <h2>j'ai pâssé un nom a la props {props.name}</h2>
    <p> et j'ai passé un Email : {props.email}</p>
    </div>
  )
}


    `;

  return (
    <div>
      <Enfantexo3 name="florian" email="floriansavoie@msn.com" />
      <SyntaxHighlighter language="jsx" style={materialLight}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
