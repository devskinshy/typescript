import React from 'react';
import cx from 'classnames';
import {FILTER_ACTIVE, FILTER_ALL, FILTER_COMPLETED} from "../constants";


interface propTypes {
  filter : string
  activeTodosCount : number;
  changeFilter : (value : string) => void;
  removeCompletedTodo : () => void;
}

const Footer = ({filter, activeTodosCount, changeFilter, removeCompletedTodo} : propTypes) => {
  const handleFilterChangeClick = (value : string) => {
    changeFilter(value);
  }
  const handleRemoveCompletedClick = () => {
    removeCompletedTodo();
  }
  return (
    <div className={`footer`}>
      <span className={`todo-count`}>
        <strong>{activeTodosCount}</strong>
        <span> </span>
        <span>items</span>
        <span>left</span>
      </span>
      <ul className={`filters`}>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className={cx({selected : filter === FILTER_ALL})}
            onClick={() => handleFilterChangeClick(FILTER_ALL)}
          >All</a>
        </li>
        <span> </span>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className={cx({selected : filter === FILTER_ACTIVE})}
            onClick={() => handleFilterChangeClick(FILTER_ACTIVE)}
          >Active</a>
        </li>
        <span> </span>
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className={cx({selected : filter === FILTER_COMPLETED})}
            onClick={() => handleFilterChangeClick(FILTER_COMPLETED)}
          >Completed</a>
        </li>
      </ul>
      <button className={`clear-completed`} onClick={handleRemoveCompletedClick}>Clear completed</button>
    </div>
  )
}

export default Footer;
