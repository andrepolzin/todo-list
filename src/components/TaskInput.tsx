import { useState } from "react";


export const TaskInput = ({onAddTask}: any) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (input.trim()) {
            onAddTask(input);
            setInput("");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mb-5 p-5">
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Adicione uma tarefa" 
                className="text-lg p-2 h-10 min-w-80 rounded border-sky-800 border-2"/>
            <button 
                type="submit" 
                className=" ml-3 pl-4 pr-4 bg-blue-600 h-10 text-white rounded hover:bg-blue-800">
                Adicionar
            </button>
        </form>
  )
}

