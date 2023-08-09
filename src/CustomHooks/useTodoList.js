import { useState, useEffect } from "react";
// custom hook called useTodoList that can be used to manage a todo list stored in local storage.
// The hook should return an object with the following properties:

// todos: an array of todo items, each of which should have the properties id, text, and completed.
// addTodo: a function that can be used to add a new todo item to the list.
// removeTodo: a function that can be used to remove a todo item from the list by its id.
// toggleTodo: a function that can be used to toggle the completion status of a todo item by its id.
//  Every time the todo list is updated We have already written some starting code for you.

const useTodoList = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  console.log(todos);
  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: text,
        completed: false,
      },
    ]);
  };
  const removeTodo = (id) => {
    const todosCopy = [...todos].filter((item, index) => item.id != id);

    setTodos(todosCopy);
  };
  const toggleTodo = (id) => {
    const todosCopy = [...todos];
    todosCopy.forEach((todos, todoid) => {
      if (todoid + 1 === id) {
        todos.completed = !todos.completed;
      }
      setTodos(todosCopy);
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return { todos, addTodo, removeTodo, toggleTodo };
};

export default useTodoList;
