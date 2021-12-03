console.log('projects connected!');

const projects = [];

const newProject = (id, title, description, dueDate, priority, notes) => ({
  id,
  title,
  description,
  dueDate,
  priority,
  notes,
});

const defaultProject = newProject(
  1,
  'Project Title',
  'Project Description',
  'Project Due Date',
  'Priority',
  'Notes'
);

// const createProject = () => {};

const loadDefault = () => {
  const todos = document.querySelector('.todos');

  const todo = document.createElement('div');
  todo.classList.add('todo', `todo-${defaultProject.id}`);
  todos.appendChild(todo);

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('todo-title');
  todo.appendChild(titleDiv);

  const title = document.createElement('h2');
  title.classList.add('title');
  title.textContent = `${defaultProject.title}`;
  titleDiv.appendChild(title);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('todo-description');
  todo.appendChild(descriptionDiv);

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = `${defaultProject.description}`;
  descriptionDiv.appendChild(description);

  const dueDateDiv = document.createElement('div');
  dueDateDiv.classList.add('todo-due-date');
  todo.appendChild(dueDateDiv);

  const dueDate = document.createElement('p');
  dueDate.classList.add('due-date');
  dueDate.textContent = `${defaultProject.dueDate}`;
  dueDateDiv.appendChild(dueDate);

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
