import { useState } from 'react';
import Todo from './todo';

export function TodoApp()
{

const [tittle, setTitle]= useState("hola");
const [todos , setTodos]= useState([]);

function handleChange(e){
const value=e.target.value;
setTitle(value);
}

function handleSubmit(e){
e.preventDefault();
const  newTodo= {
 id: crypto.randomUUID(),
 tittle: tittle,
 completed: false,
};

const temp=[...todos]
setTodos([...todos,newTodo]);
temp.unshift(newTodo);
setTodos(temp);
{/*esto se resume con setTodos([...todos,newTods])*/}

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
  { todos.map(item=>( <Todo item={item}/> ))}
  </div>

</div>
 );
}