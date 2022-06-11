import React, { useContext, useState } from "react";
import { TodoContex } from "../contexts/TodoContex";
const AddTodo=()=>{
    const {saveTodo}= useContext(TodoContex);
   const [todo, setTodo]=useState();
   const handleFormSubmit = e =>{
       e.preventDefault();
       saveTodo(todo);

   }

   const handleInputChange = e => {
       setTodo({
   ...todo,
  title: e.target.value,
   })
}
    return(
       <form onSubmit={handleFormSubmit}>
           <input type="text" name="title" id="title" placeholder="Novo Jogador" onChange={handleInputChange} />
           <button>Adicionar</button>

       </form>
    )
}

export default AddTodo;