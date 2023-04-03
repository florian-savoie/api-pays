
import React, { useState } from 'react';
import "./elementtodolist.css";
function FormTodolist() {

    const [listetache , setlistetache] = useState([]);
    const [text, setText] = useState('');
    const [description, setdescription] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handledescriptionChange = (event) => {
        setdescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const nouvelleTache = {
            text: text,
            description: description
        };
    
        setlistetache([...listetache, nouvelleTache]);
    
        // réinitialisation des champs texte et description
        setText('');
        setdescription('');
    };
    const handledeletetache = (index) => {
        const newListeTache = [...listetache];
        alert(index);
        newListeTache.splice(index, 1);
        setlistetache(newListeTache);
    };
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                tache a faire 
                <input type="text" value={text} onChange={handleTextChange} />
            </label>
            <br />
            <label>
                description : 
                <input type="description" value={description} onChange={handledescriptionChange} />
            </label>
            <br />
            <button type="submit"> publier </button>
        </form>
        

        {listetache.map((tache, index) => (
            <div className="tache" key={index}>
                <div className='divtodolist'>
                    <h2>tache : {tache.text}</h2>
                    <p> description :{tache.description}</p>
                    <button onClick={() => handledeletetache(index)}>Supprimer</button>
                </div>
            </div>
        ))}
</>
)}
export default FormTodolist; 
