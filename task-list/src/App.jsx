import { useEffect, useState } from "react"
import List from "./components/List"
import {v4 as uuidv4} from 'uuid'
import DateCreate from "./functions/DateCreate";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTodos = localStorage.getItem('tasks');
    if(!storedTodos) {
      return []
    } else {
      return JSON.parse(storedTodos)
    }
  })
  const [taskTitle, setTaskTitle] = useState('')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (e) => {
    if(e.key === 'Enter' && e.target.value !== '') {
      setTasks([
        ...tasks, {
          id: uuidv4(),
          title: taskTitle,
          status: false,
          date: DateCreate()
        }
      ])
      setTaskTitle('')
    }
  }

    const incompleteTasksCount = tasks.filter(task => task.status === false).length;

  return (
    <div className="container">
      <h1>Note your task</h1>
      <span className="dateAndCounter">{DateCreate()} <b>tasks left: {incompleteTasksCount}</b></span> 
      <div className="input-field">
        <input type="text" placeholder="Task name" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} onKeyDown={addTask}/>
      </div>

      <List tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App
