//import React, { useState } from "react";
import Subtaskform from './Subtaskform';

function Task ({task, taskDone, deleteTask,  deleteSubtask, addSubtask, styles, subtaskdone}){

    //const [subTaskdone, setSubTaskDone] = useState(false);
    return (<div className={styles.taskCard}><li className= {task.done? styles.taskDone : styles.visible}>
       <div className= {styles.taskcardTitle}><span className={styles.taskTitle}> {task.description} </span>  
        {!task.done && <button type="button" onClick={() => taskDone(task.id)} className ={styles.buttonDone}>Completed</button>}
         <button type="button" onClick={() => deleteTask(task.id)} className ={styles.buttonDone}>Delete</button></div>

         {task.subtasks.length > 0 && <h6 >Subtasks:</h6>}


         

         <ul><div className={styles.subtaskCard}>
         {task.subtasks.map((subtask)=> (<> <li  key ={subtask.id} className={subtask.issubTaskdone? styles.taskDone: styles.visible}>
            <div className={styles.subtask}><span className= {styles.subtaskTitle}> {subtask.description}</span>

           {!task.done && !subtask.issubTaskdone && <button className={styles.button} type='button' onClick ={()=> subtaskdone(task.id, subtask.id)}>Completed</button>}
            <button className={styles.button} type= 'button' onClick ={()=>deleteSubtask(task.id , subtask.id)}>Delete</button>
         </div> </li></>))
}</div>
{!task.done && <Subtaskform taskId ={task.id} addSubtask = {addSubtask} styles ={styles}/>}


  </ul></li></div>)
    
    
}


export default Task