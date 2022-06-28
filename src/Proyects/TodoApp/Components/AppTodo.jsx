import React from "react";
import { AppUI } from "../AppUI";
import { TodoProvider } from "../TodoContext/TodoContext";

const AppTodo = () => {
    return (
        <TodoProvider>
            <AppUI/>
        </TodoProvider>
    )
}

export default AppTodo;