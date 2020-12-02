import React from 'react';
import {TodoType} from "../types";
import Todo from './Todo';

interface propTypes {
  edit : number|null
  viewTodos : TodoType[]
  toggleTodo : (index : number) => void
  remoteTodo : (index : number) => void
  editTodo : (index : number | null) => void
  editSaveTodo : (text : string) => void
}

const TodoList = ({edit, viewTodos, toggleTodo, remoteTodo, editTodo, editSaveTodo} : propTypes) => {
  return (
    <ul className={`todo-list`}>
      {
        viewTodos.map((todo) =>
          <Todo
            key={todo.index}
            edit={edit}
            todo={todo}
            toggleTodo={toggleTodo}
            remoteTodo={remoteTodo}
            editTodo={editTodo}
            editSaveTodo={editSaveTodo}
          />
        )
      }
    </ul>
  )
}

export default TodoList;
