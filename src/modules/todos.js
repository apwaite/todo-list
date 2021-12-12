console.log('todos connected!');

const renderTodos = () => {
  const todos = document.createElement('div');
  todos.classList.add('todos');

  return todos;
};

export default renderTodos;
