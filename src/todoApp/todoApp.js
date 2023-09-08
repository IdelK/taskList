import { useState } from 'react';
import Todo from './todo';

export default function TodoApp()
{

  const [tittle, setTitle]= useState(" ");
  const [todos , setTodos]= useState([]);

  function handleChange(e)
  {
    const value=e.target.value;
    setTitle(value);
  }

  function handleSubmit(e) 
  {
    e.preventDefault(); 
    const  newTodo= 
     {               /*se crea */
       id: crypto.randomUUID(),       /*un nuevo*/
       tittle: tittle,                /*objeto todo*/
       completed: false,
     };


    const temp=[...todos]           /*se crea una copia del array todo*/
    temp.unshift(newTodo);          /*unshift agrega el nuevo objeto al inicio del arrgelo*/
    setTodos(temp);                 /*se actuliza el estado todo con el setter(setTodos) con el temp actualizado */
                                   /*esto se resume con setTodos([...todos,newTods])*/
    setTitle("");
                                   
  }

  function handleUpdate(id,value)
  {   /* esta funcion busca el item por su Id y le actualiza con value del input */
    const temp =[...todos];
    const item = temp.find(item=>item.id === id)
    item.tittle = value;
    setTodos(temp);
  }

  function handleDelete(id)
  {
    const temp = todos.filter(item => item.id !== id);
    setTodos(temp)
  }

return(
  <div className="todoContainer">Hola 
    <form className="todoCreateForm" onSubmit={handleSubmit}>
      <input onChange={handleChange} className="todoInput" value={tittle}/>
      <input 
        onClick={handleSubmit} 
        className="buttoncreate"
        type="submit"
        value="Create todo"/> 
    </form>

    <div className= "todosContainer"> 
     { todos.map(item=>( <Todo item={item} onUpdate={handleUpdate} onDelete={handleDelete}/> ))}
    </div>

  </div>
 );
}