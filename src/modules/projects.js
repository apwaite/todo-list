console.log('projects connected!');

const projects = [];

const newProject = (title, description, dueDate, priority, notes) => ({
  title,
  description,
  dueDate,
  priority,
  notes,
});

const defaultProject = newProject(
  'Title',
  'Description',
  'dueDate',
  'Priority',
  'Notes'
);

const loadDefault = () => {
  const todos = document.querySelector('.todos');

  const title = document.createElement('h2');
  title.classList.add('todo-title');
  title.textContent = `${defaultProject.title}`;
  todos.appendChild(title);

  const description = document.createElement('p');
  description.classList.add('todo-description');
  description.textContent = `${defaultProject.description}`;
  todos.appendChild(description);

  return todos;
};

export { projects, newProject, loadDefault };
