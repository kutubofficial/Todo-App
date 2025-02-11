import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import AllTodos from "./AllTodos";

const TodoWrapper = () => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([{ text: "Hello", id: 1 }]);

  const handle = (e) => {
    setTodo(e.target.value);
  };

  const createForm = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      const newTodo = {
        text: todo,
        id: Date.now(),
      };
      setAllTodos([...allTodos, newTodo]);
      setTodo("");
    }
  };

  const deleteCard = (id) => {
    const filterDelete = allTodos.filter((elm) => elm.id !== id);
    setAllTodos(filterDelete);
  };

  const editCard = (id) => {
    const findEdit = allTodos.find((elm) => elm.id === id);
    setTodo(findEdit.text);
    const filterEdit = allTodos.filter((elm) => elm.id !== id);
    setAllTodos(filterEdit);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <h1 className="text-3xl font-bold text-center text-amber-600 mb-8">
        Todo App
      </h1>
      <CreateTodo todo={todo} handle={handle} handleSubmit={createForm} />
      <AllTodos
        allTodos={allTodos}
        deleteCard={deleteCard}
        editCard={editCard}
      />
    </div>
  );
};

export default TodoWrapper;
