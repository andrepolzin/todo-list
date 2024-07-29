import {Task} from "./Task";

export const TaskList = ({tasks, onDeleteTask, onToggleTaskDone}: any) => {

  if (tasks.length === 0) {
    return <p className="ml-5 text-2xl">Não há tarefas a serem exibidas na tela!</p>
  }

  return (
    <ul >
      {tasks.map((task: any) => (
        <Task 
          key={task.id} 
          task={task}
          onDelete={() => onDeleteTask(task.id)}
          onToggleDone={() => onToggleTaskDone(task.id)}/>
      ))}
    </ul>
  )
}
