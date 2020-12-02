import React, {KeyboardEvent, useEffect, useRef} from 'react';
import {TodoType} from "../types";
import cx from 'classnames'
import {ENTER_KEY} from "../constants";

interface propTypes {
  edit : number|null
  todo : TodoType;
  toggleTodo : (index : number) => void
  remoteTodo : (index : number) => void
  editTodo : (index : number | null) => void
  editSaveTodo : (text : string) => void
}

const Todo = ({edit, todo, toggleTodo, remoteTodo, editTodo, editSaveTodo}:propTypes) => {
  const editor = useRef<HTMLInputElement>(null);
  const {
    index,
    text,
    status
  } = todo;

  useEffect(() => {
    edit === index && editor.current?.focus();
  }, [edit, index]);

  const handleToggleClick = () => {
    toggleTodo(index);
  }
  const handleRemoveClick = () => {
    remoteTodo(index);
  }
  const handleEditDoubleClick = () => {
    editTodo(index);
  }
  const handleEditBlur = () => {
    editTodo(null);
  }
  const handleEditSaveKeyUp = (e:KeyboardEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const value = target.value.trim();

    if(e.key !== ENTER_KEY) {return;}
    e.preventDefault();

    value ? editSaveTodo(value) : remoteTodo(index);
    editTodo(null);
  }

  return (
    <li className={cx({completed : status, editing : edit === index})}>
      <div className={`view`}>
        <input
          className={`toggle`}
          type={`checkbox`}
          checked={status}
          onChange={handleToggleClick}
        />
        <label
          onDoubleClick={handleEditDoubleClick}
        >{text}</label>
        <button
          className={`destroy`}
          onClick={handleRemoveClick}
        />
      </div>
      <input
        className={`edit`}
        defaultValue={text}
        ref={editor}
        onKeyUp={handleEditSaveKeyUp}
        onBlur={handleEditBlur}
      />
    </li>
  )
}

export default Todo;

