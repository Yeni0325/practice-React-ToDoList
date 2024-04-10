import { useState } from 'react'
import Todo from './Todo'
import './App.css'

function App() {
  /*
    1. 할일을 입력하고 '입력'버튼 클릭 시 이전에 입력한 할일이 하단에 띄워져야함
  */
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [checked, setChecked] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  const handleChangeInput = (e) => setTodo(e.target.value);
  const handleClickTodo = () => setTodoList([...todoList, todo]);
  const handleChecked = (e) => setChecked(e.target.checked);
  const handleClickHamburger = () => setClicked(!clicked);

  return (
    <div className="todo-container">
        <h1>To Do List</h1>
        <div className="input-container">
          <input type="text" id="todo-input" value={todo} placeholder="할 일을 입력하세요..."  onChange={handleChangeInput}/>
          <button id="add-btn" onClick={handleClickTodo}>입력</button>
        </div>
        <ul id="todo-list">
            <Todo todoList={todoList} checked={checked} clicked={clicked} handleChecked={handleChecked} handleClickHamburger={handleClickHamburger}/>
        </ul>
    </div>
  )
}

export default App
