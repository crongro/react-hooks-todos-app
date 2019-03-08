import React, {useContext} from 'react'
import './Item.css'
import { TodoContext } from './TodoStore.js';

const Item = ({todo}) => {

  const {dispatch} = useContext(TodoContext);

  const toggleItem = (e) => {
      const id = e.target.dataset.id;
      dispatch({type:'CHANGE_TODO_STATUS', payload:id});
  }

  const itemClassName = todo.status === 'done' ? 'done' : '';

  return (
    <li data-id={todo.id} onClick={toggleItem} className={itemClassName} > {todo.title} </li>
  )
}

export default Item
