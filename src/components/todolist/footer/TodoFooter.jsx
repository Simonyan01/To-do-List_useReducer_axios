const TodoFooter = ({ todos, onClearCompleted }) => {

  const completedSize = todos.filter((todo) => todo.isCompleted).length;

  return (
    <section className="text-gray-600 px-5">
      <span className="select-none tracking-wider cursor-default">
        {completedSize} / {todos.length} Completed
      </span>
      <button className="flex cursor-pointer float-right border-none text-base text-gray-600 bg-gray-300 py-1 px-6 transition-all hover:scale-110 hover:text-base duration-300 ease-in tracking-wider mt-1.5 rounded-md"
        onClick={onClearCompleted}>
        Clear Completed
      </button>
    </section>
  );
}

export default TodoFooter
