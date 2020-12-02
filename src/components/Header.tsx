import React, {KeyboardEvent} from 'react';
import {ENTER_KEY} from "../constants";

interface propTypes {
  allChecked : boolean;
  setNewTodo : (value: string) => void;
  toggleAllTodo : (toggle : boolean) => void;
}

const Header = ({allChecked, setNewTodo, toggleAllTodo}: propTypes) => {
  const handleAddKeyUp = (e:KeyboardEvent<HTMLInputElement>) : void => {
    const target = e.currentTarget;
    const value = target.value.trim();

    if(!value || e.key!==ENTER_KEY) {return;}
    e.preventDefault();

    setNewTodo(value);
    target.value = '';
  }
  const handleToggleAllChange = () => {
    toggleAllTodo(!allChecked);
  }

  return (
    <div className={`header`}>
      <input
        className={`new-todo`}
        placeholder={`what needs to be done?`}
        onKeyUp={handleAddKeyUp}
      />
      <input
        id={`toggle-all`}
        className={`toggle-all`}
        type={`checkbox`}
        checked={allChecked}
        onChange={handleToggleAllChange}
      />
      <label htmlFor={`toggle-all`}/>
    </div>
  );
}

export default Header;
