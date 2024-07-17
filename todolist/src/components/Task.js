import React from "react";
import Subtaskform from './Subtaskform';

function Task ({task, taskDone, deleteTask, subtaskDone , deleteSubtask, addSubtask, styles}){
    return(<li>
       {task.description}--{task.category}
          
          <button type="button" onClick={(e) => taskDone(task.id)} className ={styles.buttonDone}>Done</button>
           <button type="button" onClick={() => deleteTask(task.id)} className ={styles.buttonDel}>Remove</button>

           <ul>
           {task.subtasks.map((subtask)=>(<li key ={subtask.id}>{subtask.description}
            <button type='button' onClick ={()=> subtaskDone(task.id,subtask.id)}>Subtask Done</button>
            <button type= 'button' onClick ={()=>deleteSubtask(task.id , subtask.id)}>Remove Subtask</button>
           </li>))}
           </ul>
           <Subtaskform taskId ={task.id} addSubtask = {addSubtask}/>

    </li>)
}

export default Task;