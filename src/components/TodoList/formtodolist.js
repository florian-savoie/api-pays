
import React, { useState } from 'react';
import ShowTache from './ShowTache';
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
        newListeTache.splice(index, 1);
        setlistetache(newListeTache);
    };
    return (
        <>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="task">Tâche à faire:</label>
        <input
          type="text"
          className="form-control"
          id="task"
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={description}
          onChange={handledescriptionChange}
        />
      </div>
      <div className='centerbutton'>
      <button type="submit" className="btn btn-primary">
        Publier
      </button>
      </div>
    </form>
        
      <ShowTache listetache={listetache} handledeletetache={handledeletetache} />

</>
)}
export default FormTodolist; 
