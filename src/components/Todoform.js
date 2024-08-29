import React, {useState}from "react";

function Todoform({ tasks, setTasks, styles, addTask}){

    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');
    
    const onChange = e => setValue(e.target.value);
    const onCategoryChange = e => setCategory(e.target.value);
    
    const onSubmit = (e)=>{
        e.preventDefault();
        if (value.trim() === '') return; // Prevent empty tasks
        addTask({ description: value, category });
        setValue('');
        setCategory('');


        };


    return(<>
    <form onSubmit={onSubmit}>
    <input className = {styles.input}type='text' placeholder='TODO: Enter Task' onChange={onChange} value={value}/>
    <input  type ='text' placeholder = 'Create task category(optional)' onChange={onCategoryChange} value={category} />
    <button type='submit'>Save Task</button>
    </form>
    
    </>)
}

export default Todoform;