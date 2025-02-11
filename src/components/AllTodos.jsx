import React from "react";

const AllTodos = ({ allTodos, deleteCard, editCard }) => {
  return (
    <div className="m-4 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {allTodos?.map((element) => (
        <section
          key={element.id}
          className="flex flex-col items-center justify-between border-2 border-amber-300 bg-amber-100 ml-5 w-72 h-36 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-lg font-bold text-center text-gray-800 break-words">
            {element.text}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => editCard(element.id)}
              className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200"
            >
              Edit
            </button>
            <button
              onClick={() => deleteCard(element.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200"
            >
              Delete
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AllTodos;
