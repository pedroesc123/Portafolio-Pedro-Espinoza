import React, {useContext} from "react";
import '../Styles/TodoList.css'
import { TodoContext } from "../TodoContext/TodoContext";
import TodoSearch from "./TodoSearch";

const TodoList = () => {
    const {searchedTodos, completedTodos, loading, error, completeTodo, onDelete} = useContext(TodoContext)
    return (
        <div className="container-todos">
            {!loading &&
            <div className="container-todo-list">
                <div className="container-list-process">
                    <h1>Lista de Tareas</h1>
                    <div>
                        {searchedTodos.map(todo => !todo.completed && (
                            <div 
                                key={todo.text}  
                                className="todos-in-process"
                            >
                                <button onClick={() => completeTodo(todo.text)}>✓</button>
                                <p>{todo.text}</p>
                            </div>
                        ))}
                        {searchedTodos.length === 0 && 
                            <h2>No hay TODOs por hacer, agrega uno!</h2>
                        }
                    </div>
                </div>

                <TodoSearch/>

                <div className="completed-list">
                    <h1>Tareas Completadas</h1>
                    <div className="todos-completed">
                        {completedTodos.map(todo => (
                            <div 
                                key={todo.text}
                                className = 'todos-in-completed'
                            >
                                <p>{todo.text}</p>
                                <button onClick={() => onDelete(todo.text)}> X </button>
                            </div>
                        ))}
                        {completedTodos.length === 0 && 
                            <h2>No hay TODOs completados</h2>
                        }
                    </div>
                </div>
            </div>
            }
            {loading &&
                <h1 className="cargando-todos">Cargando TODOs ...</h1>
            }
            {error &&
                <h1>Hay un error!!!</h1>
            }
        </div>
    )
}

export default TodoList;