console.log('projects connected!');

const projects = ['Study', 'Shopping'];

const addProject = (projectName) => {
  projects.push(projectName);
  console.log('Project added: ', projectName);
  console.log('Current projects: ', projects);
};

const updateProjects = () => {
  const projectList = document.querySelector('.project-list');
  if (projectList) {
    // Store last item added to the array using destructuring
    const [lastItem] = projects.slice(-1);
    const lastItemIndex = projects.length - 1;
    const updateProject = document.createElement('button');
    updateProject.classList.add('project-btn');
    updateProject.dataset.id = lastItemIndex;
    updateProject.textContent = lastItem;
    projectList.appendChild(updateProject);
  } else {
    console.error('project-list element not found!');
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

export { projects, addProject, updateProjects, loadDefault };
