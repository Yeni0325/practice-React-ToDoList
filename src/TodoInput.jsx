export default function TodoInput({todo, handleChangeInput, handleClickTodo}){
  return(
    <div className="input-container">
      <input type="text" id="todo-input" value={todo} placeholder="할 일을 입력하세요..."  onChange={handleChangeInput}/>
      <button id="add-btn" onClick={handleClickTodo}>입력</button>
    </div>
  );
}