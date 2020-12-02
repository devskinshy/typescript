import React, {useState} from 'react';
import './App.css';
import {TodoType} from "./types";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import {FILTER_ACTIVE, FILTER_COMPLETED} from "./constants";

// declare const $ : any;

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [edit, setEdit] = useState<number|null>(null);

  const viewTodos:TodoType[] = todos.filter((todo) => {
    switch (filter) {
      case FILTER_ACTIVE :
        return !todo.status;
      case FILTER_COMPLETED :
        return todo.status;
      default :
        return true;
    }
  })
  const activeTodosCount:number = todos.reduce((result, todo)=> {
    const counter:number = Number(!todo.status);
    return result + counter;
  }, 0)
  const allChecked = !!todos.length && !activeTodosCount;

  const changeFilter = (value: string) : void => {
    setFilter(value);
  }

  const toggleTodo = (index : number) : void => {
    const newTodos = todos.map((todo) => {
      if(index !== todo.index) {return todo}
      return {...todo, status : !todo.status};
    })

    setTodos(newTodos);
  }
  const toggleAllTodo = (toggle : boolean) : void => {
    const newTodos = todos.map((todo) => {
      todo.status = toggle;
      return todo;
    })

    setTodos(newTodos);
  }

  const addTodo = (value: string) : void => {
    const newIndex : number = 1 + (
      !todos.length
        ? todos.length
        : todos[todos.length - 1].index
    );
    const newTodo:TodoType = {
      index : newIndex,
      text : value,
      status : false
    }

    setTodos([...todos, newTodo]);
  }
  const remoteTodo = (index : number) : void => {
    const newTodos = todos.filter((todo) => index !== todo.index);

    setTodos(newTodos);
  }
  const editTodo = (index : number | null) : void => {
    console.log(index);
    setEdit(index);
  }
  const editSaveTodo = (text : string) => {
    const newTodos = todos.map((todo) => {
      if(edit !== todo.index) {return todo}
      return {...todo, text : text}
    })

    setTodos(newTodos);
  }
  const removeCompletedTodo = () => {
    const newTodos = todos.filter((todo) => !todo.status);
    setTodos(newTodos);
  }

  return (
    <div className={`todoapp`}>
      <Header
        allChecked={allChecked}
        setNewTodo={addTodo}
        toggleAllTodo={toggleAllTodo}
      />
      <div className={`main`}>
        <TodoList
          edit={edit}
          viewTodos={viewTodos}
          toggleTodo={toggleTodo}
          remoteTodo={remoteTodo}
          editTodo={editTodo}
          editSaveTodo={editSaveTodo}
        />
      </div>
      <Footer
        filter={filter}
        activeTodosCount={activeTodosCount}
        changeFilter={changeFilter}
        removeCompletedTodo={removeCompletedTodo}
      />
    </div>
  );
}

export default App;
