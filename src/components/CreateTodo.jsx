import React from "react";

const CreateTodo = ({ todo, handle, handleSubmit }) => {
  return (
    <div className="flex justify-center my-8">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter todo.."
          value={todo}
          onChange={handle}
          className="border-2 border-gray-300 rounded-full px-6 py-2 w-64 focus:outline-none focus:border-amber-500 transition-colors duration-200"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-200"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
