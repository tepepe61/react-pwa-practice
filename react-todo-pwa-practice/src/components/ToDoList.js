const ToDoList = (props) => {
  const ToDoList = props.todos.map((todo) => {
    return <li key={todo.id}>{todo.content}</li>;
  });

  return (
    <div>
      <h2>あなたのToDo</h2>
      <ul>{ToDoList}</ul>
    </div>
  );
};
export default ToDoList;
