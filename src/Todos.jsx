import { useState } from 'react'
import Todo from './Todo';

export default function Todos({todoList}){
  return(
    <>
      {
        todoList.map((todo, index) => (
          <Todo todo={todo} key={index} />
        ))
      }
    </>
  );
}