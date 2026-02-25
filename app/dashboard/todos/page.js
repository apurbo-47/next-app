import React from "react";

async function getAllTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 10 },
  });
  return await response.json();
}

async function TodosPage() {
  const todos = await getAllTodos();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Todos Title :</h1>
      <div className="grid grid-cols-3 gap-4">
        {todos &&
          Array.isArray(todos) &&
          todos.map((todo) => (
            <div
              className="border border-gray-400 p-5 shadow-lg rounded-lg"
              key={todo.id}
            >
              <h4>{todo.title}</h4>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TodosPage;
