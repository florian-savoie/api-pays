import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Exo4() {
  const codeString = `
    import React from 'react'
    export default function Exo4() {
      const handleCLick = () => {
        alert("Bouton cliqué !");
      }
  
      return (
      <div>
        <button className='btn btn-danger' onclick={handleCLick}>Cliquer ici </button>
      </div>
    )
  }
`;
  const handleCLick = () => {
    alert("Bouton cliqué !");
  };

  return (
    <div>
      <button className="btn btn-danger" onClick={handleCLick}>
        Cliquer ici{" "}
      </button>
      <SyntaxHighlighter language="jsx" style={materialLight}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
