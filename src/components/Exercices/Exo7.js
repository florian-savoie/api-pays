import React , {useState , useEffect }from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function Exo7() {
const [seconds , setSeconds] = useState(0);

useEffect(() => {
    const insterval = setInterval(() => {
        setSeconds((preveSecond) => preveSecond + 1 );
    },1000);
    return ()=> {
        clearInterval(insterval);
    };
},[]);
  const codeString = `
  import React , {useState , useEffect }from 'react';
  
  export default function Exo7() {
  const [seconds , setSeconds] = useState(0);
  
  useEffect(() => {
      const insterval = setInterval(() => {
          setSeconds((preveSecond) => preveSecond + 1 );
      },1000);
      return ()=> {
          clearInterval(insterval);
      };
  },[]);
  return (

    <div>
        <h1><span style={{fontSize:40,color:"red"}}>{seconds}</span> se sont ecoulé depuis que vous etes sur cette pages</h1>
    </div>
  )
}
  `;

  return (
    <div>
        <h1><span style={{fontSize:40,color:"red"}}>{seconds}</span> se sont ecoulé depuis que vous etes sur cette pages</h1>
      <SyntaxHighlighter language="jsx" style={materialLight}>
          {codeString}
        </SyntaxHighlighter>
    </div>
  )
}
