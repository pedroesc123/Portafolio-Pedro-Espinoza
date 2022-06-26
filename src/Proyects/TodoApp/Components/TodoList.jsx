import React from "react";
import '../Styles/TodoList.css'

const TodoList = () => {
    const tareas = [
        {
            todo: 'Cortar el tomate',
            completed: false,
        },
        {
            todo: 'Lavar el auto',
            completed: true,
        },
        {
            todo: 'Hacer el proyecto',
            completed: false,
        }
    ]
    return (
        <div className="container-todos">
            <div className="container-list">
                <h1>ToDo List</h1>
                <div className="todos-in-process">
                    {tareas.map(tarea => (
                        <p key={tarea.todo}>{tarea.todo}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TodoList;