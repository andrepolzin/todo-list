
export const Task = ({ task, onDelete, onToggleDone }: any) => {

  return (
    <li className="flex justify-between items-center ml-5 mb-4 pl-3 bg-white w-1/3 rounded h-14 border-2 border-solid border-green-700">
        <span onClick={onToggleDone} style={{textDecoration: task.done ? "line-through" : "none"}} className="h-10 pt-1 text-lg cursor-pointer">
          {task.text}
        </span>
        <button 
          className="bg-green-500 rounded p-2 text-white h-10 mr-4 hover:bg-green-700"
          onClick={onDelete}>          
            Remover
        </button>    
    </li>
  )
}

