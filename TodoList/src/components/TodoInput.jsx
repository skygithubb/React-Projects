function TodoInput({ handleAddTodos, todoValue, setTodoValue }) {
    const handleAdd = () => {
      if (todoValue.trim() !== "") {
        handleAddTodos(todoValue);
        setTodoValue("");
      }
    };
  
    return (
      <div className="flex justify-center p-4">
        <input
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          className="border shadow-md rounded-md p-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mr-2"
          placeholder="Enter a todo"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 shadow-lg text-white font-semibold p-2 rounded-md hover:bg-blue-600 hover:shadow-xl transition duration-300 ease-in-out"
        >
          Add
        </button>
      </div>
    );
  }
  
  export default TodoInput;
  