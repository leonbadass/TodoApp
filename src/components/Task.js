//import React, { useState } from "react";
import Subtaskform from './Subtaskform';

function Task ({task, taskDone, deleteTask,  deleteSubtask, addSubtask, styles, subtaskdone}){

    //const [subTaskdone, setSubTaskDone] = useState(false);
    
    if(task.done){
    return(<li className = {styles.taskDone}>
        {task.description}

          
           <button type="button" onClick={() => deleteTask(task.id)} className ={styles.buttonDel}>Remove</button>

           <ul>
           {task.subtasks.map((subtask)=>(<li key ={subtask.id}>{subtask.description}
            
           </li>))}
           </ul>


    </li>)
} else{
    return (<li>
        {task.description}
       
          
        <button type="button" onClick={(e) => taskDone(task.id)} className ={styles.buttonDone}>Done</button>
         <button type="button" onClick={() => deleteTask(task.id)} className ={styles.buttonDel}>Remove</button>
         <Subtaskform taskId ={task.id} addSubtask = {addSubtask}/>

         <ul>
         {task.subtasks.map((subtask)=>!subtask.issubTaskdone? (<> <li  key ={subtask.id}>{subtask.description}

            <button type='button' onClick ={()=> subtaskdone(task.id, subtask.id)}>Subtask Done</button>
            <button type= 'button' onClick ={()=>deleteSubtask(task.id , subtask.id)}>Remove Subtask</button>
          </li></>): (<> <li className={styles.taskDone} key ={subtask.id}>{subtask.description}

<button type= 'button' onClick ={()=>deleteSubtask(task.id , subtask.id)}>Remove Subtask</button>
</li></>))
}
    

  </ul></li>)}
}


export default Task;