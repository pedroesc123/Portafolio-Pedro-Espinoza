import React, {useContext} from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import '../Styles/TodoCounter.css'

const TodoCounter = () => {
    const {completedTodos, totalTodos} = useContext(TodoContext)
    return (
        <div>
            <h1 className="title-counter">Se han completado {completedTodos.length} de {totalTodos} tareas</h1>
        </div>
        
    )
}

export default TodoCounter;