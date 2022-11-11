
import { useState } from 'react';

export default function Todo({item , onUpdate}){
const [isEdit, setIsEdit] =  useState(false);

function FormEdit(){

    const [newValue , setNewValue] =  useState(item.tittle);
    function handleSubmit(e){
        e.preventeDefault();
    }

    function handleChange(e){
        const value = e.target.value;
        setNewValue(value);
    }

function handleClickUpdateTodo(e){
    e.preventeDefault();
    onUpdate(item,newValue);
    setIsEdit(false);

}
return (
    <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input 
        className="todoInput" 
        type = "text" 
        onChange={handleChange}
        value={newValue}
        />
        <button className='button' onClick={handleClickUpdateTodo}> Update</button>         
    </form>
)};
 
function TodoElement(){
return (
<div className='todoInfo'>
    {item.tittle} <button onClick={()=>setIsEdit(true)}>Edit</button>
    <button>Delete</button>
</div>
)
};

return(
<div className="todo"> 
    {isEdit ? <FormEdit/> : <TodoElement/>}
</div>
  
);}