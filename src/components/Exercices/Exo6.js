import React , {useState }from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function Exo6() {

    const [count , setCount ] = useState(0);

    const increment = () => {
      setCount(count + 1);
    }
    const codeString = `
import React , {useState }from 'react';

export default function Exo6() {

    const [count , setCount ] = useState(0);

    const increment = () => {
      setCount(count + 1);
    }
    return (
        <div>
                  <p>compteur : <span style={{color:"green",fontSize:30}}>{count}</span></p>
          <button className='btn btn-primary' onClick={increment}>Incrementer</button>
          <h3>si le compteur depasse les 5 nous allons alors afficher que vous avez gagné</h3>
          {count < 5 ? (
            <h1 style={{color:"red"}}>Continuer de jouer</h1>
          ) : (
            <h1 style={{color:"green"}}>Vous avez gagné</h1>
          )} 

        </div>
      )
    }
    `;
    
    return (
    <div>
              <p>compteur : <span style={{color:"green",fontSize:30}}>{count}</span></p>
      <button className='btn btn-primary' onClick={increment}>Incrementer</button>
      <h3>si le compteur depasse les 5 nous allons alors afficher que vous avez gagné</h3>
      {count < 5 ? (
        <h1 style={{color:"red"}}>Continuer de jouer</h1>
      ) : (
        <h1 style={{color:"green"}}>Vous avez gagné</h1>
      )} 
        <SyntaxHighlighter language="jsx" style={materialLight}>
          {codeString}
        </SyntaxHighlighter>
    </div>
  )
}




