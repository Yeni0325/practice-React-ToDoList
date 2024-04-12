import Todo from "./Todo";

export default function TodoList({todoList}){
  return(
    <ul id="todo-list">
      {
        todoList.map((todo, index) => (
          <Todo todo={todo} key={index} />
        ))     
      }
    </ul>
  );
}