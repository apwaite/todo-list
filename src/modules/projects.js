console.log('projects connected!');

const projects = [];

const addProject = (projectName) => {
  if (projectName) {
    projects.push(projectName);
    console.log('Project added: ', projectName);
    console.log('Current projects: ', projects);
  } else {
    console.error('Project name cannot be empty.');
  }
};

const newProject = (id, title, dueDate, completed, priority, remove) => ({
  id,
  title,
  dueDate,
  completed,
  priority,
  remove,
});

const defaultProject = newProject(
  1,
  'TODO Title',
  'TODO Due Date',
  'Completed',
  'Priority',
  false
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

  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = `${defaultProject.title}`;
  titleDiv.appendChild(title);

  // const descriptionDiv = document.createElement('div');
  // descriptionDiv.classList.add('todo-description');
  // todo.appendChild(descriptionDiv);

  // const description = document.createElement('p');
  // description.classList.add('description');
  // description.textContent = `${defaultProject.description}`;
  // descriptionDiv.appendChild(description);

  const dueDateDiv = document.createElement('div');
  dueDateDiv.classList.add('todo-due-date');
  todo.appendChild(dueDateDiv);

  const dueDate = document.createElement('p');
  dueDate.classList.add('due-date');
  dueDate.textContent = `${defaultProject.dueDate}`;
  dueDateDiv.appendChild(dueDate);

  const completedDiv = document.createElement('div');
  completedDiv.classList.add('todo-completed');
  todo.appendChild(completedDiv);

  const completed = document.createElement('p');
  completed.classList.add('completed');
  completed.textContent = `${defaultProject.completed}`;
  completedDiv.appendChild(completed);

  const priorityDiv = document.createElement('div');
  priorityDiv.classList.add('todo-priority');
  todo.appendChild(priorityDiv);

  const priority = document.createElement('p');
  priority.classList.add('priority');
  priority.textContent = `${defaultProject.priority}`;
  priorityDiv.appendChild(priority);

  const removeTodoDiv = document.createElement('div');
  removeTodoDiv.classList.add('todo-remove');
  todo.appendChild(removeTodoDiv);

  const removeTodo = document.createElement('p');
  removeTodo.classList.add('remove');
  removeTodo.textContent = `${defaultProject.remove}`;
  removeTodoDiv.appendChild(removeTodo);

  return todos;
};

export { projects, addProject, loadDefault };
