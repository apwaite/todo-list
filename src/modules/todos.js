console.log('todos connected!');

const renderTodos = () => {
  const main = document.createElement('section');
  main.classList.add('main');
  // TODO: add some basic elements and display placeholder data
  const todos = document.createElement('div');
  todos.classList.add('todos');
  main.appendChild(todos);
  return main;
};

export default renderTodos;
