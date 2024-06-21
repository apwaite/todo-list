// import { projects } from './projects';

console.log('todos connected!');

// const projectTodos = [];

// const defaultTodos = [];

// const addTodoBtn = () => {

// }

const renderTodos = () => {
  const todos = document.createElement('div');
  todos.classList.add('todos');

  const addNewTodo = document.createElement('button');
  addNewTodo.classList.add('new-todo-btn');
  addNewTodo.textContent = '+';
  todos.appendChild(addNewTodo);
  return todos;
};

export default renderTodos;
