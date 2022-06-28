import React from 'react';
import TodoCounter from './Components/TodoCounter'
import TodoList from './Components/TodoList'
import CreateTodoButton from './Components/CreateTodoButton'

function AppUI() {
  return (
    <React.Fragment>
      <TodoCounter />
      <CreateTodoButton />
      <TodoList/>
    </React.Fragment>
  );
}

export { AppUI };