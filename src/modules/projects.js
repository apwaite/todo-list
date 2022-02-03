console.log('projects connected!');

const projects = [];

const newProject = (id, title, dueDate, completed, priority) => ({
  id,
  title,
  dueDate,
  completed,
  priority,
});

const defaultProject = newProject(
  1,
  'TODO Title',
  'TODO Due Date',
  'Completed',
  'Priority'
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

  // const notes = document.createElement('p');
  // notes.classList.add('notes');
  // notes.textContent = `${defaultProject.notes}`;
  // notesDiv.appendChild(notes);

  return todos;
};

export { projects, defaultProject, loadDefault };
