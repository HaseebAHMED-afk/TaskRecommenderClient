import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [taskTitle , setTaskTitle] = useState('')
  const [taskType , setTaskType] = useState('')

  const task = [
    {
      taskTitle:'Create a page',
      taskType:'fe',
      taskAssignee:'John Doe'
    },
    
    {
      taskTitle:'Create a server',
      taskType:'be',
      taskAssignee:'John Smith'
    },
    {
      taskTitle:'Deploy a server',
      taskType:'be',
      taskAssignee:'John Smith'
    },
    {
      taskTitle:'Test a page',
      taskType:'t',
      taskAssignee:'John Dew'
    },
    {
      taskTitle:'Create a page',
      taskType:'fe',
      taskAssignee:'John Doe'
    },
    {
      taskTitle:'Design a page',
      taskType:'d',
      taskAssignee:'Jana Doe'
    },

  ]

  const onAddTask = () =>{
    const newTask ={
      taskTitle:taskTitle,
      taskType:taskType,
      taskAssignee:'Smith'
    }

    task.push(newTask)
    console.log(task);
  }

  return (
    <div>
      <h1 className="mainHeading">
        Task Management System using AI Based Recommendation Engine
      </h1>

      <div className="input-section">
        <input
        onChange={(e)=>setTaskTitle(e.target.value)}
        value={taskTitle}
          style={{
            width: "100%",
            height: 50,
            fontSize: 25,
            marginTop: 5,
            marginBottom: 5,
          }}
        />
        <select
        value={taskType}
        onChange={(e)=> {
          let v = e.target.value;
          setTaskType(v)
        }}
          style={{
            width: "100%",
            height: 50,
            fontSize: 25,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <option value={'fe'}>FrontEnd</option>
          <option value={'be'} >Backend</option>
          <option value={'t'} >Tester</option>
          <option value={'d'} >Designer</option>
        </select>
        <button style={{ width: "100%", height: 45  , backgroundColor:'lightblue'}} onClick={onAddTask} >Add</button>
      </div>

      {
        task.map((t,i)=>(
          <div key={i} className={`taskItem ${t.taskType === 'fe' ? 'front-end' : t.taskType ==='be' ? 'back-end' : t.taskType === 't' ? 'tester' : 'designer' }`}>
        <h2>{t.taskTitle}</h2>
        <p>{t.taskType}</p>
        <p>{t.taskAssignee}</p>
      </div>
        ))
      }

      
    
    </div>
  );
};

export default App;
