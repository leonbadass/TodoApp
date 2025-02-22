import React, { useState } from "react";
import Todoform from "./components/Todoform";
import styles from "./styles.module.css"
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([]);
  

  

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter(( task) => taskId !== task.id);
    setTasks(newTasks);

  };
  const deleteSubtask= (taskId, subtaskId)=>{
    setTasks(tasks.map((task)=> taskId === task.id? {...task, subtasks:task.subtasks.filter(subtask=> subtask.id !== subtaskId)}:task));
   

  };
  
  const addTask = (task)=>{
    setTasks([...tasks ,{id:Date.now(), ...task, subtasks:[]}])
  };

  const addSubtask = (taskId, subtaskdescription)=>{
    setTasks(tasks.map(task=> task.id === taskId? 
      {...task,subtasks:[...task.subtasks ,{id:Date.now(), description: subtaskdescription, issubTaskdone: false,}]}: task))

  }
  
  const taskDone = (taskId)=>{
    setTasks(tasks.map(task => task.id === taskId? {...task, done: true}: task))
  };

  const subtaskdone = (taskId, subtaskId) =>{
    setTasks(tasks.map(task=>task.id ===taskId?{...task,subtasks:task.subtasks.map(subtask=>subtask.id === subtaskId? {...subtask, issubTaskdone: true}:subtask)}:task))
  };
  return (
    <div className= {styles.centeredDiv}>
      <h1>The To-do APP </h1>
      <Todoform
       styles={styles} 
       addTask ={addTask} 
      

       />
       <h2 className = {tasks.length>0 ? styles.visible: styles.hidden}>Task Board</h2>
      <ul>
        {tasks.map((task) => (
          <Task 
          key={task.id}
          deleteTask = {deleteTask}
          deleteSubtask={deleteSubtask}
          addSubtask={addSubtask}
          taskDone ={taskDone}
          task ={task}
          styles ={styles}
          subtaskdone={subtaskdone}/>

             
        ))}
      </ul>
    </div>
  );
}

export default App;
