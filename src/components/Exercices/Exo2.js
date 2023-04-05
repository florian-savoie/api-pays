import React , {useState }from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function Exo2() {
  const [count , setCount ] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  const codeString = `import React , {useState }from 'react';
  import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
  import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
  
  
  export default function Exo2() {
    const [count , setCount ] = useState(0);
  
    const increment = () => {
  setCount = (count+1 );
    }
  
    return (
      <div>
        <p>compteur : {count}</p>
        <button onClick={increment}>Incrementer</button>
        <SyntaxHighlighter language="jsx" style={materialLight}>
            {codeString}
          </SyntaxHighlighter>
      </div>
    )
  }
  `

  return (
    <div>
      <p>compteur : {count}</p>
      <button className='btn btn-primary' onClick={increment}>Incrementer</button>
      <SyntaxHighlighter language="jsx" style={materialLight}>
          {codeString}
        </SyntaxHighlighter>
    </div>
  )
}
