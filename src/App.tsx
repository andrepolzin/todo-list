import {useState, useEffect} from "react";

import { TaskInput } from "./components/TaskInput"
import { TaskList } from "./components/TaskList"


export const App = () => {


  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks') as any)  || []
  );


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])
  

  const addTask = (task: any) => {
    // id, text, done
    setTasks([...tasks, {id: Date.now(), text: task, done: false}])
    // localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }


  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task: any) => task.id !== taskId));
  }


  const toggleTaskDone = (taskId: number) => {
    setTasks(tasks.map((task: any) => task.id === taskId ? {...task, done: !task.done} : task))
  }


  return (
    <div className="bg-gray-300 h-screen w-screen">
      <h1 className="text-4xl font-semibold p-5">Lista de Tarefas</h1>
      <TaskInput onAddTask={addTask}/>
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleTaskDone={toggleTaskDone}/>
    </div>
  )
}


