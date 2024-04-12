import { useState } from 'react'

export default function Todo({todo}){
  const [checked, setChecked] = useState(false);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [updateTodo, setUpdateTodo] = useState(todo);

  const handleChecked = (e) => setChecked(e.target.checked);
  const handleClickHamburger = () => setHamburgerClicked(!hamburgerClicked);
  const handleUpdateTodo = () => setIsEditing(!isEditing);
  const handleDeleteTodo = () => setIsDeleted(!isDeleted);
  const handleChangeTodo = (e) => setUpdateTodo(e.target.value);

  return(
    isDeleted ? '' : 
      <li>
        <input type="checkbox" value={checked} onChange={handleChecked}/>
        {
          isEditing ? 
          <input type="text" value={updateTodo} onChange={handleChangeTodo}/> :
          <span className="todo-text" style={{
            textDecorationLine : checked ? "line-through" : "none"
          }}>{updateTodo}</span>
        }
        <div className="actions">
          <button className="menu-btn" onClick={handleClickHamburger}>☰</button>
          {
            hamburgerClicked ?
            <>
              {isEditing ? <button className="edit-btn" onClick={handleUpdateTodo}>저장</button> : <button className="edit-btn" onClick={handleUpdateTodo}>수정</button>}
              <button className="delete-btn" onClick={handleDeleteTodo}>삭제</button>
            </>
            : '' 
          }
        </div> 
      </li>
  );
}