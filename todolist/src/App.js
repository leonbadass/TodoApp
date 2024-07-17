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
      {...task,subtasks:[...task.subtasks ,{id:Date.now(), description: subtaskdescription}]}: task))

  }
  
  const taskDone = (taskId)=>{
    setTasks(tasks.map(task => task.id === taskId? {...task, done: true}: task))
  };

  const subtaskDone = (taskId, subtaskId)=>{
    setTasks(tasks.map(task=>taskId ===task.id?{...task,subtasks:task.subtasks.map(subtask=>subtaskId === subtask.id? {...subtask, done: true}:subtask)}:task))
  }
  return (
    <div className= {styles.centeredDiv}>
      <h1>ToooDooo </h1>
      <h2>Add tasks</h2>
      <Todoform
       styles={styles} 
       tasks={tasks} 
       setTasks={setTasks} 
       addTask ={addTask} />
      <ul>
        {tasks.map((task) => (
          <Task 
          key={task.id}
          deleteTask = {deleteTask}
          deleteSubtask={deleteSubtask}
          addSubtask={addSubtask}
          taskDone ={taskDone}
          task ={task}
          subtaskDone = {subtaskDone}
          styles ={styles}/>

             
        ))}
      </ul>
    </div>
  );
}

export default App;
