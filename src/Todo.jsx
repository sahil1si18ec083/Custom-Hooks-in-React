import useTodoList from "./CustomHooks/useTodoList";
const Todo = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoList();
  const handleSubmit = (e) => {
    console.log("btn clicked");
    e.preventDefault();
    addTodo(e.target.elements.todoText.value);
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todoText" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              "text-decoration": `${todo.completed ? "line-through" : "none"}`,
            }}
          >
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "Incomplete" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
