import * as Api from "../service/api";

const ToDoList = (props) => {
  const deleteHandle = async (id) => {
    await Api.todoDelete(id);
    props.fetch();
  };

  const ToDoList = props.todos.map((todo) => {
    return (
      <li key={todo.id}>
        {todo.content}
        <button type="button" onClick={() => deleteHandle(todo.id)}>
          削除
        </button>
      </li>
    );
  });

  return (
    <div>
      <h2>あなたのToDo</h2>
      <ul>{ToDoList}</ul>
    </div>
  );
};
export default ToDoList;
