import React, { useEffect, useReducer } from 'react';
import useFetch from './useFetch.js';
import {todoReducer}  from './reducers.js';

export const TodoContext = React.createContext();

const TodoStore = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const setInitData = (initData) => {
    dispatch({type:'SET_INIT_DATA', payload:initData})
  }

  const loading = useFetch(setInitData, 'http://localhost:8080/todo');

  useEffect( ()=> {
    console.log("새로운 내용이 렌더링됐네요", todos);
  }, [todos])

  return (
    <TodoContext.Provider value={ {todos, loading, dispatch} }>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoStore;
