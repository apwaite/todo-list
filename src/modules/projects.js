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
  'Due Date',
  'Priority',
  'Notes'
);

// const createProject = () => {};

const loadDefault = () => {
  const todos = document.querySelector('.todos');

  const todo = document.createElement('div');
  todo.classList.add('todo');
  todos.appendChild(todo);

  const title = document.createElement('h2');
  title.classList.add('todo-title');
  title.textContent = `${defaultProject.title}`;
  todo.appendChild(title);

  const description = document.createElement('p');
  description.classList.add('todo-description');
  description.textContent = `${defaultProject.description}`;
  todo.appendChild(description);

  const dueDate = document.createElement('p');
  dueDate.classList.add('todo-dueDate');
  dueDate.textContent = `${defaultProject.dueDate}`;
  todo.appendChild(dueDate);

  const priority = document.createElement('p');
  priority.classList.add('todo-priority');
  priority.textContent = `${defaultProject.priority}`;
  todo.appendChild(priority);

  const notes = document.createElement('p');
  notes.classList.add('todo-priority');
  notes.textContent = `${defaultProject.notes}`;
  todo.appendChild(notes);

  return todos;
};

export { projects, newProject, loadDefault };
