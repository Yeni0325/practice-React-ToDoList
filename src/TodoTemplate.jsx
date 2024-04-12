import { useState } from 'react'
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoTemplate () {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  
  const handleChangeInput = (e) => setTodo(e.target.value);
  const handleClickTodo = () => {
    // setTodoList([...todoList, todo]);
    setTodoList(prevTodoList => [...prevTodoList, todo]);
    setTodo('');
  }

  return(
    <div className="todo-container">
      <h1>To Do List</h1>
      <TodoInput todo={todo} handleChangeInput={handleChangeInput} handleClickTodo={handleClickTodo}/>
      <TodoList todoList={todoList}/>
    </div>
  );
}