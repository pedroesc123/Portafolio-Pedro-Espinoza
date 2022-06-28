import React, {useContext} from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import '../Styles/CreateTodoButton.css'

const CreateTodoButton = () => {
    const { watchInput, 
            onChangeWatchInput,
            addTodoValue,
            setAddTodoValue, 
            addTodo} = useContext(TodoContext)

    const onChange = (event) => {
        setAddTodoValue(event.target.value)
    }

    return(
        <div className="create-button-container">
            {!watchInput && 
                <button 
                    onClick={() => onChangeWatchInput()}
                    className = 'button-add-todo'
                >Agregar Tarea</button>
            }
            
            {watchInput && 
                <div className="send-button">
                    <input 
                        type="text" 
                        placeholder="Tarea para agregar"
                        value={addTodoValue}
                        onChange = {onChange}
                        className = 'button-send-tarea'
                    />
                    <button 
                        type="button" 
                        onClick={() => addTodo(addTodoValue)}
                        className = 'send'
                    >Enviar</button>
                </div>
            }
        </div>
    )
}

export default CreateTodoButton;