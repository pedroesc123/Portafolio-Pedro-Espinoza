import React, {useContext} from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import '../Styles/TodoSearch.css'

const TodoSearch = () => {
    const {searchValue, setSearchValue} = useContext(TodoContext)

    const onChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className="search-container">
            <input 
            type="text" 
            placeholder="Buscar todo completado"
            onChange={onChange}
            value = {searchValue}
            className = 'input-search'
            />
        </div>
    )
}

export default TodoSearch;