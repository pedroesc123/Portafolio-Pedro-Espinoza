import React, {useState} from "react";
import useLocalStorage from '../hooks/useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider(props) {
    const [ todos, 
            saveTodos, 
            loading, 
            error] = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = useState('');
    const [watchInput, setWatchInput] = useState(false);
    const [addTodoValue, setAddTodoValue] = useState('');

    const completedTodos = todos.filter(todo => !!todo.completed);
    const notCompletedTodos = todos.filter(todo => !todo.completed)
    const totalTodos = todos.length;

    let searchedTodos = []

    if(!searchValue.length >= 1) {
        searchedTodos = notCompletedTodos;
    } else {
        searchedTodos = notCompletedTodos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        })
    }


    const onChangeWatchInput = () => {
        setWatchInput(!watchInput);
    }

    const addTodo = (addTodoValue) => {
        const newTodos = [...todos];
        const newValue = {
            text: addTodoValue,
            completed: false,
        }
        newTodos.push(newValue)
        setAddTodoValue('')
        setWatchInput(false)
        saveTodos(newTodos);
    }

    const completeTodo = (text) => {
        const index = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[index].completed = true;
        saveTodos(newTodos);
    }

    const onDelete = (text) => {
        const index = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(index, 1)
        saveTodos(newTodos)
    }

    return (
        <TodoContext.Provider value = {{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            loading,
            error, 
            completeTodo,
            onDelete,
            watchInput,
            onChangeWatchInput,
            addTodoValue,
            setAddTodoValue, 
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider}