console.log('todos connected!');

// const projects = [];

const newProject = (title, description, dueDate, priority, notes) => ({
  title,
  description,
  dueDate,
  priority,
  notes,
});

const defaultProject = newProject(
  'title',
  'description',
  'dueDate',
  'priority',
  'notes'
);

const renderTodos = () => {
  const todos = document.createElement('section');
  todos.classList.add('main');
  // TODO: add some basic elements and display placeholder data
  return todos;
};

export { renderTodos, defaultProject };
