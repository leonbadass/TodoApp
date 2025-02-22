import React, {useState} from "react";


function Subtaskform ({taskId, addSubtask , styles}){
    const [subtaskdescription,setSubtaskdescription] = useState('');

    const handleChange = (e)=>{setSubtaskdescription(e.target.value)};
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!subtaskdescription.trim())return;
        addSubtask(taskId, subtaskdescription);
        setSubtaskdescription('');
    }


    return(
    <div className={styles.subtaskForm}>
    <form onSubmit = {handleSubmit}>
        <input type ='text' placeholder ="Add subtask" value={subtaskdescription} onChange ={handleChange}/>
        <button className={styles.button} type="submit">Add Subtask</button>

    </form>
    </div>)
}

export default Subtaskform;