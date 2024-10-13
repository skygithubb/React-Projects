import React from 'react';
import TodoCard from './TodoCard';

function TodoList({ todos, handleDeleteTodo, handleEditTodo }) {
  return (
    <div className="p-4 bg-blue-900 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl text-white font-semibold text-center mb-4">Your Todos</h2>
      {todos.length === 0 ? (
        <p className="text-center text-white">Please add a todo</p>
      ) : (
        <ul className="list-disc list-inside">
          <TodoCard handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
        </ul>
      )}
    </div>
  );
}

export default TodoList;
