console.log('todos connected!');

const renderTodos = () => {
  // TODO: create todo div
  const todos = document.createElement('div');
  todos.classList.add('todos');

  return todos;
};

export default renderTodos;
