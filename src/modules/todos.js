// const projects = [];

// const newProject = (title, description, dueDate, priority, notes) => ({
//   title,
//   description,
//   dueDate,
//   priority,
//   notes,
// });

const renderTodos = () => {
  const todos = document.createElement('section');
  todos.classList.add('main');
  return todos;
};

export default renderTodos;
