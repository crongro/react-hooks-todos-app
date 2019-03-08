import React, {useContext} from 'react'
import './Header.css';
import { TodoContext } from './TodoStore.js';

const Header = () => {
  const {todos} = useContext(TodoContext);
  return (
          <>
            <h1>HELLO TODO 애플리케이션</h1>
            <div className="countInfo">
              해야할일 ! {todos.filter(v => v.status === "todo").length}개가 있습니다
            </div>
          </>
  )
}

export default Header
