import React, { useState } from 'react';
import FormTodolist from '../../components/TodoList/formtodolist.js';
import './todolist.css';
export default function Todolist(){

    return (
<div>
    <h1>Ma todolist</h1>
    <h3>Taches a effectuées</h3>
    <div >
     <FormTodolist/>   
        </div>

</div>
    );
}