import { useState } from 'react'

export default function Todo({todoList, checked, clicked, handleChecked, handleClickHamburger}){

  return(
    <>
      {
        todoList.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" value={checked} onChange={handleChecked}/>
            <span className="todo-text" style={{
              textDecorationLine : checked ? "line-through" : "none"
            }}>{todo}</span>
            <div className="actions">
              <button className="menu-btn" onClick={handleClickHamburger}>☰</button>
              {
                clicked ?
                <>
                  <button className="edit-btn">수정</button>
                  <button className="delete-btn">삭제</button>
                </>
                : '' 
              }
            </div> 
          </li>
        ))
      }
    </>
  );
}