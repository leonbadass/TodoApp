import React, {useState}from "react";

function Todoform({  styles, addTask}){

    const [description, setDescription] = useState('');
    
    const onChange = e => setDescription(e.target.value);
  
    const onSubmit = (e)=>{
        e.preventDefault();
        if (description.trim() === '') return; //to prevent empty tasks
        addTask({ description: description });
        setDescription('');
       




        };


    return(<div className ={styles.todoForm}>
    <form onSubmit={onSubmit}>
    <input  type='text' placeholder='Enter Task' onChange={onChange} value={description}/>

    <button className= {styles.button} type='submit'>Create Task-board</button>
    </form>
    
    </div>)
}

export default Todoform;