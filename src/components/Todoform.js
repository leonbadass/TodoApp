import React, {useState}from "react";

function Todoform({ tasks, setTasks, styles, addTask}){

    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    
    const onChange = e => setDescription(e.target.value);
    const onCategoryChange = e => setCategory(e.target.value);
    
    const onSubmit = (e)=>{
        e.preventDefault();
        if (description.trim() === '') return; //to prevent empty tasks
        addTask({ description: description, category });
        setDescription('');
        setCategory('');
    




        };


    return(<>
    <form onSubmit={onSubmit}>
    <input className = {styles.input}type='text' placeholder='TODO: Enter Task' onChange={onChange} value={description}/>
    <input  type ='text' placeholder = 'Create task category(optional)' onChange={onCategoryChange} value={category} />
    <button type='submit'>Add Task</button>
    </form>
    
    </>)
}

export default Todoform;